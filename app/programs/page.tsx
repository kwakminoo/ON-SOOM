"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function ProgramsPage() {
  const [heroCondensed, setHeroCondensed] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(720);
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const programs = [
    {
      title: "Self Roadmap",
      subtitle: "1회 • 80,000원",
      description: "현상 인지와 단기 목표 설정을 중심으로 진행합니다.",
      href: "/programs/apply",
      color: "#262627",
      hoverColor: "#3d58ac",
      highlight: "자기 인식",
      image:
        "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=300&fit=crop",
    },
    {
      title: "Self-growth Roadmap",
      subtitle: "5회 패키지 • 400,000원",
      description:
        "목표를 명확히 인식하도록 돕는 로드맵.\n 다양한 자기 인지를 목표로 진행됩니다.\n\n자신의 사고, 감정, 행동 양식을 인식하고 메타적 시각에서 자아를 탐색하는 과정",
      href: "/programs/apply",
      color: "#262627",
      hoverColor: "#3d58ac",
      highlight: "성장",
      image:
        "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=400&h=300&fit=crop",
    },
    {
      title: "Life Roadmap",
      subtitle: "8회 패키지 • 650,000원",
      description:
        "미래의 방향성을 함께 설계하기 위한 성장형 로드맵.\n\n자아의 감정과 한계를 통합적으로 인정하며 심리적 안정과 자기존중을 향상하는 과정",
      href: "/programs/apply",
      color: "#262627",
      hoverColor: "#3d58ac",
      highlight: "설계",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
    },
    {
      title: "Life-growth Roadmap",
      subtitle: "1년 과정 • 3,000,000원",
      description:
        "청년층 대상 장기 성장 프로젝트. 코칭+과제+팔로업 시스템을 결합해 지속적 자기 확장을 지원합니다.\n\n인지와 수용을 토대로 자기개입과 행동 변화를 통해 새로운 성장 패턴을 구축하는 과정",
      href: "/programs/apply",
      color: "#262627",
      hoverColor: "#3d58ac",
      highlight: "장기 프로젝트",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=300&fit=crop",
    },
    {
      title: "Workshop Roadmap",
      subtitle: "그룹 세션 1회 • 40,000원",
      description:
        "1. 사고의 표현력\n\n복잡한 개념을 이해하고 명확하게 표현하는 사고 훈련 과정입니다.\n\n논리적 사고와 창의적 문제 해결력을 함께 키울 수 있습니다.\n\n\n2. 사야의 확장\n\n다양한 관점과 의견을 접하며 사고의 폭을 넓힐 수 있습니다.\n\n자신의 틀을 벗어나 새로운 아이디어와 시선을 얻게 됩니다.\n\n\n3. 창의적 문제 해결\n\n단순한 답을 찾는 과정을 넘어 복잡한 문제에 대한 통찰을 길러줍니다.\n\n이를 통해 차별화된 해법을 탐색하고 창의적 아이디어를 구현할 수 있습니다.",
      href: "/programs/apply",
      color: "#262627",
      hoverColor: "#3d58ac",
      highlight: "그룹 성장",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=300&fit=crop",
    },
  ];

  useEffect(() => {
    const syncViewport = () => {
      setViewportHeight(window.innerHeight);
    };
    syncViewport();
    window.addEventListener("resize", syncViewport);

    const handleScroll = () => {
      const threshold = window.innerHeight * 0.24;
      setHeroCondensed(window.scrollY > threshold);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Intersection Observer로 섹션 가시성 감지 (페이드인/아웃 효과용)
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // 섹션이 20% 이상 보일 때 감지
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const sectionIndex = parseInt(entry.target.getAttribute("data-section-index") || "0");
        
        if (entry.isIntersecting) {
          // 섹션이 화면에 들어오면 페이드인
          setVisibleSections((prev) => new Set(prev).add(sectionIndex));
        } else {
          // 섹션이 화면에서 나가면 페이드아웃
          setVisibleSections((prev) => {
            const newSet = new Set(prev);
            newSet.delete(sectionIndex);
            return newSet;
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // 모든 섹션 관찰 시작
    const observeSections = () => {
      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          ref.setAttribute("data-section-index", index.toString());
          observer.observe(ref);
        }
      });
    };

    // 약간의 지연 후 관찰 시작 (렌더링 완료 후)
    const timeoutId = setTimeout(observeSections, 100);

    return () => {
      window.removeEventListener("resize", syncViewport);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  const heroContainerClasses = [
    "relative isolate overflow-hidden bg-slate-950 transition-[padding] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
    "-mt-16 sm:-mt-20 lg:-mt-10",
    heroCondensed ? "py-10 sm:py-12" : "py-32 sm:py-40",
  ].join(" ");

  const heroHeight = heroCondensed
    ? Math.max(Math.min(viewportHeight * 0.22, 300), 220)
    : Math.min(viewportHeight, 760);

  const heroBackgroundClasses = [
    "absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
    heroCondensed ? "scale-[1.02]" : "scale-[1.08]",
  ].join(" ");

  const heroContentClasses = [
    "relative mx-auto flex w-full max-w-6xl flex-col items-center text-center px-6 sm:px-8 lg:px-12 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
    heroCondensed
      ? "gap-5 rounded-3xl border border-white/15 bg-black/45 px-6 sm:px-10 py-10 backdrop-blur-md shadow-[0_35px_120px_-45px_rgba(15,23,42,0.85)]"
      : "gap-10 py-24",
  ].join(" ");

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* 히어로 영역 */}
      <section
        className={heroContainerClasses}
        style={{
          minHeight: heroHeight,
        }}
      >
        <div aria-hidden className="absolute inset-0">
          <div
            className={heroBackgroundClasses}
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2000&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950 transition-opacity duration-700 ease-out" />
        </div>

        <div className={heroContentClasses}>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-white/80">
            Program Suite
          </span>
          <h1 className="mt-8 text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
            숨을 따라 설계하는
            <span className="block mt-3 text-toss-200">온ː숨 성장 로드맵</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            지금의 위치와 다음 단계에 맞춰 선택할 수 있는 프로그램 컬렉션.
            <br />
            한 사람의 호흡에 맞춘 코칭, 워크숍, 장기 성장 플랜까지 모두 한 곳에서
            안내해 드립니다.
          </p>
        </div>
      </section>

      {/* 로드맵 프로그램 소개 */}
      <section
        ref={(el) => {
          sectionRefs.current[0] = el;
        }}
        className="relative flex items-center justify-center px-4 bg-slate-950 text-white"
        style={{
          minHeight: viewportHeight || "100vh",
        }}
      >
        <div className="max-w-4xl mx-auto w-full">
          <div
            className={`text-center mb-12 sm:mb-16 transition-all duration-700 ease-out ${
              visibleSections.has(0)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-white/70">
              About Roadmap
            </span>
            <h2 className="mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white">
              로드맵 프로그램이란?
            </h2>
          </div>
          <div
            className={`space-y-8 sm:space-y-10 text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed max-w-4xl mx-auto text-center transition-all duration-700 ease-out delay-200 ${
              visibleSections.has(0)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p>
              해당 프로그램은 단순히 학업, 취업을 목적으로 하는 삶의 의무에서 벗어나서,
              <br className="hidden sm:block" />
              <span className="font-medium text-white/90">
                {' '}'나 자신을 기준으로 인생을 어떻게 살고 싶은가'에 대한 방향을 그립니다.
              </span>
            </p>
            <p className="text-white/70 text-base sm:text-lg md:text-xl lg:text-2xl">
              고등학교 졸업 후, 주입식 교육으로만 부여받은 사회적 기준에서 벗어나
              <br className="hidden sm:block" />
              하나의 객체로 살아가는 것을 목적으로 둡니다.
            </p>
          </div>
        </div>
      </section>

      {/* 프로그램 목록 */}
      {programs.map((program, index) => {
        const isImageLeft = index % 2 === 0; // 짝수 인덱스는 왼쪽, 홀수 인덱스는 오른쪽
        
        return (
          <section
            key={program.title}
            ref={(el) => {
              sectionRefs.current[index + 1] = el;
            }}
            className="relative"
            style={{
              minHeight: viewportHeight || "100vh",
            }}
          >
            {/* 배경 이미지 */}
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={program.image}
                alt={program.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-slate-950/60" />
              {/* 위아래 그라데이션 마스크 - 배경과 자연스럽게 블렌딩 */}
              <div className="absolute top-0 left-0 right-0 h-60 bg-gradient-to-b from-slate-950 via-slate-950/70 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent pointer-events-none" />
              {/* 좌우 그라데이션 마스크 - 더 자연스러운 블렌딩 */}
              <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-slate-950 via-slate-950/50 to-transparent pointer-events-none" />
              <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-slate-950 via-slate-950/50 to-transparent pointer-events-none" />
            </div>

            {/* 콘텐츠 */}
            <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl w-full flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
                {/* 이미지 영역 - 70% */}
                <div
                  className={`relative w-full sm:w-[70%] transition-all duration-700 ease-out ${
                    isImageLeft ? "sm:order-1" : "sm:order-2"
                  } ${
                    visibleSections.has(index + 1)
                      ? "opacity-100 translate-x-0"
                      : isImageLeft
                      ? "opacity-0 -translate-x-8"
                      : "opacity-0 translate-x-8"
                  }`}
                  style={{
                    height: viewportHeight ? viewportHeight * 0.7 : "70vh",
                  }}
                >
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>

                {/* 텍스트 영역 - 30% */}
                <div
                  className={`w-full sm:w-[30%] flex flex-col justify-center transition-all duration-700 ease-out delay-200 ${
                    isImageLeft ? "sm:order-2" : "sm:order-1"
                  } ${
                    visibleSections.has(index + 1)
                      ? "opacity-100 translate-x-0"
                      : isImageLeft
                      ? "opacity-0 translate-x-8"
                      : "opacity-0 -translate-x-8"
                  }`}
                >
                  <div className="text-white">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
                      {program.title}
                    </h3>

                    <div className="inline-flex items-center text-sm sm:text-base md:text-lg font-medium mb-6">
                      <span className="bg-white/20 px-4 py-2 rounded-full">
                        {program.subtitle}
                      </span>
                    </div>

                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed mb-6 whitespace-pre-line">
                      {program.description}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-white/20">
                      <span className="text-sm sm:text-base font-medium text-white/80">
                        {program.highlight}
                      </span>
                      <a
                        href={`${program.href}?program=${encodeURIComponent(program.title)}`}
                        className="text-xl sm:text-2xl text-white/60 hover:text-white/90 hover:translate-x-1 transition-all"
                      >
                        →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* 비교 안내 */}
      <section
        ref={(el) => {
          sectionRefs.current[programs.length + 1] = el;
        }}
        className="relative snap-start bg-slate-950"
        style={{
          minHeight: viewportHeight || "100vh",
        }}
      >
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl w-full">
            <div
              className={`bg-white/5 border border-white/10 p-8 rounded-2xl shadow-lg transition-all duration-700 ease-out ${
                visibleSections.has(programs.length + 1)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
            <h3 className="text-xl font-semibold text-white mb-6 text-center">
              어떤 프로그램이 나에게 맞을까요?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="text-3xl mb-2">💭</div>
                <h4 className="font-medium text-white mb-2">처음 시작하는 분</h4>
                <p className="text-sm text-white/70">Self Roadmap 추천</p>
              </div>

              <div className="text-center p-4">
                <div className="text-3xl mb-2">🎯</div>
                <h4 className="font-medium text-white mb-2">
                  구체적 변화가 필요한 분
                </h4>
                <p className="text-sm text-white/70">
                  Self-growth / Life Roadmap 추천
                </p>
              </div>

              <div className="text-center p-4">
                <div className="text-3xl mb-2">✨</div>
                <h4 className="font-medium text-white mb-2">
                  장기적 성장을 원하는 분
                </h4>
                <p className="text-sm text-white/70">Life-growth Roadmap 추천</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
