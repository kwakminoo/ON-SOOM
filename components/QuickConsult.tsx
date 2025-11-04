"use client";

import { useState } from "react";

const QuickConsult = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [center, setCenter] = useState("");

  const centers = ["홍대 1호", "홍대 2호", "구로", "기타"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제로는 API 호출
    alert(
      `신청 문의가 접수되었습니다.\n이름: ${name}\n성별: ${gender}\n나이: ${age}\n연락처: ${phone}\n희망장소: ${center}`
    );
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-white to-toss-50 py-16 md:py-24 border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
            프로그램 문의
          </h3>
          <p className="text-center text-gray-600 mb-8 md:mb-12">
            온ː숨 전문가가 함께하겠습니다
          </p>
          <div className="bg-white rounded-2xl shadow-toss-lg p-6 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* 이름 입력 */}
              {/* <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  이름
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="홍길동"
                  className="w-full px-4 py-3.5 border-2 border-gray-200 focus:border-toss-500 focus:ring-2 focus:ring-toss-100 focus:outline-none text-base rounded-xl transition-colors"
                  required
                />
              </div> */}

              {/* 성별 선택 */}
              {/* <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  성별
                </label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full px-4 py-3.5 border-2 border-gray-200 focus:border-toss-500 focus:ring-2 focus:ring-toss-100 focus:outline-none bg-white text-gray-900 text-base rounded-xl transition-colors"
                  required
                >
                  <option value="">성별을 선택해주세요</option>
                  <option value="남성">남성</option>
                  <option value="여성">여성</option>
                </select>
              </div> */}

              {/* 나이 입력 */}
              {/* <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  나이
                </label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="예: 25"
                  min="1"
                  max="120"
                  className="w-full px-4 py-3.5 border-2 border-gray-200 focus:border-toss-500 focus:ring-2 focus:ring-toss-100 focus:outline-none text-base rounded-xl transition-colors"
                  required
                />
              </div> */}

              {/* 연락처 입력 */}
              {/* <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  연락처
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="010-1234-5678"
                  className="w-full px-4 py-3.5 border-2 border-gray-200 focus:border-toss-500 focus:ring-2 focus:ring-toss-100 focus:outline-none text-base rounded-xl transition-colors"
                  pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                  required
                />
              </div> */}

              {/* 희망장소 선택 */}
              {/* <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  희망장소
                </label>
                <select
                  value={center}
                  onChange={(e) => setCenter(e.target.value)}
                  className="w-full px-4 py-3.5 border-2 border-gray-200 focus:border-toss-500 focus:ring-2 focus:ring-toss-100 focus:outline-none bg-white text-gray-900 text-base rounded-xl transition-colors"
                  required
                >
                  <option value="">희망 장소를 선택해주세요</option>
                  {centers.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div> */}

              {/* 문의하기 버튼 */}
              <button
                type="button"
                onClick={() => (window.location.href = "/programs/apply")}
                className="w-full bg-toss-500 text-white py-4 text-base md:text-lg font-bold hover:bg-toss-600 transition-all rounded-xl mt-6 shadow-md hover:shadow-lg"
              >
                프로그램 문의하기
              </button>
            </form>

            {/* 안내 텍스트 */}
            {/* <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-center text-sm text-gray-500">
                ⏱️ <span className="text-toss-600 font-medium">24시간 내</span>{" "}
                연락드립니다
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickConsult;
