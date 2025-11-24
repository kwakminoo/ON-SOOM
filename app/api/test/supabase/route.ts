import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Supabase 연결 테스트용 API
export async function GET() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    // 환경 변수 확인
    if (!supabaseUrl || !supabaseAnonKey) {
      return NextResponse.json(
        {
          success: false,
          error: "환경 변수 미설정",
          message: "NEXT_PUBLIC_SUPABASE_URL 또는 NEXT_PUBLIC_SUPABASE_ANON_KEY가 설정되지 않았습니다.",
          details: {
            hasUrl: !!supabaseUrl,
            hasKey: !!supabaseAnonKey,
          },
        },
        { status: 500 }
      );
    }

    // Supabase 클라이언트 생성
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    // 간단한 연결 테스트 (테이블 목록 조회)
    const { data, error } = await supabase
      .from("admin_posts")
      .select("id")
      .limit(1);

    if (error) {
      // 테이블이 없거나 권한 문제일 수 있음
      return NextResponse.json(
        {
          success: false,
          error: "Supabase 연결 오류",
          message: error.message,
          details: {
            code: error.code,
            hint: error.hint,
            details: error.details,
          },
          connection: {
            url: supabaseUrl,
            keyLength: supabaseAnonKey.length,
          },
        },
        { status: 500 }
      );
    }

    // 성공
    return NextResponse.json(
      {
        success: true,
        message: "Supabase 연결 성공!",
        connection: {
          url: supabaseUrl,
          keyLength: supabaseAnonKey.length,
        },
        test: {
          tableExists: true,
          sampleCount: data?.length || 0,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "예상치 못한 오류",
        message: error instanceof Error ? error.message : "알 수 없는 오류",
      },
      { status: 500 }
    );
  }
}

