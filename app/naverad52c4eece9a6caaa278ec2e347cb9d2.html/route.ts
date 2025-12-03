import { NextResponse } from 'next/server';

export async function GET() {
  return new NextResponse('naver-site-verification: naverad52c4eece9a6caaa278ec2e347cb9d2.html', {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}

