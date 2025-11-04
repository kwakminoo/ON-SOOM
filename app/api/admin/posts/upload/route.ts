import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// 파일 크기 제한 없음 (Next.js 기본 제한 제거)
export const maxDuration = 300; // 5분
export const runtime = "nodejs";

// 업로드 디렉토리 확인 및 생성
function ensureUploadDirectory() {
  const uploadDir = path.join(process.cwd(), "public", "uploads");
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }
  return uploadDir;
}

// POST - 파일 업로드
export async function POST(request: NextRequest) {
  try {
    const uploadDir = ensureUploadDirectory();

    // FormData 파싱
    const formData = await request.formData();
    
    // FormData에서 파일 추출
    const files: File[] = [];
    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        files.push(value);
      }
    }

    // 파일이 없으면 에러
    if (files.length === 0) {
      return NextResponse.json(
        {
          code: "NO_FILE",
          message: "업로드할 파일이 없습니다",
        },
        { status: 400 }
      );
    }

    // 파일 저장 및 메타데이터 수집
    const uploadedFiles: Array<{
      filename: string;
      originalName: string;
      size: number;
      mimetype: string;
      path: string;
      url: string;
    }> = [];

    for (const file of files) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // 안전한 파일명 생성 (원본 파일명 + 타임스탬프)
      const timestamp = Date.now();
      const originalName = file.name;
      const ext = path.extname(originalName);
      const baseName = path.basename(originalName, ext);
      const safeBaseName = baseName.replace(/[^a-zA-Z0-9가-힣_-]/g, "_");
      const filename = `${safeBaseName}_${timestamp}${ext}`;
      const filePath = path.join(uploadDir, filename);

      // 파일 저장
      fs.writeFileSync(filePath, buffer);

      // 파일 정보 저장
      uploadedFiles.push({
        filename,
        originalName,
        size: file.size,
        mimetype: file.type || "application/octet-stream",
        path: filePath,
        url: `/uploads/${filename}`,
      });
    }

    return NextResponse.json(
      {
        code: "SUCCESS",
        message: "파일이 업로드되었습니다",
        data: uploadedFiles,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("File upload error:", error);
    return NextResponse.json(
      {
        code: "INTERNAL_ERROR",
        message: "파일 업로드 중 오류가 발생했습니다",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
