"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const programs = [
  {
    id: "mind-clarity",
    name: "Mind Clarity Coaching",
    price: "70,000 ~ 90,000원",
    priceValue: 80000,
    description: "1회 세션",
    features: [
      "목표와 감정을 명확히 인식",
      "1:1 개인 세션",
      "자기 인식과 감정 정리 중심",
    ],
  },
  {
    id: "life-direction",
    name: "Life Direction Program",
    price: "350,000 ~ 400,000원",
    priceValue: 375000,
    description: "5회 패키지",
    features: [
      "진로·관계·자기 방향성 설계",
      "매주 피드백과 과제 제공",
      "성장형 코칭",
    ],
  },
  {
    id: "emotional-recovery",
    name: "Emotional Recovery Course",
    price: "550,000 ~ 700,000원",
    priceValue: 625000,
    description: "8회 패키지",
    features: [
      "번아웃, 무기력, 자존감 회복",
      "감정일기, 리프레임 훈련",
      "장기 코칭 프로그램",
    ],
  },
  {
    id: "inner-growth",
    name: "Inner Growth Workshop",
    price: "40,000원",
    priceValue: 40000,
    description: "그룹 세션 1회",
    features: [
      "4~6인 그룹 참여",
      "내면 대화 탐색",
      "관계 안에서의 나 이해하기",
    ],
  },
  {
    id: "youth-vision",
    name: "Youth Vision Coaching",
    price: "900,000 ~ 1,200,000원",
    priceValue: 1050000,
    description: "3개월 과정",
    features: [
      "청년층 대상 장기 성장 프로젝트",
      "코칭+과제+팔로업 시스템",
      "지속적 자기 확장 지원",
    ],
  },
];

export default function ConsultPage() {
  const [selectedProgram, setSelectedProgram] = useState<string>("");
  const [promoCode, setPromoCode] = useState("");
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    age: "",
    phone: "",
    location: "",
    privacyAgree: false,
  });
  const swiperRef = useRef<SwiperType | null>(null);

  const selectedProgramData = programs.find(
    (program) => program.id === selectedProgram
  );
  const finalPrice = isPromoApplied ? 0 : selectedProgramData?.priceValue || 0;

  const handlePromoCheck = () => {
    if (promoCode === "1234") {
      setIsPromoApplied(true);
      setPromoError("");
    } else if (promoCode) {
      setIsPromoApplied(false);
      setPromoError("추천코드를 확인해주세요.");
    } else {
      setPromoError("추천코드를 입력해주세요.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [name]: target.checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.privacyAgree) {
      alert("개인정보 수집 및 이용에 동의해주세요.");
      return;
    }

    if (!selectedProgram) {
      alert("프로그램을 선택해주세요.");
      return;
    }

    const programInfo = `\n선택한 프로그램: ${
      selectedProgramData?.name
    }\n최종 가격: ${finalPrice.toLocaleString()}원`;
    const promoInfo = isPromoApplied ? "\n추천코드 적용됨 (100% 할인)" : "";

    alert(
      `신청이 접수되었습니다.\n\n이름: ${formData.name}\n성별: ${formData.gender}\n나이: ${formData.age}세\n연락처: ${formData.phone}\n코칭 희망 장소: ${formData.location}${programInfo}${promoInfo}\n\n빠른 시일 내에 연락드리겠습니다.`
    );

    // 폼 초기화
    setFormData({
      name: "",
      gender: "",
      age: "",
      phone: "",
      location: "",
      privacyAgree: false,
    });
    setSelectedProgram("");
    setPromoCode("");
    setIsPromoApplied(false);
    setPromoError("");
  };

  return (
    <div className="pt-14 md:pt-20">
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-8">
          {/* 페이지 헤더 */}
          <div className="text-center mt-12 sm:mt-16 md:mt-20 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-6 tracking-tight">
              프로그램 신청하기
            </h1>
            <p className="text-gray-700 text-base sm:text-lg font-medium">
              나에게 맞는 프로그램을 선택하고 신청해보세요
            </p>
          </div>

          {/* 신청 폼 */}
          <div className="bg-white p-6 sm:p-7 md:p-8 lg:p-10 shadow-md">
            <form
              onSubmit={handleSubmit}
              className="space-y-5 sm:space-y-6 md:space-y-8"
            >
              {/* 이름 */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
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

              {/* 성별 */}
              <div>
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  성별 <span className="text-red-500">*</span>
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-300 focus:border-gray-900 focus:outline-none bg-white text-sm sm:text-base"
                  required
                >
                  <option value="">선택해주세요</option>
                  <option value="남성">남성</option>
                  <option value="여성">여성</option>
                </select>
              </div>

              {/* 나이(만) */}
              <div>
                <label
                  htmlFor="age"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  나이(만) <span className="text-red-500">*</span>
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

              {/* 연락처 */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  연락처 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-300 focus:border-gray-900 focus:outline-none text-sm sm:text-base"
                  placeholder="010-1234-5678"
                  required
                />
              </div>

              {/* 코칭 희망 장소 */}
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  코칭 희망 장소 <span className="text-red-500">*</span>
                </label>
                <select
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-300 focus:border-gray-900 focus:outline-none bg-white text-sm sm:text-base"
                  required
                >
                  <option value="">선택해주세요</option>
                  <option value="홍대 1호점">홍대 1호점</option>
                  <option value="홍대 2호점">홍대 2호점</option>
                  <option value="구로점">구로점</option>
                  <option value="기타">기타</option>
                </select>
              </div>

              {/* 프로그램 선택 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  프로그램 선택 <span className="text-red-500">*</span>
                </label>
                <Swiper
                  effect="coverflow"
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={3}
                  loop={true}
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 200,
                    modifier: 1,
                    slideShadows: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  speed={800}
                  modules={[EffectCoverflow, Pagination]}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 3,
                    },
                  }}
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                    // 초기 로드 시 가운데 프로그램 선택
                    setSelectedProgram(programs[swiper.realIndex].id);
                  }}
                  onSlideChange={(swiper) => {
                    // 슬라이드가 변경되면 가운데 있는 프로그램 자동 선택
                    setSelectedProgram(programs[swiper.realIndex].id);
                  }}
                  className="pb-12"
                >
                  {programs.map((program, index) => (
                    <SwiperSlide key={`${program.id}-${index}`}>
                      {({ isActive }) => (
                        <div
                          className={`bg-gray-50 border-2 p-5 sm:p-6 transition-all duration-500 ${
                            isActive
                              ? "opacity-100 scale-100"
                              : "opacity-60 scale-90"
                          } ${
                            selectedProgram === program.id
                              ? "border-gray-900 shadow-lg"
                              : "border-gray-200 hover:border-gray-400 hover:shadow-md"
                          }`}
                        >
                          <div>
                            <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">
                              {program.name}
                            </h3>
                            <p className="text-xs text-gray-500 mb-3">
                              {program.description}
                            </p>
                            <div className="mb-4">
                              <div className="text-lg sm:text-xl font-light text-gray-900">
                                {program.price}
                              </div>
                            </div>
                            <div className="space-y-1.5 text-xs text-gray-600">
                              {program.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start">
                                  <span className="mr-2 mt-0.5">•</span>
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* 추천코드 */}
              {selectedProgram && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    추천코드 (선택사항)
                  </label>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => {
                        setPromoCode(e.target.value);
                        setIsPromoApplied(false);
                        setPromoError("");
                      }}
                      placeholder="추천코드를 입력하세요"
                      className="flex-1 px-4 sm:px-5 py-3 border border-gray-300 focus:border-gray-900 focus:outline-none text-sm sm:text-base"
                    />
                    <button
                      type="button"
                      onClick={handlePromoCheck}
                      className="px-6 sm:px-8 py-3 bg-gray-900 text-white text-sm sm:text-base font-medium hover:bg-gray-800 transition-colors whitespace-nowrap"
                    >
                      확인
                    </button>
                  </div>
                  {isPromoApplied && (
                    <div className="mt-3">
                      <p className="text-sm text-green-600 font-medium">
                        ✓ 추천코드가 적용되었습니다! 최종 가격: 0원
                      </p>
                    </div>
                  )}
                  {promoError && (
                    <div className="mt-3">
                      <p className="text-sm text-red-600 font-medium">
                        {promoError}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* 선택한 프로그램 정보 */}
              {selectedProgram && (
                <div className="bg-gray-50 p-4 sm:p-5 border border-gray-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs sm:text-sm text-gray-600">
                        선택한 프로그램
                      </p>
                      <p className="text-base sm:text-lg font-medium text-gray-900">
                        {selectedProgramData?.name}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs sm:text-sm text-gray-600">
                        최종 가격
                      </p>
                      <p
                        className={`text-xl sm:text-2xl font-light ${
                          isPromoApplied ? "text-green-600" : "text-gray-900"
                        }`}
                      >
                        {finalPrice.toLocaleString()}원
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* 개인정보 수집 및 이용 동의 */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="privacyAgree"
                    name="privacyAgree"
                    checked={formData.privacyAgree}
                    onChange={handleChange}
                    className="mt-1 mr-3 w-4 h-4"
                    required
                  />
                  <label
                    htmlFor="privacyAgree"
                    className="text-sm text-gray-700"
                  >
                    <span className="font-medium text-gray-900">
                      개인정보 수집 및 이용에 동의합니다.
                    </span>
                    <span className="text-red-500"> *</span>
                    <p className="mt-2 text-xs text-gray-500">
                      수집 항목: 이름, 성별, 나이, 연락처, 코칭 희망 장소
                      <br />
                      수집 목적: 프로그램 신청 및 상담 서비스 제공
                      <br />
                      보유 기간: 상담 종료 후 1년
                    </p>
                  </label>
                </div>
              </div>

              {/* 제출 버튼 */}
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg font-medium hover:bg-gray-800 transition-colors mt-2"
              >
                신청하기
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
