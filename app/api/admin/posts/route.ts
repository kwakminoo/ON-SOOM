import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";

// 게시글 스키마
const postSchema = z.object({
  category: z.enum(["공지사항", "일반"]),
  title: z.string().min(1, "제목을 입력해주세요"),
  content: z.string().min(1, "내용을 입력해주세요"),
  badge: z.string().optional(),
  badgeColor: z.string().optional(),
  isNotice: z.boolean().default(false),
  author: z.string().optional(),
  files: z
    .array(
      z.object({
        filename: z.string(),
        originalName: z.string(),
        size: z.number(),
        mimetype: z.string(),
        url: z.string(),
      })
    )
    .optional()
    .default([]),
});

interface PostFile {
  filename: string;
  originalName: string;
  size: number;
  mimetype: string;
  url: string;
}

interface Post {
  id: number;
  category: string;
  title: string;
  content: string;
  date: string;
  author: string;
  views: number;
  badge?: string;
  badgeColor?: string;
  isNotice: boolean;
  files?: PostFile[];
}

// Supabase 클라이언트 생성
function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase 환경 변수가 설정되지 않았습니다.");
  }

  return createClient(supabaseUrl, supabaseAnonKey);
}

// 날짜 포맷 변환 (YYYY.MM.DD)
function formatDate(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
}

// DB Post를 API Post 형식으로 변환
function transformPost(dbPost: any): Post {
  return {
    id: dbPost.id,
    category: dbPost.category,
    title: dbPost.title,
    content: dbPost.content,
    date: formatDate(dbPost.created_at),
    author: dbPost.author_name || "관리자",
    views: dbPost.views || 0,
    badge: dbPost.badge || undefined,
    badgeColor: dbPost.badge_color || undefined,
    isNotice: dbPost.is_notice || false,
    files: dbPost.files || [],
  };
}

async function fetchPostFiles(
  supabase: ReturnType<typeof getSupabaseClient>,
  postIds: number[]
) {
  if (postIds.length === 0) {
    return new Map<number, PostFile[]>();
  }

  const { data, error } = await supabase
    .from("admin_post_files")
    .select("*")
    .in("post_id", postIds);

  if (error) {
    throw error;
  }

  return mapFilesByPostId(data || []);
}

function mapFilesByPostId(
  data: Array<Record<string, any>>
) {
  const filesByPostId = new Map<number, PostFile[]>();

  data.forEach((file) => {
    const sizeValue =
      typeof file.file_size === "number"
        ? file.file_size
        : typeof file.size === "number"
        ? file.size
        : 0;

    const mimeValue =
      file.mime_type ||
      file.mimetype ||
      file.mimeType ||
      "application/octet-stream";

    const transformed: PostFile = {
      filename: file.filename,
      originalName: file.original_name || file.originalName || file.name || "",
      size: sizeValue,
      mimetype: mimeValue,
      url: file.file_url || file.url || "",
    };

    const existing = filesByPostId.get(file.post_id) || [];
    filesByPostId.set(file.post_id, [...existing, transformed]);
  });

  return filesByPostId;
}

async function parseRequestBody(request: NextRequest) {
  const contentType = request.headers.get("content-type") || "";

  try {
    if (contentType.includes("application/json")) {
      return await request.json();
    }

    const rawText = (await request.text()).trim();
    if (!rawText) {
      return {};
    }

    // PowerShell에서 단일 인용부호가 포함되어 전달되는 경우 제거
    const normalized = rawText.replace(/^'+|'+$/g, "");
    return JSON.parse(normalized);
  } catch (error) {
    console.error("Invalid JSON payload:", error);
    throw new Error("INVALID_JSON");
  }
}

// GET - 게시글 목록 조회
export async function GET(request: NextRequest) {
  try {
    const supabase = getSupabaseClient();

    // 게시글 목록 조회 (삭제되지 않은 것만, 최신순)
    const { data: postsData, error: postsError } = await supabase
      .from("admin_posts")
      .select("*")
      .is("deleted_at", null)
      .order("created_at", { ascending: false });

    if (postsError) {
      console.error("Supabase error:", postsError);
      throw postsError;
    }

    // 첨부파일 조회 (FK 관계 없이도 작동하도록 별도 호출)
    const postIds = (postsData || []).map((post: any) => post.id);
    const filesByPostId = await fetchPostFiles(supabase, postIds);

    // 첨부파일 형식 변환
    const posts = (postsData || []).map((post: any) => {
      const transformed = transformPost(post);

      const relatedFiles = filesByPostId.get(post.id);
      if (relatedFiles && relatedFiles.length > 0) {
        transformed.files = relatedFiles;
      }

      return transformed;
    });

    return NextResponse.json(
      {
        code: "SUCCESS",
        message: "게시글 목록을 불러왔습니다",
        data: posts,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Get posts error:", error);
    return NextResponse.json(
      {
        code: "INTERNAL_ERROR",
        message: error instanceof Error ? error.message : "서버 오류가 발생했습니다",
      },
      { status: 500 }
    );
  }
}

// POST - 게시글 작성
export async function POST(request: NextRequest) {
  try {
    // 관리자 권한 확인 (헤더나 세션에서)
    // 현재는 간단히 구현, 나중에 미들웨어로 개선
    let body: unknown;
    try {
      body = await parseRequestBody(request);
    } catch {
      return NextResponse.json(
        {
          code: "INVALID_JSON",
          message: "요청 본문이 올바른 JSON 형식이 아닙니다.",
        },
        { status: 400 }
      );
    }

    // 입력 검증
    const validationResult = postSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          code: "VALIDATION_ERROR",
          message: "입력값을 확인해주세요",
          errors: validationResult.error.errors,
        },
        { status: 400 }
      );
    }

    const {
      category,
      title,
      content,
      badge,
      badgeColor,
      isNotice,
      author,
      files = [],
    } = validationResult.data;

    const supabase = getSupabaseClient();

    // 게시글 삽입
    const { data: newPostData, error: postError } = await supabase
      .from("admin_posts")
      .insert({
        category,
        title,
        content,
        author_name: author || "관리자",
        views: 0,
        badge: badge || "신규",
        badge_color: badgeColor || "bg-blue-100 text-blue-600",
        is_notice: isNotice,
      })
      .select()
      .single();

    if (postError) {
      console.error("Supabase insert error:", postError);
      throw postError;
    }

    // 첨부파일이 있으면 저장
    if (files && files.length > 0 && newPostData) {
      const fileInserts = files.map((file) => ({
        post_id: newPostData.id,
        filename: file.filename,
        original_name: file.originalName,
        file_size: file.size,
        mime_type: file.mimetype,
        file_url: file.url,
      }));

      const { error: filesError } = await supabase
        .from("admin_post_files")
        .insert(fileInserts);

      if (filesError) {
        const missingColumn =
          filesError.code === "42703" &&
          filesError.message?.toLowerCase().includes("file_size");

        if (missingColumn) {
          const fallbackPayload = fileInserts.map(
            ({ file_size, ...rest }) => rest
          );

          const fallbackResult = await supabase
            .from("admin_post_files")
            .insert(fallbackPayload);

          if (fallbackResult.error) {
            console.error(
              "Supabase files insert fallback error:",
              fallbackResult.error
            );
          }
        } else {
          console.error("Supabase files insert error:", filesError);
        }
      }
    }

    // 응답 형식 변환
    const transformedPost = transformPost(newPostData);
    if (files && files.length > 0) {
      transformedPost.files = files;
    }

    return NextResponse.json(
      {
        code: "SUCCESS",
        message: "게시글이 작성되었습니다",
        data: transformedPost,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create post error:", error);
    return NextResponse.json(
      {
        code: "INTERNAL_ERROR",
        message: error instanceof Error ? error.message : "서버 오류가 발생했습니다",
      },
      { status: 500 }
    );
  }
}

