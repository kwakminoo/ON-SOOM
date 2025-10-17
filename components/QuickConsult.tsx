"use client";

import { useState } from "react";

const QuickConsult = () => {
  const [phone, setPhone] = useState("");
  const [center, setCenter] = useState("");

  const centers = [
    "강남센터",
    "홍대센터",
    "강북센터",
    "분당센터",
    "온라인상담",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제로는 API 호출
    alert(`상담 문의가 접수되었습니다.\n센터: ${center}\n연락처: ${phone}`);
  };

  return (
    <section id="contact" className="bg-white py-16 md:py-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-light text-gray-900 mb-6 sm:mb-8 md:mb-10 text-center">
            상담 문의
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {/* 센터 선택 */}
            <select
              value={center}
              onChange={(e) => setCenter(e.target.value)}
              className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-300 focus:border-gray-900 focus:outline-none bg-white text-gray-900 text-sm sm:text-base"
              required
            >
              <option value="">센터 선택</option>
              {centers.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            {/* 연락처 입력 */}
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="연락처 (000-0000-0000)"
              className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-300 focus:border-gray-900 focus:outline-none text-sm sm:text-base"
              pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
              required
            />

            {/* 문의하기 버튼 */}
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg font-medium hover:bg-gray-800 transition-colors rounded-sm mt-2"
            >
              문의하기
            </button>
          </form>

          {/* 안내 텍스트 */}
          <p className="text-center text-sm text-gray-500 mt-6">
            상담 전문가가 24시간 내 연락드리겠습니다
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuickConsult;

