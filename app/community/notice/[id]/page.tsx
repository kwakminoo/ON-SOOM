"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { notices } from "../data";

export default function NoticeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();

  // Next.js 15: params를 Promise로 처리
  const { id } = use(params);
  console.log("id", id);

  const noticeId = parseInt(id, 10);

  const selectedNoticeData = notices.find((notice) => notice.id === noticeId);

  if (!selectedNoticeData) {
    return (
      <div className="min-h-screen bg-white pb-12 sm:pb-20 pt-16 sm:pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <p className="text-gray-500">게시글을 찾을 수 없습니다.</p>
            <button
              onClick={() => router.push("/notice")}
              className="mt-4 px-8 py-3 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors rounded-lg"
            >
              목록으로 돌아가기
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-12 sm:pb-20 pt-16 sm:pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-12 sm:mt-16 md:mt-20">
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            {/* 게시글 헤더 */}
            <div className="border-b border-gray-200 px-6 md:px-10 py-8 bg-gray-50">
              <div className="flex items-center gap-2 mb-4">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${selectedNoticeData.badgeColor}`}
                >
                  {selectedNoticeData.badge}
                </span>
                <span className="text-sm text-gray-500">
                  {selectedNoticeData.category}
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-4">
                {selectedNoticeData.title}
              </h2>

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
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  {selectedNoticeData.views.toLocaleString()}
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
            </div>

            {/* 목록으로 버튼 */}
            <div className="border-t border-gray-200 px-6 md:px-10 py-6 bg-gray-50">
              <button
                onClick={() => router.back()}
                className="px-8 py-3 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors rounded-lg"
              >
                목록으로 돌아가기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
