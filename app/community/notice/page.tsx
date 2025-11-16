"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { notices } from "./data";

export default function NoticePage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  // 날짜 최신순으로 정렬
  const sortedNotices = [...notices].sort((a, b) => {
    const dateA = new Date(a.date.replace(/\./g, "-"));
    const dateB = new Date(b.date.replace(/\./g, "-"));
    return dateB.getTime() - dateA.getTime();
  });

  // 공지사항과 일반 게시글 분리
  const noticePosts = sortedNotices.filter((notice) => notice.isNotice);
  const generalPosts = sortedNotices.filter((notice) => !notice.isNotice);

  // 검색 필터링
  const filteredGeneralPosts = generalPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 페이지네이션 계산
  const totalItems = noticePosts.length + filteredGeneralPosts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  let displayPosts;
  if (currentPage === 1) {
    const remainingSlots = itemsPerPage - noticePosts.length;
    displayPosts = {
      notices: noticePosts,
      general: filteredGeneralPosts.slice(0, remainingSlots),
    };
  } else {
    const generalStartIndex =
      (currentPage - 1) * itemsPerPage - noticePosts.length;
    const generalEndIndex = generalStartIndex + itemsPerPage;
    displayPosts = {
      notices: [],
      general: filteredGeneralPosts.slice(generalStartIndex, generalEndIndex),
    };
  }

  const handleNoticeClick = (id: number) => {
    router.push(`/community/notice/${id}`); // 상세 페이지로 이동
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white pb-12 sm:pb-20 pt-16 sm:pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mt-12 sm:mt-16 md:mt-20 mb-8 sm:mb-10 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6">
            공지사항
          </h1>
          <p className="text-center text-base sm:text-lg font-medium text-gray-700">
            ON ː SOOM의 소식을 확인하세요
          </p>
        </div>

        {/* 검색 버튼 */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1">
            <input
              type="text"
              placeholder="제목 또는 내용으로 검색..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-toss-500 focus:border-transparent"
            />
          </div>
          <button className="px-6 py-2 bg-toss-500 text-white rounded-lg hover:bg-toss-600 transition-colors font-medium">
            검색
          </button>
        </div>

        {/* 게시글 목록 - 데스크톱 테이블 뷰 */}
        <div className="hidden md:block bg-white border border-gray-200 rounded-lg overflow-hidden">
          {/* 테이블 헤더 */}
          <div className="bg-gray-50 border-b border-gray-200">
            <div className="grid grid-cols-12 gap-4 px-6 py-3 text-sm font-medium text-gray-700">
              <div className="col-span-1 text-center">번호</div>
              <div className="col-span-6">제목</div>
              <div className="col-span-2 text-center">작성자</div>
              <div className="col-span-2 text-center">작성일</div>
              <div className="col-span-1 text-center">조회</div>
            </div>
          </div>

          {/* 게시글 목록 */}
          <div className="divide-y divide-gray-200">
            {/* 공지사항 - 1페이지에만 표시 */}
            {currentPage === 1 &&
              displayPosts.notices.map((notice) => (
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
                  <div className="col-span-6">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-900 hover:text-orange-600 transition-colors">
                        {notice.title}
                      </span>
                      <span
                        className={`inline-block px-2 py-1 rounded text-xs font-medium ${notice.badgeColor}`}
                      >
                        {notice.badge}
                      </span>
                    </div>
                  </div>
                  <div className="col-span-2 text-center text-sm text-gray-600">
                    {notice.author}
                  </div>
                  <div className="col-span-2 text-center text-sm text-gray-600">
                    {notice.date}
                  </div>
                  <div className="col-span-1 text-center text-sm text-gray-600">
                    {notice.views.toLocaleString()}
                  </div>
                </div>
              ))}

            {/* 일반 게시글 */}
            {displayPosts.general.length === 0 ? (
              <div className="px-6 py-12 text-center text-gray-500">
                {searchTerm ? "검색 결과가 없습니다." : "게시글이 없습니다."}
              </div>
            ) : (
              displayPosts.general.map((post) => (
                <div
                  key={post.id}
                  onClick={() => handleNoticeClick(post.id)}
                  className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <div className="col-span-1 text-center text-sm text-gray-600">
                    <span className="inline-block px-2 py-1 bg-gray-500 text-white text-xs font-bold rounded">
                      일반
                    </span>
                  </div>
                  <div className="col-span-6">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-900 hover:text-toss-600 transition-colors">
                        {post.title}
                      </span>
                    </div>
                  </div>
                  <div className="col-span-2 text-center text-sm text-gray-600">
                    {post.author}
                  </div>
                  <div className="col-span-2 text-center text-sm text-gray-600">
                    {post.date}
                  </div>
                  <div className="col-span-1 text-center text-sm text-gray-600">
                    {post.views.toLocaleString()}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* 게시글 목록 - 모바일 카드 뷰 */}
        <div className="md:hidden space-y-3">
          {/* 공지사항 - 1페이지에만 표시 */}
          {currentPage === 1 &&
            displayPosts.notices.map((notice) => (
              <div
                key={notice.id}
                onClick={() => handleNoticeClick(notice.id)}
                className="bg-orange-50 border-l-4 border-orange-400 rounded-r-lg p-4 cursor-pointer hover:bg-orange-100 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="inline-block px-2 py-1 bg-orange-500 text-white text-xs font-bold rounded">
                    공지
                  </span>
                  <span
                    className={`inline-block px-2 py-1 rounded text-xs font-medium ${notice.badgeColor}`}
                  >
                    {notice.badge}
                  </span>
                </div>
                <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
                  {notice.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>{notice.date}</span>
                  <span>조회 {notice.views}</span>
                </div>
              </div>
            ))}

          {/* 일반 게시글 */}
          {displayPosts.general.length === 0 ? (
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center text-gray-500 text-sm">
              {searchTerm ? "검색 결과가 없습니다." : "게시글이 없습니다."}
            </div>
          ) : (
            displayPosts.general.map((post) => (
              <div
                key={post.id}
                onClick={() => handleNoticeClick(post.id)}
                className="bg-white border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="inline-block px-2 py-1 bg-gray-500 text-white text-xs font-bold rounded">
                    일반
                  </span>
                </div>
                <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>{post.date}</span>
                  <span>조회 {post.views}</span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* 페이지네이션 */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50 ${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              이전
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-2 text-sm rounded ${
                  currentPage === page
                    ? "bg-toss-500 text-white"
                    : "border border-gray-300 hover:bg-gray-50"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50 ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              다음
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
