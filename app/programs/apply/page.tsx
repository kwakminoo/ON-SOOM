"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";

// 다이얼 휠 선택기 컴포넌트
interface WheelPickerProps {
  items: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const WheelPicker = ({ items, value, onChange, placeholder }: WheelPickerProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const index = items.indexOf(value);
    if (index >= 0) {
      setSelectedIndex(index);
      scrollToIndex(index);
    }
  }, [value, items]);

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const itemHeight = 56; // h-14 = 56px
      scrollRef.current.scrollTop = index * itemHeight;
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const itemHeight = 56; // h-14 = 56px
      const scrollTop = scrollRef.current.scrollTop;
      const index = Math.round(scrollTop / itemHeight);
      const clampedIndex = Math.max(0, Math.min(index, items.length - 1));
      
      if (clampedIndex !== selectedIndex) {
        setSelectedIndex(clampedIndex);
        onChange(items[clampedIndex]);
        scrollToIndex(clampedIndex);
      }
    }
  };

  const handleItemClick = (index: number) => {
    setSelectedIndex(index);
    onChange(items[index]);
    scrollToIndex(index);
  };

  return (
    <div className="relative w-full h-[180px] overflow-hidden border-2 border-gray-300 rounded-xl bg-white shadow-sm">
      {/* 선택 영역 표시 */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-14 border-y-2 border-toss-500 bg-toss-50/40 pointer-events-none z-10" />
      
      {/* 그라데이션 마스크 */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent pointer-events-none z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />

      {/* 스크롤 영역 */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="h-full overflow-y-auto scrollbar-hide"
        style={{
          scrollSnapType: "y mandatory",
          paddingTop: "66px",
          paddingBottom: "66px",
        }}
      >
        {items.length === 0 && placeholder && (
          <div className="h-12 flex items-center justify-center text-gray-400 text-base font-medium">
            {placeholder}
          </div>
        )}
        {items.map((item, index) => {
          const distance = Math.abs(index - selectedIndex);
          const opacity = distance === 0 ? 1 : distance === 1 ? 0.5 : 0.25;
          const scale = distance === 0 ? 1 : distance === 1 ? 0.85 : 0.7;

          return (
            <div
              key={index}
              onClick={() => handleItemClick(index)}
              className="h-14 flex items-center justify-center cursor-pointer transition-all duration-200"
              style={{
                opacity,
                transform: `scale(${scale})`,
                scrollSnapAlign: "center",
              }}
            >
              <span className={`text-lg ${distance === 0 ? 'font-extrabold text-gray-900' : 'font-medium text-gray-600'}`}>
                {item}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// 실제 폼 컴포넌트 - useSearchParams 사용
function ApplyForm() {
  const searchParams = useSearchParams();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [center, setCenter] = useState("");
  const [program, setProgram] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  const [promoMessage, setPromoMessage] = useState("");

  const centers = [
    "홍대 1호",
    "홍대 2호",
    "구로",
    "기타",
  ];

  const programsWithPrice: { [key: string]: number } = {
    "Self Roadmap": 80000,
    "Self-growth Roadmap": 400000,
    "Life Roadmap": 650000,
    "Life-growth Roadmap": 1000000,
    "Workshop Roadmap": 40000,
  };

  // URL 파라미터에서 프로그램 자동 선택
  useEffect(() => {
    const programParam = searchParams.get("program");
    if (programParam && programsWithPrice[programParam]) {
      setProgram(programParam);
    }
  }, [searchParams]);

  const getCurrentPrice = () => {
    if (!program) return 0;
    const originalPrice = programsWithPrice[program] || 0;
    return isPromoApplied ? 0 : originalPrice;
  };

  const handlePromoApply = () => {
    if (promoCode === "1234") {
      setIsPromoApplied(true);
      setPromoMessage("✅ 추천코드가 적용되었습니다!");
    } else if (promoCode.trim() === "") {
      setPromoMessage("⚠️ 추천코드를 입력해주세요");
      setIsPromoApplied(false);
    } else {
      setIsPromoApplied(false);
      setPromoMessage("❌ 코드를 확인해주세요");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!program) {
      alert("프로그램을 선택해주세요.");
      return;
    }
    
    const finalPrice = getCurrentPrice();
    alert(`신청이 접수되었습니다.\n\n이름: ${name}\n성별: ${gender}\n나이: ${age}\n연락처: ${phone}\n희망장소: ${center}\n프로그램: ${program}\n결제금액: ${finalPrice.toLocaleString()}원\n\n담당자가 24시간 내 연락드리겠습니다.`);
  };

  const handleProgramChange = (selectedProgram: string) => {
    setProgram(selectedProgram);
    setPromoCode("");
    setIsPromoApplied(false);
    setPromoMessage("");
  };

  return (
    <div className="min-h-screen bg-white pb-12 sm:pb-20 pt-16 sm:pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 제목 */}
        <div className="text-center mt-12 sm:mt-16 md:mt-20 mb-8 sm:mb-10 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6">
            온라인 신청
          </h1>
          <p className="text-base sm:text-lg font-medium text-gray-700">
            프로그램 참여를 위한 온라인 신청
          </p>
        </div>

        {/* 신청 폼 */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-7">
            {/* 이름 입력 */}
            <div>
              <label className="block text-base font-semibold text-gray-800 mb-3">
                이름 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="홍길동"
                className="w-full px-4 py-4 border-2 border-gray-200 focus:border-toss-500 focus:ring-2 focus:ring-toss-100 focus:outline-none text-base font-medium rounded-xl transition-colors"
                required
              />
            </div>

            {/* 성별 선택 */}
            <div>
              <label className="block text-base font-semibold text-gray-800 mb-3">
                성별 <span className="text-red-500">*</span>
              </label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 focus:border-toss-500 focus:ring-2 focus:ring-toss-100 focus:outline-none bg-white text-gray-900 text-base font-medium rounded-xl transition-colors"
                required
              >
                <option value="">성별을 선택해주세요</option>
                <option value="남성">남성</option>
                <option value="여성">여성</option>
              </select>
            </div>

            {/* 나이 입력 */}
            <div>
              <label className="block text-base font-semibold text-gray-800 mb-3">
                나이 <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="예: 25"
                min="1"
                max="120"
                className="w-full px-4 py-4 border-2 border-gray-200 focus:border-toss-500 focus:ring-2 focus:ring-toss-100 focus:outline-none text-base font-medium rounded-xl transition-colors"
                required
              />
            </div>

            {/* 연락처 입력 */}
            <div>
              <label className="block text-base font-semibold text-gray-800 mb-3">
                연락처 <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="010-1234-5678"
                className="w-full px-4 py-4 border-2 border-gray-200 focus:border-toss-500 focus:ring-2 focus:ring-toss-100 focus:outline-none text-base font-medium rounded-xl transition-colors"
                pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                required
              />
            </div>

            {/* 프로그램 선택 */}
            <div>
              <label className="block text-base font-semibold text-gray-800 mb-4">
                프로그램 선택 <span className="text-red-500">*</span>
              </label>
              <WheelPicker
                items={Object.keys(programsWithPrice)}
                value={program}
                onChange={handleProgramChange}
                placeholder="프로그램을 스크롤하여 선택하세요"
              />
            </div>

            {/* 희망장소 선택 */}
            <div>
              <label className="block text-base font-semibold text-gray-800 mb-3">
                희망장소 <span className="text-red-500">*</span>
              </label>
              <select
                value={center}
                onChange={(e) => setCenter(e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 focus:border-toss-500 focus:ring-2 focus:ring-toss-100 focus:outline-none bg-white text-gray-900 text-base font-medium rounded-xl transition-colors"
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

            {/* 가격 표시 */}
            {program && (
              <div style={{ marginTop: '32px' }} className="p-7 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border-2 border-gray-200">
                <div className="flex justify-between items-center mb-5">
                  <span className="text-gray-800 font-semibold text-base">선택한 프로그램</span>
                  <span className="text-gray-900 font-bold text-lg">{program}</span>
                </div>
                
                <div className="flex justify-between items-center mb-7 pb-5 border-b-2 border-gray-200">
                  <span className="text-gray-800 font-semibold text-base">결제 금액</span>
                  <div className="text-right">
                    {isPromoApplied && programsWithPrice[program] > 0 && (
                      <span className="block text-base text-gray-400 line-through mb-2 font-medium">
                        {programsWithPrice[program].toLocaleString()}원
                      </span>
                    )}
                    <span className={`text-3xl font-extrabold ${isPromoApplied ? 'text-toss-600' : 'text-gray-900'}`}>
                      {getCurrentPrice().toLocaleString()}원
                    </span>
                  </div>
                </div>

                {/* 추천코드 입력 */}
                <div className="space-y-4">
                  <label className="block text-base font-semibold text-gray-800">
                    추천코드 (선택)
                  </label>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => {
                        setPromoCode(e.target.value);
                        setPromoMessage("");
                      }}
                      placeholder="추천코드 입력"
                      className="flex-1 px-4 py-4 border-2 border-gray-200 focus:border-toss-500 focus:ring-2 focus:ring-toss-100 focus:outline-none text-base font-medium rounded-xl transition-colors"
                    />
                    <button
                      type="button"
                      onClick={handlePromoApply}
                      className="px-7 py-4 bg-gray-900 text-white font-bold text-base rounded-xl hover:bg-gray-800 transition-colors whitespace-nowrap"
                    >
                      적용하기
                    </button>
                  </div>
                  
                  {/* 메시지 표시 */}
                  {promoMessage && (
                    <div className={`text-base font-semibold ${
                      promoMessage.includes('적용') 
                        ? 'text-toss-600' 
                        : promoMessage.includes('확인')
                        ? 'text-red-600'
                        : 'text-amber-600'
                    }`}>
                      {promoMessage}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 제출 버튼 */}
            <button
              type="submit"
              className="w-full bg-toss-500 text-white py-5 text-lg font-extrabold hover:bg-toss-600 transition-all rounded-xl shadow-md hover:shadow-lg"
              style={{ marginTop: '40px' }}
            >
              신청하기
            </button>
          </form>

          {/* 안내 텍스트 */}
          <div style={{ marginTop: '36px', paddingTop: '28px' }} className="border-t-2 border-gray-200">
            <p className="text-center text-base font-semibold text-gray-700">
              ⏱️ 담당자가 <span className="text-toss-600 font-extrabold">24시간 내</span> 연락드립니다
            </p>
            <p className="text-center text-sm font-medium text-gray-600" style={{ marginTop: '12px' }}>
              문의사항이 있으시면 02-1234-5678로 연락주세요
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Suspense로 감싼 메인 페이지 컴포넌트
export default function ApplyPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-14 w-14 border-4 border-gray-200 border-t-toss-500 mb-5"></div>
          <p className="text-lg font-semibold text-gray-700">로딩 중...</p>
        </div>
      </div>
    }>
      <ApplyForm />
    </Suspense>
  );
}
