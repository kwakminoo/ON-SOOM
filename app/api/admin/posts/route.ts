import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import fs from "fs";
import path from "path";

// 게시글 스키마
const postSchema = z.object({
  category: z.enum(["공지사항", "일반"]),
  title: z.string().min(1, "제목을 입력해주세요"),
  content: z.string().min(1, "내용을 입력해주세요"),
  badge: z.string().optional(),
  badgeColor: z.string().optional(),
  isNotice: z.boolean().default(false),
  files: z.array(z.object({
    filename: z.string(),
    originalName: z.string(),
    size: z.number(),
    mimetype: z.string(),
    url: z.string(),
  })).optional(),
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

// 데이터 파일 경로 (나중에 DB로 대체)
const DATA_FILE = path.join(process.cwd(), "data", "posts.json");

// 데이터 디렉토리 확인 및 생성
function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

// 게시글 목록 읽기
function readPosts(): Post[] {
  ensureDataDirectory();
  if (!fs.existsSync(DATA_FILE)) {
    return [];
  }
  const data = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(data);
}

// 게시글 목록 저장
function writePosts(posts: Post[]) {
  ensureDataDirectory();
  fs.writeFileSync(DATA_FILE, JSON.stringify(posts, null, 2), "utf-8");
}

// 현재 날짜 포맷 (YYYY.MM.DD)
function getCurrentDate(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
}

// GET - 게시글 목록 조회
export async function GET(request: NextRequest) {
  try {
    const posts = readPosts();

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
        message: "서버 오류가 발생했습니다",
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
    const body = await request.json();

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

    const { category, title, content, badge, badgeColor, isNotice, files } =
      validationResult.data;

    // 기존 게시글 목록 읽기
    const posts = readPosts();

    // 새 게시글 생성
    const newPost: Post = {
      id: posts.length > 0 ? Math.max(...posts.map((p) => p.id)) + 1 : 1,
      category,
      title,
      content,
      date: getCurrentDate(),
      author: body.author || "관리자",
      views: 0,
      badge: badge || "신규",
      badgeColor: badgeColor || "bg-blue-100 text-blue-600",
      isNotice,
      files: files || [],
    };

    // 게시글 추가 (최신 글이 앞에 오도록)
    posts.unshift(newPost);

    // 저장
    writePosts(posts);

    return NextResponse.json(
      {
        code: "SUCCESS",
        message: "게시글이 작성되었습니다",
        data: newPost,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create post error:", error);
    return NextResponse.json(
      {
        code: "INTERNAL_ERROR",
        message: "서버 오류가 발생했습니다",
      },
      { status: 500 }
    );
  }
}

