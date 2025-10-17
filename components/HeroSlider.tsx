"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    title: "행복으로 갈아타는",
    subtitle: "2030 세대 심리상담 20% 할인",
    description: "첫 상담 특별 할인 이벤트 진행 중",
    bgColor: "from-blue-500 to-purple-600",
    cta: "자세히 보기",
    link: "/events/discount",
  },
  {
    id: 2,
    title: "심리상담 진짜 효과있나요?",
    subtitle: "솔직 후기 확인하기",
    description: "실제 내담자들의 생생한 후기를 만나보세요",
    bgColor: "from-purple-500 to-pink-600",
    cta: "후기 보기",
    link: "/reviews",
  },
  {
    id: 3,
    title: "내게 꼭 맞는",
    subtitle: "좋은 상담사 찾는 법",
    description: "전문가 매칭 시스템으로 최적의 상담사를 찾아드립니다",
    bgColor: "from-teal-500 to-blue-600",
    cta: "전문가 보기",
    link: "/experts",
  },
  {
    id: 4,
    title: "온라인·오프라인 모두 가능한",
    subtitle: "편리한 상담 시스템",
    description: "시간과 장소에 구애받지 않는 상담 서비스",
    bgColor: "from-orange-500 to-red-600",
    cta: "예약하기",
    link: "/consult",
  },
];

const HeroSlider = () => {
  return (
    <section className="relative w-full h-[400px] md:h-[500px]">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        loopAdditionalSlides={2}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full bg-gray-900 flex items-center justify-center">
              {/* 서브틀한 그리드 배경 */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                  backgroundSize: '50px 50px'
                }} />
              </div>

              {/* 컨텐츠 */}
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
                <div className="space-y-4 sm:space-y-6 md:space-y-8">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-light text-white tracking-tight leading-tight px-4">
                    {slide.subtitle}
                  </h2>
                  <p className="text-white/80 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-3xl mx-auto font-light px-4">
                    {slide.description}
                  </p>
                  <Link
                    href={slide.cta === "예약하기" ? "/consult" : slide.link}
                    className="inline-block bg-white text-gray-900 px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg font-medium hover:bg-gray-100 transition-colors rounded-sm mt-4"
                  >
                    {slide.cta}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;

