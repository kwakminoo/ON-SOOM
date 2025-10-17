"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const plans = [
  {
    id: "10times",
    name: "10회권",
    price: 800000,
    originalPrice: 1000000,
    description: "10회 상담 패키지",
    features: ["10회 상담 이용", "유효기간 1년", "전문 상담사 배정"]
  },
  {
    id: "regular",
    name: "정기권",
    price: 200000,
    originalPrice: 240000,
    description: "월 4회 정기 상담",
    features: ["월 4회 상담", "고정 상담사", "우선 예약 가능"]
  },
  {
    id: "subscription",
    name: "구독권",
    price: 150000,
    originalPrice: 180000,
    description: "월 2회 자동 구독",
    features: ["월 2회 상담", "자동 결제", "언제든 취소 가능"]
  }
];

export default function ConsultPage() {
  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const [couponCode, setCouponCode] = useState("");
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    location: "",
    inquiryType: "",
    message: ""
  });

  const inquiryTypes = [
    "취업상담",
    "자기개발",
    "연애상담",
    "가족상담",
    "우울/불안",
    "트라우마",
    "중독",
    "기타"
  ];

  const selectedPlanData = plans.find(plan => plan.id === selectedPlan);
  const finalPrice = isCouponApplied ? 0 : (selectedPlanData?.price || 0);

  const handleCouponApply = () => {
    if (couponCode === "1234") {
      setIsCouponApplied(true);
      alert("쿠폰이 적용되었습니다! 100% 할인됩니다.");
    } else if (couponCode) {
      setIsCouponApplied(false);
      alert("유효하지 않은 쿠폰 코드입니다.");
    } else {
      alert("쿠폰 코드를 입력해주세요.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제로는 API 호출
    const planInfo = selectedPlan ? `\n선택한 플랜: ${selectedPlanData?.name}\n최종 가격: ${finalPrice.toLocaleString()}원` : "";
    const couponInfo = isCouponApplied ? "\n쿠폰 적용됨 (100% 할인)" : "";
    
    alert(`문의가 접수되었습니다.\n\n이름: ${formData.name}\n나이: ${formData.age}\n연락처: ${formData.phone}\n거주지: ${formData.location}\n문의유형: ${formData.inquiryType}${planInfo}${couponInfo}\n\n빠른 시일 내에 연락드리겠습니다.`);
    
    // 폼 초기화
    setFormData({
      name: "",
      age: "",
      phone: "",
      location: "",
      inquiryType: "",
      message: ""
    });
    setSelectedPlan("");
    setCouponCode("");
    setIsCouponApplied(false);
  };

  return (
    <div className="pt-14 md:pt-20">
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-8">
          {/* 페이지 헤더 */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-3 sm:mb-4 tracking-tight">
              문의하기
            </h1>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg">
              상담 전문가가 빠른 시일 내에 연락드리겠습니다
            </p>
          </div>

          {/* 문의 폼 */}
          <div className="bg-white p-6 sm:p-7 md:p-8 lg:p-10 shadow-md">
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 md:space-y-8">
              {/* 이름 */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  이름 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-300 focus:border-gray-900 focus:outline-none text-sm sm:text-base"
                  placeholder="홍길동"
                  required
                />
              </div>

              {/* 나이 */}
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                  나이 <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-300 focus:border-gray-900 focus:outline-none text-sm sm:text-base"
                  placeholder="25"
                  min="1"
                  max="100"
                  required
                />
              </div>

              {/* 전화번호 */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  전화번호 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-300 focus:border-gray-900 focus:outline-none text-sm sm:text-base"
                  placeholder="010-1234-5678"
                  pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                  required
                />
              </div>

              {/* 사는 곳 */}
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                  거주지 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-300 focus:border-gray-900 focus:outline-none text-sm sm:text-base"
                  placeholder="서울시 강남구"
                  required
                />
              </div>

              {/* 문의 유형 */}
              <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                  문의 유형 <span className="text-red-500">*</span>
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-300 focus:border-gray-900 focus:outline-none bg-white text-sm sm:text-base"
                  required
                >
                  <option value="">선택해주세요</option>
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* 상세 내용 */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  상세 내용
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-300 focus:border-gray-900 focus:outline-none resize-none text-sm sm:text-base"
                  placeholder="문의하실 내용을 자유롭게 작성해주세요"
                />
              </div>

              {/* 플랜 선택 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  상담 플랜 선택
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                  {plans.map((plan) => (
                    <div
                      key={plan.id}
                      onClick={() => setSelectedPlan(plan.id)}
                      className={`bg-gray-50 border-2 p-5 sm:p-6 cursor-pointer transition-all duration-300 ${
                        selectedPlan === plan.id
                          ? "border-gray-900 shadow-lg"
                          : "border-gray-200 hover:border-gray-400 hover:shadow-md"
                      }`}
                    >
                      <div className="text-center">
                        <h3 className="text-lg sm:text-xl font-light text-gray-900 mb-2">
                          {plan.name}
                        </h3>
                        <p className="text-xs text-gray-500 mb-3">
                          {plan.description}
                        </p>
                        <div className="mb-3">
                          <div className="text-xl sm:text-2xl font-light text-gray-900 mb-1">
                            {plan.price.toLocaleString()}원
                          </div>
                          <div className="text-xs text-gray-400 line-through">
                            {plan.originalPrice.toLocaleString()}원
                          </div>
                        </div>
                        <div className="space-y-1.5 text-xs text-gray-600 text-left">
                          {plan.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center">
                              <span className="mr-2">✓</span>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 쿠폰 입력 */}
              {selectedPlan && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    쿠폰 코드
                  </label>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => {
                        setCouponCode(e.target.value);
                        setIsCouponApplied(false); // 입력 시 쿠폰 적용 해제
                      }}
                      placeholder="쿠폰 코드를 입력하세요"
                      className="flex-1 px-4 sm:px-5 py-3 border border-gray-300 focus:border-gray-900 focus:outline-none text-sm sm:text-base"
                    />
                    <button
                      type="button"
                      onClick={handleCouponApply}
                      className="px-6 sm:px-8 py-3 bg-gray-900 text-white text-sm sm:text-base font-medium hover:bg-gray-800 transition-colors whitespace-nowrap"
                    >
                      적용
                    </button>
                  </div>
                  {isCouponApplied && (
                    <div className="mt-3">
                      <p className="text-sm text-green-600 font-medium">
                        ✓ 쿠폰이 적용되었습니다! 최종 가격: 0원
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* 선택한 플랜 정보 */}
              {selectedPlan && (
                <div className="bg-gray-50 p-4 sm:p-5 border border-gray-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs sm:text-sm text-gray-600">선택한 플랜</p>
                      <p className="text-base sm:text-lg font-medium text-gray-900">{selectedPlanData?.name}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs sm:text-sm text-gray-600">최종 가격</p>
                      <p className="text-xl sm:text-2xl font-light text-gray-900">
                        {finalPrice.toLocaleString()}원
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* 제출 버튼 */}
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg font-medium hover:bg-gray-800 transition-colors rounded-sm mt-2"
              >
                문의하기
              </button>

              {/* 안내 텍스트 */}
              <p className="text-center text-[10px] sm:text-xs md:text-sm text-gray-500">
                상담 전문가가 24시간 내 연락드리겠습니다
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

