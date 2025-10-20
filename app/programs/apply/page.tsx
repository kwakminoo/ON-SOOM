"use client";

import { useState } from "react";

export default function ApplyPage() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [center, setCenter] = useState("");
  const [program, setProgram] = useState("");

  const centers = [
    "홍대 1호",
    "홍대 2호",
    "구로",
    "온라인상담",
  ];

  const programs = [
    "개인 심리상담",
    "커플 상담",
    "직장인 상담",
    "기업 상담",
    "교육기관 상담",
    "강연 및 세미나",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`신청이 접수되었습니다.\n\n이름: ${name}\n성별: ${gender}\n나이: ${age}\n연락처: ${phone}\n희망장소: ${center}\n프로그램: ${program}\n\n담당자가 24시간 내 연락드리겠습니다.`);
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 제목 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            온라인 신청
          </h1>
          <p className="text-lg text-gray-600">
            프로그램 참여를 위한 온라인 신청
          </p>
        </div>

        {/* 신청 폼 */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 이름 입력 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                이름 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="홍길동"
                className="w-full px-4 py-3.5 border-2 border-gray-200 focus:border-toss-500 focus:ring-2 focus:ring-toss-100 focus:outline-none text-base rounded-xl transition-colors"
                required
              />
            </div>

            {/* 성별 선택 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                성별 <span className="text-red-500">*</span>
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
            </div>

            {/* 나이 입력 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                나이 <span className="text-red-500">*</span>
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
            </div>

            {/* 연락처 입력 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                연락처 <span className="text-red-500">*</span>
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
            </div>

            {/* 프로그램 선택 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                프로그램 선택 <span className="text-red-500">*</span>
              </label>
              <select
                value={program}
                onChange={(e) => setProgram(e.target.value)}
                className="w-full px-4 py-3.5 border-2 border-gray-200 focus:border-toss-500 focus:ring-2 focus:ring-toss-100 focus:outline-none bg-white text-gray-900 text-base rounded-xl transition-colors"
                required
              >
                <option value="">프로그램을 선택해주세요</option>
                {programs.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            {/* 희망장소 선택 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                희망장소 <span className="text-red-500">*</span>
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
            </div>

            {/* 제출 버튼 */}
            <button
              type="submit"
              className="w-full bg-toss-500 text-white py-4 text-base md:text-lg font-bold hover:bg-toss-600 transition-all rounded-xl mt-6 shadow-md hover:shadow-lg"
            >
              신청하기
            </button>
          </form>

          {/* 안내 텍스트 */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-center text-sm text-gray-600">
              ⏱️ 담당자가 <span className="text-toss-600 font-medium">24시간 내</span> 연락드립니다
            </p>
            <p className="text-center text-xs text-gray-500 mt-2">
              문의사항이 있으시면 02-1234-5678로 연락주세요
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


