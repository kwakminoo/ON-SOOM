"use client";

import { useState } from "react";

// 여기 내용만 수정하면 됩니다
const faqs = [
  {
    id: 1,
    category: "상담 예약",
    question: "상담 예약은 어떻게 하나요?",
    answer: "홈페이지의 '신청하기' 메뉴를 통해 온라인으로 예약하시거나, 전화(02-0000-0000)로 예약하실 수 있습니다."
  },
  {
    id: 2,
    category: "상담 예약",
    question: "상담 예약 취소는 어떻게 하나요?",
    answer: "예약하신 날짜 최소 24시간 전에 전화 또는 카카오톡으로 연락 주시면 취소 가능합니다."
  },
  {
    id: 3,
    category: "상담 비용",
    question: "상담 비용은 얼마인가요?",
    answer: "프로그램에 따라 상이합니다. Mind Clarity Coaching은 7~9만원, Life Direction Program은 35~40만원입니다."
  },
  {
    id: 4,
    category: "상담 비용",
    question: "할인이나 이벤트가 있나요?",
    answer: "정기적으로 이벤트를 진행하고 있습니다. 공지사항을 확인해주세요."
  },
  {
    id: 5,
    category: "프로그램",
    question: "온라인 상담도 가능한가요?",
    answer: "네, 모든 프로그램은 온라인으로도 진행 가능합니다. 예약 시 온라인 상담을 선택해주세요."
  },
  {
    id: 6,
    category: "프로그램",
    question: "상담 시간은 얼마나 걸리나요?",
    answer: "1회 상담은 약 50~60분 정도 소요됩니다. 프로그램에 따라 회차와 기간이 다릅니다."
  },
  {
    id: 7,
    category: "센터 이용",
    question: "주차는 가능한가요?",
    answer: "홍대 1호점, 2호점은 인근 공영주차장 이용 가능하며, 구로점은 건물 내 주차장을 이용하실 수 있습니다."
  },
  {
    id: 8,
    category: "센터 이용",
    question: "운영 시간은 어떻게 되나요?",
    answer: "평일 10:00~20:00, 주말 10:00~18:00입니다. 공휴일은 휴무입니다."
  },
  {
    id: 9,
    category: "기타",
    question: "비밀은 보장되나요?",
    answer: "네, 모든 상담 내용은 철저히 비밀이 보장됩니다. 상담사 윤리 규정을 준수합니다."
  },
  {
    id: 10,
    category: "기타",
    question: "상담 전 준비할 것이 있나요?",
    answer: "특별히 준비하실 것은 없습니다. 편안한 마음으로 오시면 됩니다."
  }
];

export default function CommunityFAQPage() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white pb-20" style={{ paddingTop: '80px' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 제목 */}
        <div className="text-center" style={{ marginTop: '80px', marginBottom: '50px' }}>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            자주 묻는 질문
          </h1>
          <p className="text-lg font-medium text-gray-700">
            궁금하신 내용을 찾아보세요
          </p>
        </div>

        {/* FAQ 목록 */}
        <div className="space-y-3">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-200 bg-white"
            >
              {/* 질문 */}
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-base font-medium text-gray-900 flex-1">
                  Q. {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ml-4 ${
                    openId === faq.id ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* 답변 */}
              {openId === faq.id && (
                <div className="px-6 py-5 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    A. {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 추가 문의 안내 */}
        <div className="mt-16 text-center py-12 bg-gray-50">
          <h3 className="text-xl font-medium text-gray-900 mb-3">
            더 궁금한 점이 있으신가요?
          </h3>
          <p className="text-gray-600 mb-6">
            이메일: info@onsoom.kr | 전화: 02-0000-0000
          </p>
          <button className="px-8 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors">
            문의하기
          </button>
        </div>
      </div>
    </div>
  );
}
