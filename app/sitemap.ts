import { MetadataRoute } from 'next';
import { notices } from './community/notice/data';

export default function sitemap(): MetadataRoute.Sitemap {
  // 프로덕션 도메인을 우선 사용, 환경 변수가 있으면 그것 사용
  // onsoom.co.kr 또는 www.onsoom.co.kr 중 하나 선택
  const baseUrl = 
    process.env.NEXT_PUBLIC_SITE_URL || 
    'https://onsoom.co.kr';
  
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

