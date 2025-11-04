"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const faqs = [
  {
    id: 1,
    question: "상담은 어떻게 진행되나요?",
    answer: "온라인 또는 오프라인 센터에서 1:1 상담을 진행합니다. 첫 상담은 50분이며, 이후 주기적인 상담을 통해 지속적인 지원을 제공합니다."
  },
  {
    id: 2,
    question: "상담 비용은 얼마인가요?",
    answer: "프로그램별로 상이합니다. 개인상담은 1회 80,000원, 커플상담은 1회 120,000원입니다. 패키지 상담 시 할인 혜택이 있습니다."
  },
  {
    id: 3,
    question: "예약은 어떻게 하나요?",
    answer: "전화(02-1234-5678) 또는 온라인 예약 시스템을 통해 예약하실 수 있습니다. 원하시는 센터와 시간을 선택하시면 됩니다."
  },
  {
    id: 4,
    question: "비밀보장이 되나요?",
    answer: "네, 상담 내용은 철저히 비밀보장됩니다. 상담사는 전문가 윤리강령에 따라 엄격한 비밀유지 의무를 지킵니다."
  },
  {
    id: 5,
    question: "온라인 상담도 가능한가요?",
    answer: "네, 화상 상담을 통해 온라인으로도 상담받으실 수 있습니다. 집에서 편안하게 전문가와 상담하실 수 있습니다."
  },
  {
    id: 6,
    question: "심리검사는 어떻게 하나요?",
    answer: "온라인으로 간단한 심리검사를 받으실 수 있습니다. 검사 결과는 상담사와 함께 분석하며, 추가 상담이 필요한 경우 연계해드립니다."
  },
  {
    id: 7,
    question: "2030 세대 특별 할인이 있나요?",
    answer: "네, 2030 세대를 위한 특별 할인 프로그램이 있습니다. 첫 상담 시 20% 할인, 패키지 상담 시 30% 할인 혜택을 제공합니다."
  },
  {
    id: 8,
    question: "상담 전 준비할 것이 있나요?",
    answer: "특별한 준비는 필요 없습니다. 편안한 마음으로 오시면 됩니다. 다만, 상담 관련 궁금한 점이나 이야기하고 싶은 내용을 미리 정리해오시면 도움이 됩니다."
  }
];

export default function FAQPage() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="pt-14 md:pt-20">
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-8">
          {/* 페이지 헤더 */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-3 sm:mb-4 tracking-tight">
              자주 묻는 질문
            </h1>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg">
              궁금하신 점을 빠르게 확인해보세요
            </p>
          </div>

          {/* FAQ 목록 */}
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="border border-gray-200 bg-white hover:shadow-md transition-shadow"
              >
                {/* 질문 */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-4 sm:px-5 md:px-8 py-4 sm:py-5 md:py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm sm:text-base md:text-lg font-light text-gray-900 pr-3 sm:pr-4 md:pr-8 leading-snug">
                    {faq.question}
                  </span>
                  <span className="text-lg sm:text-xl md:text-2xl text-gray-400 flex-shrink-0">
                    {openId === faq.id ? "−" : "+"}
                  </span>
                </button>

                {/* 답변 */}
                {openId === faq.id && (
                  <div className="px-4 sm:px-5 md:px-8 pb-4 sm:pb-5 md:pb-6">
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 추가 문의 */}
          <div className="mt-6 sm:mt-8 md:mt-12 lg:mt-16 text-center">
            <p className="text-gray-600 mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base">
              더 궁금하신 점이 있으신가요?
            </p>
            <a
              href="/consult"
              className="inline-block bg-gray-900 text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base font-light hover:bg-gray-800 transition-colors rounded-sm"
            >
              문의하기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

