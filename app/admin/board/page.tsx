"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface PostFile {
  filename: string;
  originalName: string;
  size: number;
  mimetype: string;
  url: string;
}

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
  files?: PostFile[];
}

// 초기 샘플 데이터 (처음 한 번만 사용)
const initialNotices = [
  {
    id: 1,
    category: "공지사항",
    title: "'숨 결 리더십 코칭' 11월 참가자 모집",
    date: "2024.10.20",
    author: "온ː숨",
    views: 1245,
    badge: "모집중",
    badgeColor: "bg-blue-100 text-blue-600",
    isNotice: true,
    content: `개인 리더의 자기이해와 관계 리더십을 다루는 4주 집중 프로그램입니다.

📅 프로그램 일정
- 기간: 2024년 11월 5일 ~ 12월 3일 (매주 월요일)
- 시간: 오후 7시 ~ 9시
- 장소: 온ː숨 강남센터

🎯 프로그램 내용
1주차: 자기이해 - 나는 어떤 리더인가
2주차: 관계 리더십 - 사람을 이끄는 힘
3주차: 소통과 공감 - 진정한 연결의 기술
4주차: 실천 계획 - 나만의 리더십 로드맵

💰 참가비
- 정가: 500,000원
- 얼리버드 할인: 400,000원 (10월 말까지)

📝 신청 방법
상담 신청 페이지에서 '숨결 리더십 코칭'을 선택하여 신청해주세요.
선착순 20명 마감됩니다.

문의: 02-1234-5678`,
  },
  {
    id: 2,
    category: "공지사항",
    title: "온ː숨 홈페이지 리뉴얼 및 예약 시스템 개편 안내",
    date: "2024.10.25",
    author: "온ː숨",
    views: 2134,
    badge: "중요",
    badgeColor: "bg-red-100 text-red-600",
    isNotice: true,
    content: `신규 예약 페이지가 11월 10일부터 적용됩니다.

📌 주요 변경 사항

1. 홈페이지 리뉴얼
- 더욱 직관적이고 깔끔한 디자인으로 개선
- 모바일 최적화로 편리한 이용 가능
- 프로그램 정보 및 후기 확인 용이

2. 예약 시스템 개편
- 실시간 예약 가능 시간 확인
- 카카오톡 알림 연동
- 예약 변경 및 취소 간편화
- 마이페이지에서 예약 이력 확인

3. 추가된 기능
- 온라인 결제 시스템 도입
- 프로그램 후기 작성 기능
- 자가진단 테스트 추가

📅 적용 일정
- 2024년 11월 10일(일) 오전 10시부터 신규 시스템 적용
- 11월 9일(토) 밤 11시~10일(일) 오전 10시까지 시스템 점검으로 일시 중단

⚠️ 유의 사항
- 기존 회원님들은 자동으로 신규 시스템에 마이그레이션됩니다
- 기존 예약 내역은 모두 유지됩니다
- 시스템 점검 시간에는 예약 및 변경이 불가합니다

문의: help@onsoom.kr`,
  },
  {
    id: 3,
    category: "공지사항",
    title: "코칭 예약 취소·변경 규정 개정 안내 (11/1 시행)",
    date: "2024.10.08",
    author: "온ː숨",
    views: 892,
    badge: "중요",
    badgeColor: "bg-red-100 text-red-600",
    isNotice: true,
    content: `공정한 운영을 위해 예약 취소 및 환불 규정이 일부 변경됩니다.

📌 개정 이유
더 많은 분들이 프로그램에 참여할 수 있도록, 그리고 무분별한 예약 취소를
방지하여 공정한 운영을 위해 규정을 일부 개정합니다.

📋 주요 변경 내용

[기존 규정]
- 7일 전: 100% 환불
- 3일 전: 50% 환불
- 당일 취소: 환불 불가

[신규 규정] (2024년 11월 1일부터 적용)
- 14일 전: 100% 환불
- 7일 전: 70% 환불 (수수료 30%)
- 3일 전: 50% 환불 (수수료 50%)
- 2일 전~당일: 환불 불가

⚠️ 추가 변경 사항

1. 예약 변경
- 1회에 한해 무료 일정 변경 가능
- 2회부터 변경 수수료 1만원 발생

2. No-show (무단 불참)
- 1회: 경고
- 2회: 향후 6개월간 예약 제한
- 3회: 영구 예약 제한

3. 예외 사항
- 본인 또는 직계가족 입원 (진단서 제출 시 100% 환불)
- 천재지변 등 불가항력적 사유

📅 적용 일자
2024년 11월 1일 예약 건부터 적용
(10월 31일까지 예약 건은 기존 규정 적용)

💡 예약 팁
- 일정을 확실히 확인하고 예약해주세요
- 부득이한 변경은 최대한 빨리 연락주세요
- 마이페이지에서 예약 내역 확인 가능합니다

문의: booking@onsoom.kr
전화: 02-1234-5678`,
  },
  {
    id: 4,
    category: "일반",
    title: "겨울 정기 성장 워크숍 '나를 다시 배우는 시간' 개최",
    date: "2024.10.18",
    author: "온ː숨",
    views: 987,
    badge: "신청 가능",
    badgeColor: "bg-green-100 text-green-600",
    isNotice: false,
    content: `12월 7~8일 양일간 오프라인으로 진행됩니다. 참가 신청은 선착순 마감입니다.

🌟 워크숍 개요
겨울을 맞아 자신을 돌아보고 새로운 한 해를 준비하는 성장 워크숍입니다.
자기이해, 관계 회복, 내년 목표 설계를 함께 다룹니다.

📅 일정
- 날짜: 2024년 12월 7일(토) ~ 8일(일)
- 시간: 1일차 10:00~18:00, 2일차 09:00~17:00
- 장소: 경기도 가평 힐링센터 (숙박 포함)

👥 대상
- 자기성장에 관심 있는 성인 누구나
- 정원: 30명 (선착순 마감)

💰 참가비
- 1인: 350,000원 (숙박, 식사 3회 포함)
- 2인 이상 동반 신청: 1인당 320,000원

🎁 제공 사항
- 워크북 및 필기구
- 숙박 및 식사 (조식 1회, 중식 2회, 석식 1회)
- 수료증

📝 신청 기한
11월 30일까지 (조기 마감 시 공지)

문의: workshop@onsoom.kr`,
  },
  {
    id: 5,
    category: "일반",
    title: "청년 성장 서포터즈 2기 모집",
    date: "2024.10.15",
    author: "온ː숨",
    views: 756,
    badge: "모집중",
    badgeColor: "bg-purple-100 text-purple-600",
    isNotice: false,
    content: `청년의 자기성장 문화를 함께 만드는 콘텐츠 기획·운영 인턴십 프로그램.

🎯 활동 내용
- SNS 콘텐츠 기획 및 제작
- 청년 프로그램 기획 참여
- 성장 워크숍 운영 지원
- 블로그 및 뉴스레터 작성

👥 모집 대상
- 만 19세~34세 청년
- 자기성장과 심리학에 관심이 있는 분
- 콘텐츠 제작 및 기획 경험자 우대
- 월 2회 이상 온라인 미팅 참여 가능자

📅 활동 기간
- 2024년 11월 ~ 2025년 1월 (3개월)
- 주 1회 오프라인 미팅 (강남센터)
- 온라인 협업

🎁 혜택
- 활동비 지급 (월 30만원)
- 온ː숨 프로그램 50% 할인 쿠폰 제공
- 수료증 발급
- 우수 활동자 정규직 전환 기회

📝 지원 방법
이메일: recruit@onsoom.kr
제출 서류: 이력서, 자기소개서, 포트폴리오(선택)
마감: 2024년 10월 31일

문의: 02-1234-5678`,
  },
  {
    id: 6,
    category: "일반",
    title: "○○대학교와 '캠퍼스 마인드 성장 프로젝트' MOU 체결",
    date: "2024.10.12",
    author: "온ː숨",
    views: 634,
    badge: "소식",
    badgeColor: "bg-yellow-100 text-yellow-600",
    isNotice: false,
    content: `대학생 대상 진로·자존감 코칭 커리큘럼 공동 운영 예정.

🤝 협약 개요
온ː숨과 ○○대학교 학생상담센터가 대학생의 정신 건강과 성장을 위한
'캠퍼스 마인드 성장 프로젝트' 업무협약(MOU)을 체결했습니다.

📋 주요 협력 내용

1. 대학생 맞춤형 코칭 프로그램 개발
- 진로 탐색 워크숍
- 자존감 회복 프로그램
- 대인관계 성장 코칭

2. 전문가 교육 및 양성
- 대학 상담사 대상 코칭 기법 교육
- 또래 상담자 양성 프로그램 공동 운영

3. 무료 상담 지원
- 학기 중 월 2회 온ː숨 전문가 방문 상담
- 온라인 집단 코칭 프로그램 제공

4. 연구 및 학술 교류
- 대학생 정신건강 관련 공동 연구
- 학술 세미나 및 컨퍼런스 개최

📅 시작 시기
2024년 11월부터 본격 운영

💬 온ː숨 센터장 코멘트
"대학생 시기는 정체성을 형성하고 진로를 고민하는 중요한 시기입니다.
이번 협약을 통해 더 많은 청년들이 자신을 이해하고 성장할 수 있는
기회를 제공하게 되어 기쁩니다."

문의: partnership@onsoom.kr`,
  },
  {
    id: 7,
    category: "일반",
    title: "'숨을 나누다' 참여 후기 남기고 굿즈 받기",
    date: "2024.10.10",
    author: "온ː숨",
    views: 1523,
    badge: "진행중",
    badgeColor: "bg-pink-100 text-pink-600",
    isNotice: false,
    content: `11월 한 달간 진행되는 후기 공유 캠페인입니다.

🎁 이벤트 안내
온ː숨 프로그램에 참여하신 경험을 나눠주시면
감사의 마음을 담아 특별한 굿즈를 드립니다!

📝 참여 방법
1. 온ː숨 홈페이지 또는 인스타그램에서 후기 작성
2. 해시태그 #온숨 #숨을나누다 포함
3. 인스타그램 후기는 @onsoom_official 태그 필수

🎁 혜택
✨ 전원: 온ː숨 감사 엽서 + 스티커
⭐ 우수 후기 10명: 온ː숨 텀블러 + 노트
🌟 최우수 후기 3명: 다음 프로그램 50% 할인권

📅 이벤트 기간
2024년 11월 1일 ~ 11월 30일

🏆 당첨자 발표
2024년 12월 5일 (개별 연락 및 홈페이지 공지)

💡 후기 작성 팁
- 프로그램 참여 전후 변화
- 가장 인상 깊었던 순간
- 다른 분들께 추천하고 싶은 이유
- 솔직한 경험담

여러분의 소중한 이야기를 기다립니다! 😊

문의: event@onsoom.kr`,
  },
  {
    id: 8,
    category: "일반",
    title: "취약계층 청년 대상 무료 성장코칭 진행 (온ː숨 나눔주간)",
    date: "2024.10.05",
    author: "온ː숨",
    views: 1067,
    badge: "진행 예정",
    badgeColor: "bg-green-100 text-green-600",
    isNotice: false,
    content: `12월 1주간 진행되며, 후원자 모집도 함께 진행합니다.

💚 온ː숨 나눔주간
경제적 어려움으로 성장 프로그램 참여가 어려운 청년들에게
전문 코칭을 무료로 제공하는 사회공헌 활동입니다.

📅 진행 일정
- 기간: 2024년 12월 2일(월) ~ 12월 6일(금)
- 방식: 1:1 개인 코칭 (회당 90분)
- 장소: 온ː숨 전 센터 (강남, 홍대, 구로)

👥 지원 대상
- 만 19세~34세 청년
- 다음 중 하나에 해당하는 분
  ∙ 기초생활수급자
  ∙ 차상위계층
  ∙ 청년 보증금 지원 대상자
  ∙ 청년 실업자
  ∙ 저소득 한부모 가정
- 총 50명 선발

🎯 코칭 내용
- 자기이해 및 자존감 회복
- 진로 탐색 및 목표 설정
- 관계 고민 상담
- 스트레스 관리

📝 신청 방법
1. 이메일 지원: welfare@onsoom.kr
2. 제출 서류:
   - 신청서 (홈페이지 다운로드)
   - 증빙 서류 (수급자 증명서 등)
   - 간단한 지원 동기
3. 마감: 2024년 11월 20일
4. 결과 발표: 2024년 11월 25일

💝 후원 참여
- 후원금: 1구좌 50,000원 (청년 1명 코칭 지원)
- 후원 계좌: 온ː숨 국민은행 123-456-789012
- 후원자 혜택: 감사패 및 기부금 영수증 발급

🌱 지난 활동
- 2024년 상반기: 청년 30명 지원
- 참여자 만족도: 4.8/5.0
- "처음으로 나를 돌아볼 수 있는 시간이었습니다" - 참여자 후기

여러분의 따뜻한 관심과 참여 부탁드립니다.

문의: welfare@onsoom.kr
전화: 02-1234-5678`,
  },
  {
    id: 9,
    category: "일반",
    title: "'성장하는 조직, 회복하는 리더' 공개 세미나 신청 오픈",
    date: "2024.10.02",
    author: "온ː숨",
    views: 745,
    badge: "신청 가능",
    badgeColor: "bg-blue-100 text-blue-600",
    isNotice: false,
    content: `기업 담당자 대상 1일 오픈 세미나, 11월 28일 진행.

🎤 세미나 개요
급변하는 시대, 조직의 지속가능한 성장을 위해서는
리더의 내면적 회복과 성장이 필수적입니다.
온ː숨의 전문 코치진이 전하는 인사이트를 경험해보세요.

📅 일정
- 날짜: 2024년 11월 28일(목)
- 시간: 오후 2시 ~ 6시 (4시간)
- 장소: 서울 강남구 코엑스 컨퍼런스룸

👥 대상
- 기업 HR 담당자
- 팀장급 이상 관리자
- 조직문화 담당자
- 리더십에 관심 있는 모든 분

🎯 세부 프로그램

14:00~14:50 [키노트]
"리더의 회복, 조직의 성장"
- 온ː숨 대표 코치

15:00~15:50 [세션 1]
"사람 중심 리더십의 힘"
- 조직 심리 전문가

16:00~16:15 휴식 & 네트워킹

16:15~17:05 [세션 2]
"정서적 안전감을 만드는 리더"
- 기업 코칭 전문가

17:05~18:00 [패널 토크]
"우리 조직의 성장 전략"
- 기업 사례 공유 및 Q&A

💰 참가비
- 얼리버드: 50,000원 (11월 10일까지)
- 정상가: 70,000원
- 3인 이상 단체 신청: 1인당 40,000원

🎁 참가자 혜택
- 세미나 자료집
- 온ː숨 기업 프로그램 무료 컨설팅 1회
- 네트워킹 다과
- 주차 2시간 무료

📝 신청 방법
홈페이지 상담 신청 페이지에서
'공개 세미나' 선택 후 신청

정원: 100명 (선착순 마감)

문의: seminar@onsoom.kr
전화: 02-1234-5678`,
  },
  {
    id: 10,
    category: "일반",
    title: "온ː숨 카카오톡 채널 개설 안내",
    date: "2024.10.01",
    author: "온ː숨",
    views: 1876,
    badge: "신규",
    badgeColor: "bg-yellow-100 text-yellow-600",
    isNotice: false,
    content: `프로그램 소식과 상담 예약을 채널에서 간편하게 받아보세요.

💬 카카오톡 채널 오픈!
온ː숨과 더 가까이, 더 편리하게 소통할 수 있는
공식 카카오톡 채널이 개설되었습니다.

🎯 채널 주요 기능

1. 신규 프로그램 알림
- 새로운 프로그램 오픈 소식
- 이벤트 및 할인 정보
- 워크숍 및 강연 일정

2. 1:1 상담 문의
- 프로그램 관련 문의
- 예약 관련 질문
- 간편 상담 신청

3. 예약 알림
- 예약 확정 알림
- 일정 전 리마인더
- 예약 변경 안내

4. 맞춤 정보 제공
- 관심 분야별 콘텐츠
- 자기성장 팁
- 온ː숨 칼럼

📱 채널 추가 방법

방법 1: 카카오톡 검색
카카오톡 앱 → 검색 → "온숨" 또는 "onsoom" 검색

방법 2: QR 코드 스캔
홈페이지 하단 QR 코드 스캔

방법 3: 링크 접속
https://pf.kakao.com/onsoom (예시)

🎁 채널 추가 이벤트
11월 한 달간 채널 추가하신 분들께
추첨을 통해 선물을 드립니다!

- 1등 (3명): 온ː숨 프로그램 1회 무료 이용권
- 2등 (10명): 스타벅스 기프티콘
- 3등 (30명): 온ː숨 굿즈 세트

📅 이벤트 기간
2024년 11월 1일 ~ 11월 30일

🏆 당첨자 발표
2024년 12월 3일 (채널 메시지로 개별 안내)

💡 개인정보 보호
- 채널 추가만으로는 개인정보가 수집되지 않습니다
- 1:1 상담 시에만 필요한 정보를 요청합니다
- 마케팅 수신은 언제든 거부 가능합니다

지금 바로 온ː숨 카카오톡 채널을 추가하고
다양한 혜택을 받아보세요! 🎉

문의: channel@onsoom.kr
전화: 02-1234-5678`,
  },
];

export default function NoticePage() {
  const pathname = usePathname();
  const [selectedNotice, setSelectedNotice] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [notices, setNotices] = useState<Post[]>([]);
  const [isWriting, setIsWriting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<{ role: string } | null>(null);

  // 글 작성 폼 상태
  const [formData, setFormData] = useState({
    category: "일반" as "공지사항" | "일반",
    title: "",
    content: "",
    badge: "신규",
    badgeColor: "bg-blue-100 text-blue-600",
    isNotice: false,
    files: [] as PostFile[],
  });

  // 파일 업로드 상태
  const [uploadingFiles, setUploadingFiles] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  // 로그인 사용자 확인
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // 게시글 목록 불러오기
  useEffect(() => {
    fetchPosts();
  }, []);

  // 경로 변경 시 상태 초기화 (상단 메뉴에서 게시판 클릭 시)
  useEffect(() => {
    // 경로가 /admin/board로 변경되면 상태 초기화
    if (pathname === "/admin/board") {
      setSelectedNotice(null);
      setIsWriting(false);
      setSearchTerm("");
    }
  }, [pathname]);

  // 커스텀 이벤트 리스너 (Header에서 게시판 링크 클릭 시)
  useEffect(() => {
    const handleBoardNavigation = () => {
      setSelectedNotice(null);
      setIsWriting(false);
      setSearchTerm("");
    };

    window.addEventListener("boardNavigation", handleBoardNavigation);

    return () => {
      window.removeEventListener("boardNavigation", handleBoardNavigation);
    };
  }, []);
  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/admin/posts");
      const data = await response.json();

      if (response.ok) {
        setNotices(data.data || []);
      }
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }
  };

  // 파일 업로드 처리
  const handleFileUpload = async (files: File[]) => {
    if (files.length === 0) return [];

    setUploadingFiles(true);
    try {
      const formDataObj = new FormData();
      files.forEach((file) => {
        formDataObj.append("files", file);
      });

      const response = await fetch("/api/admin/posts/upload", {
        method: "POST",
        body: formDataObj,
      });

      const data = await response.json();

      if (response.ok && data.data) {
        return data.data;
      } else {
        alert(data.message || "파일 업로드에 실패했습니다");
        return [];
      }
    } catch (error) {
      console.error("File upload error:", error);
      alert("파일 업로드 중 오류가 발생했습니다");
      return [];
    } finally {
      setUploadingFiles(false);
    }
  };

  // 파일 선택 핸들러
  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    setSelectedFiles((prev) => [...prev, ...files]);
    
    // 즉시 업로드
    const uploadedFiles = await handleFileUpload(files);
    if (uploadedFiles.length > 0) {
      setFormData((prev) => ({
        ...prev,
        files: [...(prev.files || []), ...uploadedFiles],
      }));
    }
  };

  // 파일 삭제 핸들러
  const handleFileRemove = (index: number) => {
    setFormData((prev) => {
      const newFiles = [...(prev.files || [])];
      newFiles.splice(index, 1);
      return { ...prev, files: newFiles };
    });
    setSelectedFiles((prev) => {
      const newFiles = [...prev];
      newFiles.splice(index, 1);
      return newFiles;
    });
  };

  // 파일 크기 포맷팅
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i];
  };
  // 글 작성 제출
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/admin/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("게시글이 작성되었습니다");
        setIsWriting(false);
        // 폼 초기화
        setFormData({
          category: "일반",
          title: "",
          content: "",
          badge: "신규",
          badgeColor: "bg-blue-100 text-blue-600",
          isNotice: false,
          files: [],
        });
        setSelectedFiles([]);
        // 목록 새로고침
        fetchPosts();
      } else {
        alert(data.message || "게시글 작성에 실패했습니다");
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("네트워크 오류가 발생했습니다");
    } finally {
      setIsLoading(false);
    }
  };

  // 다운로드
  const handleDownload = async (format: "json" | "csv") => {
    try {
      const response = await fetch(`/api/admin/posts/download?format=${format}`);

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `posts_${new Date().toISOString().split("T")[0]}.${format}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      } else {
        alert("다운로드에 실패했습니다");
      }
    } catch (error) {
      console.error("Download error:", error);
      alert("다운로드 중 오류가 발생했습니다");
    }
  };

  // 공지사항과 일반 게시글 분리
  const noticePosts = notices.filter((notice) => notice.isNotice);
  const generalPosts = notices.filter((notice) => !notice.isNotice);

  // 검색 필터링
  const filteredGeneralPosts = generalPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleNoticeClick = (id: number) => {
    setSelectedNotice(id);
  };

  const handleBackToList = () => {
    setSelectedNotice(null);
  };

  // 개별 게시글 다운로드
  const handleDownloadPost = async (postId: number) => {
    try {
      const response = await fetch(`/api/admin/posts/${postId}/download`);

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        
        // Content-Disposition 헤더에서 파일명 추출
        const contentDisposition = response.headers.get("Content-Disposition");
        let filename = `post_${postId}.txt`;
        if (contentDisposition) {
          const filenameMatch = contentDisposition.match(/filename\*?=['"]?(?:UTF-\d['"]*)?([^;\r\n"']*)['"]?;?/);
          if (filenameMatch && filenameMatch[1]) {
            filename = decodeURIComponent(filenameMatch[1]);
          }
        }
        
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      } else {
        alert("다운로드에 실패했습니다");
      }
    } catch (error) {
      console.error("Download post error:", error);
      alert("다운로드 중 오류가 발생했습니다");
    }
  };

  const selectedNoticeData = notices.find(
    (notice) => notice.id === selectedNotice
  );

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 text-center">
            관리자 게시판
          </h1>
          <p className="text-center text-gray-600">
            ON ː SOOM의 소식을 확인하세요
          </p>
        </div>

        {/* 게시글 목록 */}
        {!selectedNotice && !isWriting && (
          <>
            {/* 상단 버튼 */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="제목 또는 내용으로 검색..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      // 검색은 실시간으로 이미 작동하므로 엔터키만 처리
                    }
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-toss-500 focus:border-transparent"
                />
              </div>
              <button
                onClick={() => {
                  // 검색은 실시간으로 작동하므로 버튼은 시각적 역할
                }}
                className="px-6 py-2 bg-toss-500 text-white rounded-lg hover:bg-toss-600 transition-colors font-medium"
              >
                검색
              </button>
              {user?.role === "admin" && (
                <button
                  onClick={() => setIsWriting(true)}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  글쓰기
                </button>
              )}
            </div>

            {/* 게시글 목록 테이블 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              {/* 테이블 헤더 */}
              <div className="bg-gray-50 border-b border-gray-200">
                <div className="grid grid-cols-12 gap-4 px-6 py-3 text-sm font-medium text-gray-700">
                  <div className="col-span-1 text-center">번호</div>
                  <div className="col-span-8">제목</div>
                  <div className="col-span-2 text-center">작성자</div>
                  <div className="col-span-1 text-center">작성일</div>
                </div>
              </div>

              {/* 게시글 목록 */}
              <div className="divide-y divide-gray-200">
                {/* 공지사항 - 항상 상단 고정 */}
                {noticePosts.map((notice) => (
                  <div
                    key={notice.id}
                    onClick={() => handleNoticeClick(notice.id)}
                    className="grid grid-cols-12 gap-4 px-6 py-4 bg-orange-50 hover:bg-orange-100 cursor-pointer transition-colors border-l-4 border-orange-400"
                  >
                    <div className="col-span-1 text-center text-sm text-gray-600">
                      <span className="inline-block px-2 py-1 bg-orange-500 text-white text-xs font-bold rounded">
                        공지
                      </span>
                    </div>
                    <div className="col-span-8">
                      <span className="text-sm font-medium text-gray-900 hover:text-orange-600 transition-colors">
                        {notice.title}
                      </span>
                    </div>
                    <div className="col-span-2 text-center text-sm text-gray-600">
                      {notice.author}
                    </div>
                    <div className="col-span-1 text-center text-sm text-gray-600">
                      {notice.date}
                    </div>
                  </div>
                ))}

                {/* 일반 게시글 */}
                {filteredGeneralPosts.length === 0 ? (
                  <div className="px-6 py-12 text-center text-gray-500">
                    {searchTerm
                      ? "검색 결과가 없습니다."
                      : "게시글이 없습니다."}
                  </div>
                ) : (
                  filteredGeneralPosts.map((post, index) => (
                    <div
                      key={post.id}
                      onClick={() => handleNoticeClick(post.id)}
                      className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <div className="col-span-1 text-center text-sm text-gray-600">
                        {index + 1}
                      </div>
                      <div className="col-span-8">
                        <span className="text-sm font-medium text-gray-900 hover:text-toss-600 transition-colors">
                          {post.title}
                        </span>
                      </div>
                      <div className="col-span-2 text-center text-sm text-gray-600">
                        {post.author}
                      </div>
                      <div className="col-span-1 text-center text-sm text-gray-600">
                        {post.date}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* 페이지네이션 (간단한 형태) */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center gap-2">
                <button className="px-3 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50">
                  이전
                </button>
                <button className="px-3 py-2 text-sm bg-toss-500 text-white rounded">
                  1
                </button>
                <button className="px-3 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50">
                  2
                </button>
                <button className="px-3 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50">
                  3
                </button>
                <button className="px-3 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50">
                  다음
                </button>
              </div>
            </div>
          </>
        )}

        {/* 게시글 상세 보기 */}
        {selectedNotice && selectedNoticeData && (
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            {/* 게시글 헤더 */}
            <div className="border-b border-gray-200 px-6 md:px-10 py-8 bg-gray-50">
              {/* 제목 */}
              <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-4">
                {selectedNoticeData.title}
              </h2>

              {/* 메타 정보 */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  {selectedNoticeData.author}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {selectedNoticeData.date}
                </span>
              </div>
            </div>

            {/* 게시글 내용 */}
            <div className="px-6 md:px-10 py-12 min-h-[400px]">
              <div className="prose prose-lg max-w-none">
                <pre className="whitespace-pre-wrap font-sans text-gray-700 leading-relaxed">
                  {selectedNoticeData.content}
                </pre>
              </div>

              {/* 첨부 파일 */}
              {selectedNoticeData.files && selectedNoticeData.files.length > 0 && (
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    첨부 파일 ({selectedNoticeData.files.length})
                  </h3>
                  <div className="space-y-2">
                    {selectedNoticeData.files.map((file, index) => (
                      <button
                        key={index}
                        onClick={async () => {
                          try {
                            const response = await fetch(file.url);
                            const blob = await response.blob();
                            const url = window.URL.createObjectURL(blob);
                            const a = document.createElement("a");
                            a.href = url;
                            a.download = file.originalName;
                            document.body.appendChild(a);
                            a.click();
                            document.body.removeChild(a);
                            window.URL.revokeObjectURL(url);
                          } catch (error) {
                            console.error("File download error:", error);
                            alert("파일 다운로드 중 오류가 발생했습니다");
                          }
                        }}
                        className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors group cursor-pointer"
                      >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <svg
                            className="w-6 h-6 text-gray-400 flex-shrink-0 group-hover:text-blue-500 transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate group-hover:text-blue-600 transition-colors">
                              {file.originalName}
                            </p>
                            <p className="text-xs text-gray-500">
                              {formatFileSize(file.size)} • {file.mimetype}
                            </p>
                          </div>
                        </div>
                        <svg
                          className="w-5 h-5 text-gray-400 flex-shrink-0 group-hover:text-blue-500 transition-colors"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                      </button>
                    ))}
                  </div>
                  </div>
                )}
            </div>

            {/* 하단 버튼 */}
            <div className="border-t border-gray-200 px-6 md:px-10 py-6 bg-gray-50 flex flex-wrap gap-3">
              <button
                onClick={handleBackToList}
                className="px-8 py-3 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors rounded-lg"
              >
                목록으로 돌아가기
              </button>
              <button
                onClick={() => handleDownloadPost(selectedNoticeData.id)}
                className="px-8 py-3 bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition-colors rounded-lg flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                이 글 다운로드
              </button>
            </div>
          </div>
        )}

        {/* 글 작성 폼 */}
        {isWriting && (
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="border-b border-gray-200 px-6 md:px-10 py-6 bg-gray-50">
              <h2 className="text-2xl font-medium text-gray-900">게시글 작성</h2>
            </div>

            <form onSubmit={handleSubmit} className="px-6 md:px-10 py-8">
              <div className="space-y-6">
                {/* 제목 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    제목
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-toss-500 focus:border-transparent"
                    placeholder="제목을 입력하세요"
                    required
                  />
                </div>

                {/* 파일 업로드 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    파일 첨부 (PDF, 한글, 이미지 등 모든 형식 지원)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                    <input
                      type="file"
                      multiple
                      onChange={handleFileSelect}
                      disabled={uploadingFiles}
                      className="hidden"
                      id="file-upload"
                      accept="*/*"
                    />
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer flex flex-col items-center justify-center"
                    >
                      <svg
                        className="w-12 h-12 text-gray-400 mb-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <span className="text-sm text-gray-600">
                        {uploadingFiles
                          ? "업로드 중..."
                          : "클릭하여 파일을 선택하거나 드래그하여 업로드하세요"}
                      </span>
                      <span className="text-xs text-gray-500 mt-1">
                        파일 크기 제한 없음
                      </span>
                    </label>
                  </div>

                  {/* 업로드된 파일 목록 */}
                  {formData.files && formData.files.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {formData.files.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
                        >
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <svg
                              className="w-5 h-5 text-gray-400 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">
                                {file.originalName}
                              </p>
                              <p className="text-xs text-gray-500">
                                {formatFileSize(file.size)} • {file.mimetype}
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleFileRemove(index)}
                            className="ml-2 text-red-500 hover:text-red-700 flex-shrink-0"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* 내용 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    내용
                  </label>
                  <textarea
                    value={formData.content}
                    onChange={(e) =>
                      setFormData({ ...formData, content: e.target.value })
                    }
                    rows={15}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-toss-500 focus:border-transparent resize-y"
                    placeholder="내용을 입력하세요"
                    required
                  />
                </div>

                {/* 버튼 */}
                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 px-6 py-3 bg-toss-500 text-white rounded-lg hover:bg-toss-600 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "작성 중..." : "작성 완료"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsWriting(false)}
                    className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                  >
                    취소
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
