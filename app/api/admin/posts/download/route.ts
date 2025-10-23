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

// CSV 형식으로 변환
function convertToCSV(posts: Post[]): string {
  const headers = ["번호", "카테고리", "제목", "작성자", "작성일", "조회수", "공지여부"];
  const rows = posts.map((post) => [
    post.id,
    post.category,
    `"${post.title.replace(/"/g, '""')}"`, // CSV 이스케이프
    post.author,
    post.date,
    post.views,
    post.isNotice ? "공지" : "일반",
  ]);

  const csvContent = [
    headers.join(","),
    ...rows.map((row) => row.join(",")),
  ].join("\n");

  // UTF-8 BOM 추가 (엑셀 한글 깨짐 방지)
  return "\uFEFF" + csvContent;
}

// GET - 게시글 다운로드
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const format = searchParams.get("format") || "json"; // json 또는 csv

    const posts = readPosts();

    if (posts.length === 0) {
      return NextResponse.json(
        {
          code: "NO_DATA",
          message: "다운로드할 게시글이 없습니다",
        },
        { status: 404 }
      );
    }

    const timestamp = new Date().toISOString().split("T")[0];

    if (format === "csv") {
      // CSV 다운로드
      const csvData = convertToCSV(posts);

      return new NextResponse(csvData, {
        status: 200,
        headers: {
          "Content-Type": "text/csv; charset=utf-8",
          "Content-Disposition": `attachment; filename="posts_${timestamp}.csv"`,
        },
      });
    } else {
      // JSON 다운로드 (기본)
      const jsonData = JSON.stringify(posts, null, 2);

      return new NextResponse(jsonData, {
        status: 200,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Content-Disposition": `attachment; filename="posts_${timestamp}.json"`,
        },
      });
    }
  } catch (error) {
    console.error("Download posts error:", error);
    return NextResponse.json(
      {
        code: "INTERNAL_ERROR",
        message: "다운로드 중 오류가 발생했습니다",
      },
      { status: 500 }
    );
  }
}

