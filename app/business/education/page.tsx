"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type NarrativeDirection = "image-right" | "image-left";

type NarrativeContent = {
  direction: NarrativeDirection;
  title: string;
  description: string;
  highlight: string;
  imageSrc: string;
  imageAlt: string;
};

function NarrativeRow({
  direction,
  title,
  description,
  highlight,
  imageSrc,
  imageAlt,
}: NarrativeContent) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.28 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const isImageRight = direction === "image-right";

  return (
    <div
      ref={containerRef}
      className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center"
    >
      <div
        className={[
          "relative h-64 sm:h-72 lg:h-80 rounded-3xl overflow-hidden border border-white/10",
          "transition-all duration-700 ease-out",
          isVisible
            ? "opacity-100 translate-x-0"
            : isImageRight
            ? "opacity-0 translate-x-16"
            : "opacity-0 -translate-x-16",
          isImageRight ? "lg:order-2" : "lg:order-1",
        ].join(" ")}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${imageSrc}')`,
          }}
          role="img"
          aria-label={imageAlt}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/10 to-transparent" />
        <span className="absolute inset-x-0 bottom-0 bg-black/50 px-6 py-4 text-sm sm:text-base font-semibold tracking-wide text-white/90">
          {highlight}
        </span>
      </div>

      <div
        className={[
          "space-y-4 sm:space-y-6 text-white/80 leading-relaxed",
          "transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          isImageRight ? "lg:order-1" : "lg:order-2",
        ].join(" ")}
      >
        <h3 className="text-2xl sm:text-3xl font-semibold text-white">{title}</h3>
        <p className="text-base sm:text-lg">{description}</p>
      </div>
    </div>
  );
}

export default function EducationPage() {
  const [heroCondensed, setHeroCondensed] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(720);

  const narratives: NarrativeContent[] = [
    {
      direction: "image-right",
      title: "청년의 숨을 깨우는 진로 여정",
      description:
        "학생들이 스스로의 가능성을 발견할 수 있도록 진로 탐색을 돕습니다. 내면의 동기를 세밀히 탐색하고, 진짜 원하는 삶을 설계하도록 함께 걸어갑니다.",
      highlight: "Journey Studio",
      imageSrc:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
      imageAlt: "길 위에서 새로운 방향을 찾는 청년의 뒷모습",
    },
    {
      direction: "image-left",
      title: "관계와 소통으로 이어지는 성장",
      description:
        "또래와 교사, 학부모와의 관계 속에서 정서적 안전감을 확보하도록 돕습니다. 서로를 이해하는 대화법과 감정 표현 훈련으로 학교 문화에 숨을 불어넣습니다.",
      highlight: "Dialogue Lab",
      imageSrc:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
      imageAlt: "원탁에서 활발히 토론 중인 학생들과 교사",
    },
    {
      direction: "image-right",
      title: "지속 가능한 학습 생태계 구축",
      description:
        "프로그램 이후에도 학생들이 성장을 이어갈 수 있도록 커리큘럼과 멘토링 시스템을 설계합니다. 학교 현장에 맞춘 실천 전략으로 숨쉬는 학습 공동체를 만듭니다.",
      highlight: "Growth Lab",
      imageSrc:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80",
      imageAlt: "울창한 숲 사이로 햇빛이 비치는 산책길",
    },
  ];

  useEffect(() => {
    const syncViewportHeight = () => {
      setViewportHeight(window.innerHeight);
    };
    syncViewportHeight();
    window.addEventListener("resize", syncViewportHeight);

    const handleScroll = () => {
      const threshold = window.innerHeight * 0.24;
      const shouldCondense = window.scrollY > threshold;
      setHeroCondensed(shouldCondense);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", syncViewportHeight);
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

  const narrativeIntroClasses = [
    "text-center space-y-4 sm:space-y-5 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
    heroCondensed ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-sm translate-y-6",
  ].join(" ");

  return (
    <div className="min-h-screen bg-slate-950 pb-12 sm:pb-20 pt-16 sm:pt-20 text-white">
      {/* 히어로 섹션 */}
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
                "url('https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1600&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/65 to-black/85 transition-opacity duration-700 ease-out" />
          <div className="absolute inset-0 bg-gradient-to-tr from-green-700/20 via-transparent to-slate-900/70 transition-opacity duration-700 ease-out" />
        </div>
        <div className={heroContentClasses}>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase">
            Youth Growth Coaching
          </span>
          <h1 className="mt-8 text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            한 세대의 숨에서 시작되는
            <span className="block text-emerald-200 mt-4">교육 생태계 혁신</span>
          </h1>
          <p className="mt-8 text-base sm:text-lg md:text-xl leading-relaxed text-white/90 max-w-3xl mx-auto">
            온ː숨의 교육기관 파트너십은 진로 탐색, 관계 회복, 정서적 성장까지 이어지는 여정을 설계합니다.
            학생 한 명 한 명이 숨쉬는 속도로 성장할 수 있도록 교육 현장을 함께 디자인합니다.
          </p>
          <div className="mt-12 flex items-center justify-center gap-3 text-white/60 text-xs sm:text-sm tracking-[0.4em] uppercase">
            <span className="h-px w-12 sm:w-16 bg-white/30" />
            Scroll to Explore
            <span className="h-px w-12 sm:w-16 bg-white/30" />
          </div>
        </div>
      </section>

      {/* 메인 설명 & 이미지 애니메이션 */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-slate-950">
        <div className="max-w-5xl mx-auto space-y-16 sm:space-y-20">
          <div className={narrativeIntroClasses}>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs sm:text-sm font-semibold tracking-wide text-white/70">
              BREATHING EDUCATION JOURNEY
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
              숨을 따라 흐르는 교육 경험 설계
            </h2>
            <p className="text-white/70 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              진로, 관계, 지속 성장을 잇는 온ː숨의 교육 프로그램은 학생의 숨결에 맞춰
              설계됩니다. 다음 여정에서 변화의 순간을 만나보세요.
            </p>
          </div>

          {narratives.map((narrative) => (
            <NarrativeRow key={narrative.title} {...narrative} />
          ))}
        </div>
      </section>

      {/* 핵심 가치 섹션 */}
      <section className="relative py-16 sm:py-20 px-4 bg-slate-900 text-white">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 opacity-95" />
          <div
            className="absolute inset-y-0 right-0 w-2/3 bg-[url('https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center opacity-10"
            aria-hidden
          />
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-white/70">
              Core Principles
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              온ː숨 교육 파트너십의 세 가지 축
            </h2>
            <p className="text-white/60 text-base sm:text-lg leading-relaxed">
              학생과 교사가 함께 숨 쉬는 교육 환경을 만드는 핵심 요소를 소개합니다.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] px-6 py-8 sm:px-8 sm:py-10 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.12]">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-200">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  내면 탐구
                </h3>
              </div>
              <p className="relative mt-5 text-sm sm:text-base leading-relaxed text-white/70">
                질문과 성찰을 통해 자신을 이해하고, 학습 동기를 스스로 발견하도록 돕습니다.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] px-6 py-8 sm:px-8 sm:py-10 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.12]">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-500/20 text-sky-200">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  자존감 회복
                </h3>
              </div>
              <p className="relative mt-5 text-sm sm:text-base leading-relaxed text-white/70">
                비교와 불안을 넘어, 학생이 자신의 가능성을 신뢰하도록 정서적 회복을 돕습니다.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] px-6 py-8 sm:px-8 sm:py-10 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.12] sm:col-span-2 md:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/20 text-purple-200">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  진로 설계
                </h3>
              </div>
              <p className="relative mt-5 text-sm sm:text-base leading-relaxed text-white/70">
                학생 스스로 자신의 길을 구체적으로 그려볼 수 있도록 맞춤형 진로 설계를 지원합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 프로그램 방법론 섹션 */}
      <section className="py-16 sm:py-20 px-4 bg-slate-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-white/70">
              Program Flow
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
              교육 프로그램 여정
            </h2>
            <p className="text-white/60 text-base sm:text-lg leading-relaxed">
              학교 현장을 기반으로 설계한 4단계 여정을 따라가며 학생과 교사가 함께 성장합니다.
            </p>
          </div>

          <div className="relative mt-14 space-y-10">
            <span className="pointer-events-none absolute left-[32px] top-0 hidden h-full border-l border-white/10 sm:block" />

            <div className="relative grid gap-6 sm:grid-cols-[auto,1fr] items-start rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-9 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.08]">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-500 text-white text-lg font-semibold shadow-lg">
                1
              </div>
              <div className="space-y-3 text-white/75">
                <h3 className="text-xl font-semibold text-white">사전 진단 & 니즈 분석</h3>
                <p className="text-sm sm:text-base leading-relaxed">
                  설문과 인터뷰를 통해 학생들의 현재 숨결을 살피고, 학교 현장의 요구를 구체적으로 파악합니다.
                </p>
                <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.25em] text-white/40">
                  <span className="rounded-full border border-white/10 px-3 py-1">Assessment</span>
                  <span className="rounded-full border border-white/10 px-3 py-1">Insight</span>
                </div>
              </div>
            </div>

            <div className="relative grid gap-6 sm:grid-cols-[auto,1fr] items-start rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-9 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.08]">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-500 text-white text-lg font-semibold shadow-lg">
                2
              </div>
              <div className="space-y-3 text-white/75">
                <h3 className="text-xl font-semibold text-white">성찰형 워크숍</h3>
                <p className="text-sm sm:text-base leading-relaxed">
                  정서와 경험을 탐색하는 워크숍으로 자기 이해의 토대를 다집니다. 본격적인 성장 여정의 시작입니다.
                </p>
                <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.25em] text-white/40">
                  <span className="rounded-full border border-white/10 px-3 py-1">Workshop</span>
                  <span className="rounded-full border border-white/10 px-3 py-1">Reflection</span>
                </div>
              </div>
            </div>

            <div className="relative grid gap-6 sm:grid-cols-[auto,1fr] items-start rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-9 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.08]">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600 text-white text-lg font-semibold shadow-lg">
                3
              </div>
              <div className="space-y-3 text-white/75">
                <h3 className="text-xl font-semibold text-white">멘토링 & 코칭</h3>
                <p className="text-sm sm:text-base leading-relaxed">
                  소그룹 혹은 1:1 코칭으로 학생이 자신의 목표를 구체화하고 실행 전략을 세우도록 돕습니다.
                </p>
                <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.25em] text-white/40">
                  <span className="rounded-full border border-white/10 px-3 py-1">Coaching</span>
                  <span className="rounded-full border border-white/10 px-3 py-1">Mentoring</span>
                </div>
              </div>
            </div>

            <div className="relative grid gap-6 sm:grid-cols-[auto,1fr] items-start rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-9 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.08]">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-slate-500 via-slate-600 to-slate-800 text-white text-lg font-semibold shadow-lg">
                4
              </div>
              <div className="space-y-3 text-white/75">
                <h3 className="text-xl font-semibold text-white">후속지원 & 커뮤니티</h3>
                <p className="text-sm sm:text-base leading-relaxed">
                  프로그램 이후에도 성장을 이어갈 수 있도록 추적 리포트와 온라인 커뮤니티, 교사 연계 세션을 제공합니다.
                </p>
                <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.25em] text-white/40">
                  <span className="rounded-full border border-white/10 px-3 py-1">Follow-up</span>
                  <span className="rounded-full border border-white/10 px-3 py-1">Community</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="px-4 py-16 sm:py-20">
        <div className="relative max-w-5xl mx-auto overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950">
          <div aria-hidden className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black opacity-95" />
            <div
              className="absolute -right-24 top-1/2 h-[160%] w-[160%] origin-center -translate-y-1/2 rotate-12 bg-[url('https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center opacity-10"
              aria-hidden
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(2,6,23,0)_0%,_rgba(2,6,23,0.8)_100%)]" />
          </div>
          <div className="relative px-6 py-14 sm:px-12 sm:py-16 text-center text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-white/70">
              Partnership
            </span>
            <h2 className="mt-6 text-3xl md:text-4xl font-semibold leading-tight">
              숨 쉬는 교육 생태계를 함께 설계하고 싶으신가요?
            </h2>
            <p className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed max-w-3xl mx-auto">
              교육기관 맞춤형 프로그램과 컨설팅이 필요하다면, 온ː숨과 함께 학생들의 성장을 지원하는 여정을 시작해보세요.
            </p>
            <Link
              href="/consult"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-white text-slate-900 px-8 py-3 text-lg font-bold tracking-tight transition-all duration-300 hover:bg-emerald-100 hover:-translate-y-0.5 hover:shadow-xl"
            >
              파트너십 문의하기
              <span className="text-2xl leading-none">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
