import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// 입력 검증 스키마
const loginSchema = z.object({
  username: z.string().min(1, "아이디를 입력해주세요"),
  password: z.string().min(1, "비밀번호를 입력해주세요"),
});

// 테스트 계정 (나중에 DB로 대체)
const TEST_ACCOUNTS = [
  {
    username: "test",
    password: "test",
    role: "user",
    name: "일반 사용자",
  },
  {
    username: "master",
    password: "test",
    role: "admin",
    name: "관리자",
  },
  {
    username: "sbjd1116",
    password: "ydp12000",
    role: "admin",
    name: "운영 관리자",
  },
] as const;

export async function POST(request: NextRequest) {
  try {
    // 요청 본문 파싱
    const body = await request.json();

    // 입력 검증
    const validationResult = loginSchema.safeParse(body);
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

    const { username, password } = validationResult.data;

    // 계정 확인
    const account = TEST_ACCOUNTS.find(
      (acc) => acc.username === username && acc.password === password
    );

    if (!account) {
      return NextResponse.json(
        {
          code: "INVALID_CREDENTIALS",
          message: "아이디 또는 비밀번호가 일치하지 않습니다. 다시 확인해주세요.",
        },
        { status: 401 }
      );
    }

    // 로그인 성공
    return NextResponse.json(
      {
        code: "SUCCESS",
        message: "로그인에 성공했습니다",
        data: {
          username: account.username,
          name: account.name,
          role: account.role,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      {
        code: "INTERNAL_ERROR",
        message: "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
      },
      { status: 500 }
    );
  }
}

