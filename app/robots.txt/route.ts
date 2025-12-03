import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const host = request.headers.get('host') || '';
  
  // Vercel 도메인 차단 (vercel.app 또는 vercel.com으로 끝나는 도메인)
  const isVercelDomain = host.includes('.vercel.app') || host.includes('.vercel.com');
  
  if (isVercelDomain) {
    // Vercel 도메인은 모든 크롤러 차단
    return new NextResponse(
      `User-agent: *
Disallow: /`,
      {
        headers: {
          'Content-Type': 'text/plain',
        },
      }
    );
  }
  
  // 구매한 도메인은 정상적으로 허용
  return new NextResponse(
    `User-agent: *
Allow: /

Sitemap: https://onsoom.co.kr/sitemap.xml`,
    {
      headers: {
        'Content-Type': 'text/plain',
      },
    }
  );
}

