"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const testimonials = [
  {
    id: 1,
    name: "윤OO (26세, 디자이너)",
    content:
      "처음엔 그냥 제 이야기를 들어주는 시간인 줄 알았는데, 생각보다 제 안을 깊이 들여다보게 됐어요. 무엇이 저를 답답하게 했는지 알게 된 게 가장 큰 수확이에요. 지금은 예전보다 마음이 훨씬 가벼워요. 나를 이해하는 법을 배운 느낌이에요.",
    rating: 5,
  },
  {
    id: 2,
    name: "김OO (29세, 대학원생)",
    content:
      "매번 정리하지 못했던 생각들이 단어로 정리되는 게 신기했어요. 머릿속이 복잡했는데, 하나씩 풀리듯 선명해졌어요. 제가 어떤 방향으로 가야 하는지 조금 보였달까요. 누군가가 대신 답을 주는 게 아니라, 제 안에서 답이 나왔어요. 이게 진짜 로드맵이구나 느꼈습니다.",
    rating: 4.5,
  },
  {
    id: 3,
    name: "최OO (31세, 마케터)",
    content:
      "일을 하면서 방향을 잃은 느낌이었는데, 왜 이 일을 하는가를 다시 생각하게 됐어요. 가볍게 시작했지만 꽤 진지한 여정이었어요. 오랫동안 찾지 못했던 진로에 대한 방향을 설정했고, 도전할 수 있는 힘도 얻을 수 있었어요. 지속 가능한 나를 만드는 과정 같아요.",
    rating: 4,
  },
  {
    id: 4,
    name: "이OO (25세, 대학생)",
    content:
      "제 감정을 말로 꺼내본 게 오랜만이었어요. 그냥 무기력하다고만 생각했는데, 그 안에 여러 감정이 섞여 있었더라고요. 차근차근 나를 이해하니 마음이 정리됐어요. 혼자서 버티지 않아도 된다는 걸 배웠습니다.",
    rating: 5,
  },
  {
    id: 5,
    name: "박OO (33세, 기획자)",
    content:
      "처음에는 이걸로 뭐가 달라질까 싶었는데, 시간이 지나면서 제 생각이 조금씩 유연해졌어요. 예전엔 정답을 찾으려 했다면, 지금은 과정을 느끼고 있어요. 내 속도를 존중하게 된 게 가장 큰 변화예요. 이게 진짜 성장이라는 생각이 들어요.",
    rating: 4.5,
  },
  {
    id: 6,
    name: "정OO (27세, 간호사)",
    content:
      "늘 사람들 돌보느라 제 마음은 뒷전이었는데, 이번엔 온전히 나에게 집중하는 시간이었어요. 처음엔 낯설었지만 점점 익숙해졌어요. 지금은 제 감정을 놓치지 않게 됐어요. 나를 아는 시간이 이렇게 따뜻할 줄 몰랐어요.",
    rating: 5,
  },
  {
    id: 7,
    name: "장OO (30세, 개발자)",
    content:
      "이 프로그램이 아니었다면 그냥 바쁘게 살며 지나쳤을 거예요. 한 주 한 주, 저 자신을 점검하는 시간이 생겼어요. 이상하게도 삶이 정돈된 기분이에요. 겉모습보다 내면의 방향이 중요하다는 걸 알았어요. 지금은 일보다 나에게 먼저 귀 기울이고 있어요.",
    rating: 4,
  },
  {
    id: 8,
    name: "배OO (23세, 취업준비생)",
    content:
      "불안해서 잠을 못 자던 때가 있었어요. 그런데 나를 돌아보고 나니 마음이 조금씩 놓였어요. 누가 도와주는 게 아니라, 내가 나를 세워주는 느낌이었어요. 할 수 있는 게 있다는 게 큰 위로였어요. 이 시간이 제 인생의 전환점이 될 것 같아요.",
    rating: 5,
  },
  {
    id: 9,
    name: "오OO (28세, 교사)",
    content:
      "학생들에게 늘 자신을 믿으라고 말하지만, 정작 저는 제 자신을 몰랐던 것 같아요. 이 시간을 통해 제 안의 목소리를 들었어요. 그 목소리가 생각보다 따뜻했어요. 이제는 저도 제 이야기를 믿어보려 해요.",
    rating: 4.5,
  },
  {
    id: 10,
    name: "한OO (32세, 프리랜서)",
    content:
      "이건 단순한 프로그램이 아니라 나와의 대화였어요. 멈춰서 숨 고를 틈을 준 시간 같아요. 무엇을 해야 할지가 아니라, 어떤 내가 되고 싶은가를 생각했어요. 그게 저를 많이 바꿔놨습니다. 지금은 예전보다 훨씬 단단하게 느껴져요.",
    rating: 5,
  },
];

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        {/* 섹션 헤더 */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-900 mb-4 tracking-tight">
            후기
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl">
            로드맵을 통해 변화를 경험한 고객들의 이야기
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
            delay: 5000,
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
                <div
                  className={`bg-white border border-gray-200 p-6 sm:p-7 md:p-8 lg:p-10 transition-all duration-500 rounded-[20px] ${
                    isActive
                      ? "opacity-100 scale-100 shadow-lg"
                      : "opacity-60 scale-90"
                  }`}
                >
                  {/* 후기 내용 */}
                  <p className="text-gray-900 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-6 md:mb-8 font-light">
                    {testimonial.content}
                  </p>

                  {/* 작성자 정보 */}
                  <div className="border-t border-gray-200 pt-4 sm:pt-5 md:pt-6">
                    <p className="text-gray-900 font-medium mb-2 text-xs sm:text-sm md:text-base">
                      {testimonial.name}
                    </p>
                    {/* 별점 */}
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, index) => {
                        const starValue = index + 1;
                        const rating = testimonial.rating;

                        if (rating >= starValue) {
                          // 꽉 찬 별
                          return (
                            <svg
                              key={index}
                              className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          );
                        } else if (rating >= starValue - 0.5) {
                          // 반쪽 별
                          return (
                            <div
                              key={index}
                              className="relative w-4 h-4 sm:w-5 sm:h-5"
                            >
                              <svg
                                className="absolute w-4 h-4 sm:w-5 sm:h-5 text-gray-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <div className="absolute overflow-hidden w-1/2 h-full">
                                <svg
                                  className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              </div>
                            </div>
                          );
                        } else {
                          // 빈 별
                          return (
                            <svg
                              key={index}
                              className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          );
                        }
                      })}
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection;
