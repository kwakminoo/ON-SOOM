import { NextResponse } from "next/server";

export async function POST() {
  try {
    // 클라이언트에서 localStorage를 사용하므로 서버에서는 성공 응답만 반환
    return NextResponse.json(
      {
        code: "SUCCESS",
        message: "로그아웃되었습니다",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json(
      {
        code: "INTERNAL_ERROR",
        message: "서버 오류가 발생했습니다",
      },
      { status: 500 }
    );
  }
}

