"use client";

import { useState } from "react";

const notices = [
  {
    id: 1,
    title: "2025년 상반기 프로그램 안내",
    date: "2025.01.15",
    author: "관리자",
    views: 342,
    content: "2025년 상반기 프로그램 일정을 안내드립니다. 많은 관심 부탁드립니다."
  },
  {
    id: 2,
    title: "설 연휴 휴무 안내",
    date: "2025.01.10",
    author: "관리자",
    views: 567,
    content: "설 연휴 기간 동안 센터 휴무 일정을 안내드립니다."
  },
  {
    id: 3,
    title: "신규 프로그램 'Youth Vision Coaching' 오픈",
    date: "2025.01.05",
    author: "관리자",
    views: 892,
    content: "청년층을 위한 새로운 장기 성장 프로그램이 오픈되었습니다."
  },
  {
    id: 4,
    title: "12월 고객 만족도 조사 결과 발표",
    date: "2024.12.28",
    author: "관리자",
    views: 445,
    content: "지난 12월 진행된 고객 만족도 조사 결과를 공유드립니다."
  },
  {
    id: 5,
    title: "구로점 확장 이전 안내",
    date: "2024.12.20",
    author: "관리자",
    views: 723,
    content: "구로점이 더 넓은 공간으로 확장 이전하게 되었습니다."
  },
  {
    id: 6,
    title: "연말 특별 할인 이벤트",
    date: "2024.12.15",
    author: "관리자",
    views: 1234,
    content: "연말을 맞아 전 프로그램 특별 할인 이벤트를 진행합니다."
  },
  {
    id: 7,
    title: "개인정보 처리방침 변경 안내",
    date: "2024.12.10",
    author: "관리자",
    views: 321,
    content: "개인정보 처리방침이 일부 변경되었음을 안내드립니다."
  },
  {
    id: 8,
    title: "11월 우수 후기 선정 안내",
    date: "2024.12.05",
    author: "관리자",
    views: 556,
    content: "11월 우수 후기 선정 결과를 발표합니다."
  },
  {
    id: 9,
    title: "홍대 2호점 신규 오픈",
    date: "2024.11.28",
    author: "관리자",
    views: 987,
    content: "홍대 2호점이 새롭게 오픈하였습니다. 많은 이용 부탁드립니다."
  },
  {
    id: 10,
    title: "온라인 상담 시스템 업데이트",
    date: "2024.11.20",
    author: "관리자",
    views: 654,
    content: "온라인 상담 시스템이 개선되어 더욱 편리하게 이용하실 수 있습니다."
  }
];

export default function NoticePage() {
  const [selectedNotice, setSelectedNotice] = useState<number | null>(null);
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [pendingNoticeId, setPendingNoticeId] = useState<number | null>(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleNoticeClick = (id: number) => {
    setPendingNoticeId(id);
    setShowPasswordPrompt(true);
    setPassword("");
    setError("");
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === "1234") {
      setSelectedNotice(pendingNoticeId);
      setShowPasswordPrompt(false);
      setPassword("");
      setError("");
    } else {
      setError("비밀번호를 확인해주세요.");
    }
  };

  const handleClosePasswordPrompt = () => {
    setShowPasswordPrompt(false);
    setPendingNoticeId(null);
    setPassword("");
    setError("");
  };

  const handleBackToList = () => {
    setSelectedNotice(null);
  };

  const selectedNoticeData = notices.find(notice => notice.id === selectedNotice);

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 text-center">
            공지사항
          </h1>
          <p className="text-center text-gray-600">
            ON ː SOOM의 새로운 소식을 확인하세요
          </p>
        </div>

        {/* 게시글 목록 */}
        {!selectedNotice && (
          <div className="bg-white border border-gray-200">
            {/* 테이블 헤더 */}
            <div className="hidden md:grid grid-cols-12 gap-4 bg-gray-50 px-6 py-4 border-b border-gray-200 font-medium text-sm text-gray-700">
              <div className="col-span-1 text-center">번호</div>
              <div className="col-span-6">제목</div>
              <div className="col-span-2 text-center">작성자</div>
              <div className="col-span-2 text-center">작성일</div>
              <div className="col-span-1 text-center">조회</div>
            </div>

            {/* 게시글 목록 */}
            {notices.map((notice) => (
              <div
                key={notice.id}
                onClick={() => handleNoticeClick(notice.id)}
                className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 px-6 py-5 border-b border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <div className="md:col-span-1 text-sm text-gray-500 md:text-center">
                  <span className="md:hidden font-medium">번호: </span>
                  {notice.id}
                </div>
                <div className="md:col-span-6 text-base font-medium text-gray-900 flex items-center gap-2">
                  {notice.title}
                  <span className="text-xs text-gray-500">🔒</span>
                </div>
                <div className="md:col-span-2 text-sm text-gray-600 md:text-center">
                  <span className="md:hidden font-medium">작성자: </span>
                  {notice.author}
                </div>
                <div className="md:col-span-2 text-sm text-gray-600 md:text-center">
                  <span className="md:hidden font-medium">작성일: </span>
                  {notice.date}
                </div>
                <div className="md:col-span-1 text-sm text-gray-500 md:text-center">
                  <span className="md:hidden font-medium">조회: </span>
                  {notice.views}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 게시글 상세 보기 */}
        {selectedNotice && selectedNoticeData && (
          <div className="bg-white border border-gray-200">
            {/* 게시글 헤더 */}
            <div className="border-b border-gray-200 px-6 py-6">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">
                {selectedNoticeData.title}
              </h2>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <span>작성자: {selectedNoticeData.author}</span>
                <span>•</span>
                <span>작성일: {selectedNoticeData.date}</span>
                <span>•</span>
                <span>조회수: {selectedNoticeData.views}</span>
              </div>
            </div>

            {/* 게시글 내용 */}
            <div className="px-6 py-12 min-h-[400px]">
              <p className="text-gray-700 leading-relaxed">
                {selectedNoticeData.content}
              </p>
            </div>

            {/* 목록으로 버튼 */}
            <div className="border-t border-gray-200 px-6 py-4">
              <button
                onClick={handleBackToList}
                className="px-6 py-2 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                목록으로
              </button>
            </div>
          </div>
        )}

        {/* 비밀번호 입력 모달 */}
        {showPasswordPrompt && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
            <div className="bg-white max-w-md w-full p-8 shadow-lg relative">
              <button
                onClick={handleClosePasswordPrompt}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="text-center mb-6">
                <div className="text-5xl mb-4">🔒</div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  비밀번호 입력
                </h3>
                <p className="text-sm text-gray-600">
                  게시글을 확인하려면 비밀번호를 입력해주세요
                </p>
              </div>

              <form onSubmit={handlePasswordSubmit} className="space-y-4">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    비밀번호
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError("");
                    }}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 focus:outline-none text-sm"
                    placeholder="비밀번호를 입력하세요"
                    autoFocus
                    required
                  />
                  {error && (
                    <p className="mt-2 text-sm text-red-600">
                      {error}
                    </p>
                  )}
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={handleClosePasswordPrompt}
                    className="flex-1 px-4 py-3 bg-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-300 transition-colors"
                  >
                    취소
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-3 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    확인
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
