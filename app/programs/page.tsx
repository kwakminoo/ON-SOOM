"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ProgramsPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [heroCondensed, setHeroCondensed] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(720);
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
        "목표를 명확히 인식하도록 돕는 로드맵.\n 다양한 자기 인지를 목표로 진행됩니다.",
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
      description: "미래의 방향성을 함께 설계하기 위한 성장형 로드맵.",
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
        "청년층 대상 장기 성장 프로젝트. 코칭+과제+팔로업 시스템을 결합해 지속적 자기 확장을 지원합니다.",
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
        "4~6인이 함께 참여해 '내면 대화'와 '관계 안에서의 나'를 탐색하는 집단 성장형 워크숍입니다.",
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

    return () => {
      window.removeEventListener("resize", syncViewport);
      window.removeEventListener("scroll", handleScroll);
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
            한 사람의 호흡에 맞춘 코칭, 워크숍, 장기 성장 플랜까지 모두 한 곳에서
            안내해 드립니다.
          </p>
        </div>
      </section>

      {/* 프로그램 목록 */}
      <section className="relative -mt-12 rounded-t-[3rem] bg-gradient-to-b from-white via-white to-gray-50 px-4 pb-16 pt-16 text-gray-900 shadow-[0_-30px_60px_-50px_rgba(15,23,42,0.6)] sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm md:text-base font-semibold tracking-[0.28em] uppercase text-gray-500">
              Choose Your Path
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-gray-900">
              당신의 성장 여정을 위한 네 가지 로드맵
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              세션 수, 목표, 기간에 따라 설계된 프로그램을 비교해보고 지금 가장
              필요한 여정을 선택하세요.
            </p>
          </div>

          {/* 프로그램 카드 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-16">
            {programs.map((program, index) => (
              <a
                key={program.title}
                href={`${program.href}?program=${encodeURIComponent(program.title)}`}
                className={`relative overflow-hidden rounded-2xl hover:shadow-2xl transition-all duration-300 group border border-gray-100 ${
                  index < 2 ? "lg:col-span-3 lg:col-start-auto" : "lg:col-span-2"
                }`}
                onMouseEnter={() => setHoveredId(program.title)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="absolute inset-0">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0 transition-all duration-300"
                    style={{
                      backgroundColor:
                        hoveredId === program.title ? program.hoverColor : program.color,
                      opacity: hoveredId === program.title ? 0.9 : 0.82,
                    }}
                  />
                </div>

                <div className="relative z-10 p-8 flex flex-col justify-between h-full min-h-[350px] text-white">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 transition-colors">
                      {program.title}
                    </h3>

                    <div className="inline-flex items-center text-sm font-medium mb-4">
                      <span className="bg-white/20 px-3 py-1 rounded-full">
                        {program.subtitle}
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-white/90 leading-relaxed mb-4 whitespace-pre-line">
                      {program.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-white/20">
                      <span className="text-xs font-medium text-white/80">
                        {program.highlight}
                      </span>
                      <span className="text-white/60 group-hover:text-white/90 group-hover:translate-x-1 transition-all">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* 비교 안내 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              어떤 프로그램이 나에게 맞을까요?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="text-3xl mb-2">💭</div>
                <h4 className="font-medium text-gray-900 mb-2">처음 시작하는 분</h4>
                <p className="text-sm text-gray-600">Self Roadmap 추천</p>
              </div>

              <div className="text-center p-4">
                <div className="text-3xl mb-2">🎯</div>
                <h4 className="font-medium text-gray-900 mb-2">
                  구체적 변화가 필요한 분
                </h4>
                <p className="text-sm text-gray-600">
                  Self-growth / Life Roadmap 추천
                </p>
              </div>

              <div className="text-center p-4">
                <div className="text-3xl mb-2">✨</div>
                <h4 className="font-medium text-gray-900 mb-2">
                  장기적 성장을 원하는 분
                </h4>
                <p className="text-sm text-gray-600">Life-growth Roadmap 추천</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
