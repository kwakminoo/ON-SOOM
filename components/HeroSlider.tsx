"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// 배너 슬라이드 데이터
const bannerSlides = [
  {
    id: 1,
    image: "/benner1.jpg",
    title: "온숨심리상담센터 - 프로그램 안내",
    link: "/programs",
  },
  {
    id: 2,
    image: "/benner2.jpg",
    title: "온숨심리상담센터 - 자가진단",
    link: "/community/self-test",
  },
  {
    id: 3,
    image: "/benner3.jpg",
    title: "온숨심리상담센터 - 후기",
    link: "#testimonials",
  },
];

const HeroSlider = () => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  // 배너 클릭 핸들러
  const handleBannerClick = (link: string) => {
    if (link.startsWith("#")) {
      // 앵커 링크인 경우 스크롤 이동
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // 페이지 이동
      router.push(link);
    }
  };

  if (!mounted) {
    return (
      <section className="relative w-full h-auto bg-gray-100" />
    );
  }

  return (
    <section className="relative w-full h-auto overflow-hidden">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1200}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-gray-400 !w-3 !h-3",
          bulletActiveClass: "swiper-pagination-bullet-active !bg-gray-800 !w-10",
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="w-full h-auto"
      >
        {bannerSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div 
              className="relative w-full h-auto cursor-pointer group"
              onClick={() => handleBannerClick(slide.link)}
              role="button"
              tabIndex={0}
              aria-label={`${slide.title}로 이동`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleBannerClick(slide.link);
                }
              }}
            >
              {/* 배경 이미지 - 클릭 가능 */}
              <Image
                src={slide.image}
                alt={slide.title}
                width={1920}
                height={1080}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
                priority={slide.id === 1}
                quality={100}
                sizes="100vw"
              />
              {/* 호버 오버레이 */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 커스텀 네비게이션 버튼 */}
      <button
        className="swiper-button-prev-custom absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 group shadow-lg"
        aria-label="이전 슬라이드"
      >
        <svg
          className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:scale-110 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        className="swiper-button-next-custom absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 group shadow-lg"
        aria-label="다음 슬라이드"
      >
        <svg
          className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:scale-110 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </section>
  );
};

export default HeroSlider;
