"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const testimonials = [
  {
    id: 1,
    name: "김OO (28세, 직장인)",
    content: "직장 스트레스로 힘들었는데, 상담을 통해 많은 도움을 받았습니다. 2030 세대의 고민을 정확히 이해해주시는 상담사님 덕분에 큰 변화가 있었어요.",
    program: "개인상담",
    date: "2024.10.05",
  },
  {
    id: 2,
    name: "이OO (25세, 대학생)",
    content: "진로 고민이 많았는데 상담을 받고 나서 명확한 방향을 찾을 수 있었습니다. 온라인으로도 편하게 상담받을 수 있어서 좋았어요.",
    program: "진로상담",
    date: "2024.09.28",
  },
  {
    id: 3,
    name: "박OO, 최OO (29세, 30세 커플)",
    content: "결혼 준비 중 갈등이 많았는데, 커플상담을 통해 서로를 더 잘 이해하게 되었습니다. 상담사님이 우리 세대의 연애관을 이해해주셔서 편했어요.",
    program: "커플상담",
    date: "2024.09.15",
  },
  {
    id: 4,
    name: "정OO (27세, 프리랜서)",
    content: "우울감과 불안으로 일상이 힘들었는데, 꾸준한 상담으로 많이 나아졌습니다. 2030 세대의 고민을 공감해주시는 분이라 더 편하게 얘기할 수 있었어요.",
    program: "개인상담",
    date: "2024.09.02",
  },
  {
    id: 5,
    name: "한OO (26세, 취준생)",
    content: "취업 준비 스트레스와 불안감이 심했는데, 상담을 통해 마음의 안정을 찾았습니다. 같은 세대라 공감대가 형성되어서 더 편하게 이야기할 수 있었어요.",
    program: "개인상담",
    date: "2024.08.20",
  },
  {
    id: 6,
    name: "최OO (29세, 스타트업)",
    content: "회사 내 인간관계 문제로 힘들었는데, 상담을 받으면서 나 자신을 더 잘 이해하게 되었습니다. 실질적인 조언과 따뜻한 공감이 정말 도움됐어요.",
    program: "직장인상담",
    date: "2024.08.10",
  },
  {
    id: 7,
    name: "송OO (24세, 대학원생)",
    content: "학업 스트레스와 미래에 대한 불안이 컸는데, 상담을 통해 심리적 안정을 찾았어요. 제 또래 고민을 잘 이해해주셔서 감사했습니다.",
    program: "개인상담",
    date: "2024.07.25",
  },
  {
    id: 8,
    name: "윤OO (30세, 공무원)",
    content: "번아웃이 심했는데 상담을 받으면서 일과 삶의 균형을 찾게 되었습니다. 구체적인 솔루션을 제시해주셔서 실생활에 큰 도움이 됐어요.",
    program: "직장인상담",
    date: "2024.07.10",
  },
  {
    id: 9,
    name: "강OO, 서OO (27세, 28세 커플)",
    content: "소통 문제로 자주 싸웠는데, 커플상담을 통해 서로의 입장을 이해하게 됐어요. 관계가 한층 더 깊어진 느낌입니다.",
    program: "커플상담",
    date: "2024.06.28",
  },
  {
    id: 10,
    name: "조OO (26세, 디자이너)",
    content: "자존감이 낮아서 힘들었는데, 상담을 통해 나를 있는 그대로 받아들이게 되었습니다. 삶의 질이 정말 많이 좋아졌어요.",
    program: "개인상담",
    date: "2024.06.15",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        {/* 섹션 헤더 */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-3 sm:mb-4 tracking-tight">
            후기
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl">
            상담을 통해 변화를 경험한 2030 세대의 이야기
          </p>
        </div>

        {/* 후기 슬라이더 - Coverflow 효과 */}
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
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={800}
          modules={[Autoplay, EffectCoverflow]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              {({ isActive }) => (
                <div className={`bg-white border border-gray-200 p-6 sm:p-7 md:p-8 lg:p-10 transition-all duration-500 ${
                  isActive ? 'opacity-100 scale-100 shadow-lg' : 'opacity-60 scale-90'
                }`}>
                  {/* 후기 내용 */}
                  <p className="text-gray-900 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-6 md:mb-8 font-light">
                    "{testimonial.content}"
                  </p>

                  {/* 작성자 정보 */}
                  <div className="border-t border-gray-200 pt-4 sm:pt-5 md:pt-6">
                    <p className="text-gray-900 font-medium mb-1 text-xs sm:text-sm md:text-base">
                      {testimonial.name}
                    </p>
                    <p className="text-[10px] sm:text-xs md:text-sm text-gray-500">
                      {testimonial.program} · {testimonial.date}
                    </p>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 통계 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-10 lg:gap-12 mt-10 sm:mt-12 md:mt-16 lg:mt-20 border-t border-gray-200 pt-6 sm:pt-8 md:pt-10 lg:pt-12">
          <div>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-1 sm:mb-2">98%</p>
            <p className="text-gray-500 text-[10px] sm:text-xs md:text-sm uppercase tracking-wider">상담 만족도</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-1 sm:mb-2">5,000+</p>
            <p className="text-gray-500 text-[10px] sm:text-xs md:text-sm uppercase tracking-wider">누적 상담 건수</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-1 sm:mb-2">85%</p>
            <p className="text-gray-500 text-[10px] sm:text-xs md:text-sm uppercase tracking-wider">재상담 비율</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-1 sm:mb-2">4.9</p>
            <p className="text-gray-500 text-[10px] sm:text-xs md:text-sm uppercase tracking-wider">평균 별점</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

