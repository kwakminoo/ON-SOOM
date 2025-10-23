import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

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
}

// 데이터 파일 경로
const DATA_FILE = path.join(process.cwd(), "data", "posts.json");

// 게시글 목록 읽기
function readPosts(): Post[] {
  if (!fs.existsSync(DATA_FILE)) {
    return [];
  }
  const data = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(data);
}

// GET - 개별 게시글 다운로드
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const postId = parseInt(params.id);

    if (isNaN(postId)) {
      return NextResponse.json(
        {
          code: "INVALID_ID",
          message: "유효하지 않은 게시글 ID입니다",
        },
        { status: 400 }
      );
    }

    const posts = readPosts();
    const post = posts.find((p) => p.id === postId);

    if (!post) {
      return NextResponse.json(
        {
          code: "NOT_FOUND",
          message: "게시글을 찾을 수 없습니다",
        },
        { status: 404 }
      );
    }

    // 텍스트 파일 형식으로 변환
    const textContent = `
========================================
${post.title}
========================================

카테고리: ${post.category}
작성자: ${post.author}
작성일: ${post.date}
조회수: ${post.views}
${post.badge ? `배지: ${post.badge}` : ""}
${post.isNotice ? "구분: 공지사항" : ""}

========================================
내용
========================================

${post.content}

========================================
온숨심리상담센터 (ON:SOOM)
========================================
`.trim();

    // 파일명 생성 (특수문자 제거)
    const safeTitle = post.title
      .replace(/[^\w\s가-힣]/g, "")
      .replace(/\s+/g, "_")
      .substring(0, 50);
    const filename = `${safeTitle}_${post.id}.txt`;

    return new NextResponse(textContent, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Content-Disposition": `attachment; filename="${encodeURIComponent(
          filename
        )}"`,
      },
    });
  } catch (error) {
    console.error("Download post error:", error);
    return NextResponse.json(
      {
        code: "INTERNAL_ERROR",
        message: "다운로드 중 오류가 발생했습니다",
      },
      { status: 500 }
    );
  }
}

