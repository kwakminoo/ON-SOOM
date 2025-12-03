"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import Image from "next/image";
import { useRouter } from "next/navigation";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// 배너 슬라이드 데이터
const bannerSlides = [
  {
    id: 1,
    desktopImage: "/pc1.png",
    mobileImage: "/mob1.png",
    buttonImage: "/pc1_botton.png",
    title: "온숨- 프로그램 안내",
    link: "/programs",
    buttonPosition:
      "right-[3%] bottom-[9%] md:right-[4%] md:bottom-[11%] lg:right-[5%] lg:bottom-[13%] xl:right-[6%] xl:bottom-[14%]", // 왼쪽으로 약간 이동
    buttonSize: "w-[18vw] min-w-[180px] max-w-[400px]", // 화면 너비의 18%, 최소 180px, 최대 400px
  },
  {
    id: 2,
    desktopImage: "/pc2.png",
    mobileImage: "/mob2.png",
    buttonImage: "/pc2_botton.png",
    title: "온숨심리상담센터 - 후기",
    link: "#testimonials",
    buttonPosition:
      "left-[2%] bottom-[14%] md:left-[3%] md:bottom-[16%] lg:left-[4%] lg:bottom-[18%] xl:left-[5%] xl:bottom-[19%]", // 더 왼쪽으로 이동
    buttonSize: "w-[19vw] min-w-[190px] max-w-[430px]", // 화면 너비의 19%, 최소 190px, 최대 430px
  },
  {
    id: 3,
    desktopImage: "/pc3.png",
    mobileImage: "/mob3.png",
    buttonImage: "/pc3_botton.png",
    title: "온숨심리상담센터 - 자가진단",
    link: "/community/self-test",
    buttonPosition: "bottom-[14%] left-1/2 -translate-x-[110%]", // 중앙에서 왼쪽으로 이동 후 우측으로 40% 조정, 더 위로
    buttonSize: "w-[18vw] min-w-[180px] max-w-[400px]", // 화면 너비의 18%, 최소 180px, 최대 400px
  },
];

const HeroSlider = () => {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);

    // 모바일 여부 확인 (768px 미만)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
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
    return <section className="relative w-full h-auto bg-gray-100" />;
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
          bulletActiveClass:
            "swiper-pagination-bullet-active !bg-gray-800 !w-10",
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        className="w-full h-auto"
      >
        {bannerSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-auto">
              {/* 배경 이미지 - 모바일에서는 클릭 가능 */}
              {isMobile ? (
                <div
                  onClick={() => handleBannerClick(slide.link)}
                  className="cursor-pointer"
                  role="button"
                  tabIndex={0}
                  aria-label={`${slide.title}로 이동`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleBannerClick(slide.link);
                    }
                  }}
                >
                  <Image
                    src={slide.mobileImage}
                    alt={slide.title}
                    width={800}
                    height={1000}
                    className="w-full h-auto"
                    priority={slide.id === 1}
                    quality={100}
                    unoptimized={true}
                    sizes="100vw"
                  />
                </div>
              ) : (
                <>
                  {/* PC - 배경 이미지 (클릭 불가능) */}
                  <Image
                    src={slide.desktopImage}
                    alt={slide.title}
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                    priority={slide.id === 1}
                    quality={100}
                    unoptimized={true}
                    sizes="100vw"
                  />

                  {/* PC - Button Image (Clickable) */}
                  {/* <button
                    onClick={() => handleBannerClick(slide.link)}
                    className={`absolute ${slide.buttonPosition} transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-95 cursor-pointer z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg`}
                    aria-label={`${slide.title}로 이동`}
                  >
                    <Image
                      src={slide.buttonImage}
                      alt={`${slide.title} button`}
                      width={200}
                      height={60}
                      className={`h-auto ${slide.buttonSize || "w-[18vw] min-w-[180px] max-w-[400px]"}`}
                      unoptimized
                    />
                  </button> */}
                </>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
