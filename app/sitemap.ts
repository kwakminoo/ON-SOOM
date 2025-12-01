import { MetadataRoute } from 'next';
import { headers } from 'next/headers';
import { notices } from './community/notice/data';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 요청된 호스트를 기반으로 동적으로 도메인 설정
  const headersList = await headers();
  const host = headersList.get('host') || '';
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  
  // Vercel 배포 환경에서는 VERCEL_URL 사용, 없으면 요청 호스트 사용
  const baseUrl = 
    process.env.NEXT_PUBLIC_SITE_URL || 
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ||
    (host ? `${protocol}://${host}` : 'https://www.onsoom.co.kr');
  
  const now = new Date();

  // 날짜 파싱 헬퍼 함수
  const parseDate = (dateStr: string): Date => {
    try {
      if (!dateStr) return now;
      // "2023.08.08" 형식을 "2023-08-08"로 변환
      const normalizedDate = dateStr.replace(/\./g, '-');
      const date = new Date(normalizedDate);
      // 유효한 날짜인지 확인
      if (isNaN(date.getTime())) {
        return now;
      }
      return date;
    } catch {
      return now;
    }
  };

  // 정적 페이지들
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about/story`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about/vision`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about/centers`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/programs`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/programs/apply`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/business/corporate`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/business/education`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/business/seminar`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/community/notice`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/community/faq`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/community/self-test`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/consult`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // 공지사항 상세 페이지들 (동적) - 안전하게 처리
  const noticePages: MetadataRoute.Sitemap = Array.isArray(notices)
    ? notices
        .filter((notice) => notice && notice.id && notice.date)
        .map((notice) => ({
          url: `${baseUrl}/community/notice/${notice.id}`,
          lastModified: parseDate(notice.date),
          changeFrequency: 'weekly' as const,
          priority: 0.6,
        }))
    : [];

  return [...staticPages, ...noticePages];
}

