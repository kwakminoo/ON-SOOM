import { NextResponse } from 'next/server';

export async function GET() {
  return new NextResponse('google-site-verification: google1c0238c23a9f43aa.html', {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}



