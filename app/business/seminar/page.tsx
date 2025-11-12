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
        <div className="absolute inset-0 bg-gradient-to-br from-black/45 via-black/15 to-transparent" />
        <span className="absolute inset-x-0 bottom-0 bg-black/55 px-6 py-4 text-sm sm:text-base font-semibold tracking-wide text-white/90">
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

export default function SeminarPage() {
  const [heroCondensed, setHeroCondensed] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(720);
 
 const narratives: NarrativeContent[] = [
 {
 direction: "image-right",
 title: "숨을 틔우는 키노트",
 description:
 "리더십, 정서 회복, 변화의 기술을 다루는 온ː숨의 키노트 강연은 단순한 인사이트 전달을 넘어 자기 안으로 숨을 들이키게 합니다.",
 highlight: "Keynote Session",
 imageSrc:
 "https://images.unsplash.com/photo-1518608821971-0b6b1f2f9368?auto=format&fit=crop&w=1400&q=80",
 imageAlt: "무대에서 강연하는 연사와 청중",
 },
 {
 direction: "image-left",
 title: "대화와 공감의 세미나",
 description:
 "참여형 세미나는 질문과 대화를 통해 서로의 경험을 공명시키며, 조직과 커뮤니티가 함께 숨 쉬도록 돕습니다.",
 highlight: "Interactive Dialogue",
 imageSrc:
 "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
 imageAlt: "원탁에 모여 토론하는 사람들",
 },
 {
 direction: "image-right",
 title: "생각이 확장되는 무대 경험",
 description:
 "토크콘서트와 라이브 세션은 이야기와 음악, 예술을 결합하여 숨 고르는 감각을 일깨우고 일상에 변화를 가져옵니다.",
 highlight: "Immersive Experience",
 imageSrc:
 "https://images.unsplash.com/photo-1515165562835-c4c378958d58?auto=format&fit=crop&w=1400&q=80",
 imageAlt: "조명이 있는 공연장에서 관객과 무대",
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
 "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80')",
 }}
 />
 <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/65 to-black/85 transition-opacity duration-700 ease-out" />
 <div className="absolute inset-0 bg-gradient-to-tr from-purple-700/25 via-transparent to-slate-900/70 transition-opacity duration-700 ease-out" />
 </div>
 <div className={heroContentClasses}>
 <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase">
 Lecture & Seminar Series
 </span>
 <h1 className="mt-8 text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
 숨이 머무는 순간,
 <span className="block text-purple-200 mt-4">생각은 무대로 확장됩니다</span>
 </h1>
 <p className="mt-8 text-base sm:text-lg md:text-xl leading-relaxed text-white/90 max-w-3xl mx-auto">
 온ː숨의 강연 및 세미나는 듣는 시간을 넘어 삶을 다시 호흡하도록 돕습니다.
 관객과 연사가 한 호흡으로 연결되는 무대를 경험해보세요.
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
 IMMERSIVE STORYTELLING
 </span>
 <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
 숨을 따라 펼쳐지는 온ː숨의 무대
 </h2>
 <p className="text-white/70 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
 강연, 세미나, 워크숍까지. 온ː숨은 숨의 리듬으로 설계한 무대로
 관객과 연사를 연결합니다.
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
 className="absolute inset-y-0 right-0 w-2/3 bg-[url('https://images.unsplash.com/photo-1515165562835-c4c378958d58?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center opacity-10"
 aria-hidden
 />
 </div>
 <div className="max-w-6xl mx-auto">
 <div className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-5">
 <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-white/70">
 Signature Elements
 </span>
 <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
 온ː숨 강연을 특별하게 만드는 세 가지
 </h2>
 <p className="text-white/60 text-base sm:text-lg leading-relaxed">
 무대의 공기, 이야기의 깊이, 참여자의 숨까지 섬세하게 디자인합니다.
 </p>
 </div>
 
 <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
 <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] px-6 py-8 sm:px-8 sm:py-10 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.12]">
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
 d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
 />
 </svg>
 </div>
 <h3 className="text-lg sm:text-xl font-semibold text-white">
 몰입형 스토리텔링
 </h3>
 </div>
 <p className="relative mt-5 text-sm sm:text-base leading-relaxed text-white/70">
 이야기, 음악, 영상 등을 결합해 감각적인 몰입 경험을 제공합니다.
 </p>
 </div>
 
 <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] px-6 py-8 sm:px-8 sm:py-10 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.12]">
 <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
 <div className="relative flex items-center gap-4">
 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-200">
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
 d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
 />
 </svg>
 </div>
 <h3 className="text-lg sm:text-xl font-semibold text-white">
 참여 기반 구조
 </h3>
 </div>
 <p className="relative mt-5 text-sm sm:text-base leading-relaxed text-white/70">
 질문, 라이브 폴, 대화 세션으로 관객이 무대의 일부가 되도록 설계합니다.
 </p>
 </div>
 
 <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] px-6 py-8 sm:px-8 sm:py-10 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.12] sm:col-span-2 md:col-span-1">
 <div className="absolute inset-0 bg-gradient-to-br from-pink-500/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
 <div className="relative flex items-center gap-4">
 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-500/20 text-pink-200">
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
 d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
 />
 </svg>
 </div>
 <h3 className="text-lg sm:text-xl font-semibold text-white">
 맞춤형 큐레이션
 </h3>
 </div>
 <p className="relative mt-5 text-sm sm:text-base leading-relaxed text-white/70">
 조직, 커뮤니티, 일반 대중 등 대상에 맞춘 콘텐츠와 연사를 큐레이션합니다.
 </p>
 </div>
 </div>
 </div>
 </section>
 
 {/* 프로그램 구성 섹션 */}
 <section className="py-16 sm:py-20 px-4 bg-slate-950">
 <div className="max-w-5xl mx-auto">
 <div className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-5">
 <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-white/70">
 Experience Flow
 </span>
 <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
 온ː숨 강연·세미나 여정
 </h2>
 <p className="text-white/60 text-base sm:text-lg leading-relaxed">
 기획부터 여운이 남는 사후 케어까지, 참여자가 변화를 체감하는 여정을 함께 설계합니다.
 </p>
 </div>
 
 <div className="relative mt-14 space-y-10">
 <span className="pointer-events-none absolute left-[32px] top-0 hidden h-full border-l border-white/10 sm:block" />
 
 <div className="relative grid gap-6 sm:grid-cols-[auto,1fr] items-start rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-9 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.08]">
 <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-500 text-white text-lg font-semibold shadow-lg">
 1
 </div>
 <div className="space-y-3 text-white/75">
 <h3 className="text-xl font-semibold text-white">컨셉 디스커버리</h3>
 <p className="text-sm sm:text-base leading-relaxed">
 대상과 목적, 전달하고 싶은 메시지를 함께 정의하며 강연 혹은 세미나의 컨셉을 설계합니다.
 </p>
 <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.25em] text-white/40">
 <span className="rounded-full border border-white/10 px-3 py-1">Discovery</span>
 <span className="rounded-full border border-white/10 px-3 py-1">Curation</span>
 </div>
 </div>
 </div>
 
 <div className="relative grid gap-6 sm:grid-cols-[auto,1fr] items-start rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-9 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.08]">
 <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 via-blue-500 to-slate-500 text-white text-lg font-semibold shadow-lg">
 2
 </div>
 <div className="space-y-3 text-white/75">
 <h3 className="text-xl font-semibold text-white">무대 & 경험 디자인</h3>
 <p className="text-sm sm:text-base leading-relaxed">
 스토리 라인, 시각·청각적 요소, 참여 장치를 구성하여 몰입감 있는 경험을 만듭니다.
 </p>
 <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.25em] text-white/40">
 <span className="rounded-full border border-white/10 px-3 py-1">Design</span>
 <span className="rounded-full border border-white/10 px-3 py-1">Experience</span>
 </div>
 </div>
 </div>
 
 <div className="relative grid gap-6 sm:grid-cols-[auto,1fr] items-start rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-9 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.08]">
 <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-rose-500 to-amber-500 text-white text-lg font-semibold shadow-lg">
 3
 </div>
 <div className="space-y-3 text-white/75">
 <h3 className="text-xl font-semibold text-white">라이브 퍼포먼스</h3>
 <p className="text-sm sm:text-base leading-relaxed">
 연사와 코치가 함께 무대를 이끌며, 관객과 상호작용을 통해 숨을 나누는 시간으로 완성합니다.
 </p>
 <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.25em] text-white/40">
 <span className="rounded-full border border-white/10 px-3 py-1">Performance</span>
 <span className="rounded-full border border-white/10 px-3 py-1">Interaction</span>
 </div>
 </div>
 </div>
 
 <div className="relative grid gap-6 sm:grid-cols-[auto,1fr] items-start rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-9 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.08]">
 <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-slate-500 via-slate-600 to-slate-800 text-white text-lg font-semibold shadow-lg">
 4
 </div>
 <div className="space-y-3 text-white/75">
 <h3 className="text-xl font-semibold text-white">사후 케어</h3>
 <p className="text-sm sm:text-base leading-relaxed">
 강연 후 참여자의 변화를 지속적으로 모니터링하고 지원하며, 온ː숨의 무대 밖에서도 지속적인 변화를 이끌어냅니다.
 </p>
 <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.25em] text-white/40">
 <span className="rounded-full border border-white/10 px-3 py-1">Post-Care</span>
 <span className="rounded-full border border-white/10 px-3 py-1">Support</span>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>
 
{/* 대상 섹션 */}
<section className="relative py-16 sm:py-20 px-4 bg-slate-900 text-white">
  <div aria-hidden className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 opacity-95" />
    <div
      className="absolute inset-y-0 left-0 w-2/3 bg-[url('https://images.unsplash.com/photo-1503424886307-b090341d25d1?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center opacity-10"
      aria-hidden
    />
  </div>
  <div className="max-w-5xl mx-auto space-y-10">
    <div className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-5">
      <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-white/70">
        Audience Spectrum
      </span>
      <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
        이런 파트너와 숨을 나눕니다
      </h2>
      <p className="text-white/60 text-base sm:text-lg leading-relaxed">
        강연의 목적과 현장에 맞춰 콘텐츠와 연사를 큐레이션해 맞춤형 경험을 제공합니다.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.12]">
        <div className="text-4xl mb-4">🏢</div>
        <h3 className="text-lg font-semibold text-white mb-2">기업 및 조직</h3>
        <p className="text-white/70 text-sm leading-relaxed">
          온보딩, 리더십, 조직문화 강연과 임직원 대상 세미나
        </p>
      </div>

      <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.12]">
        <div className="text-4xl mb-4">🎓</div>
        <h3 className="text-lg font-semibold text-white mb-2">학교 및 교육기관</h3>
        <p className="text-white/70 text-sm leading-relaxed">
          학생·교직원 대상 진로, 정서, 관계 특강과 성찰 세션
        </p>
      </div>

      <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.12]">
        <div className="text-4xl mb-4">🌐</div>
        <h3 className="text-lg font-semibold text-white mb-2">공공 & 커뮤니티</h3>
        <p className="text-white/70 text-sm leading-relaxed">
          지자체, 시민단체, 커뮤니티를 위한 공개 세미나와 토크 콘서트
        </p>
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
        className="absolute -right-24 top-1/2 h-[160%] w-[160%] origin-center -translate-y-1/2 rotate-12 bg-[url('https://images.unsplash.com/photo-1518608821971-0b6b1f2f9368?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center opacity-10"
        aria-hidden
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(2,6,23,0)_0%,_rgba(2,6,23,0.8)_100%)]" />
    </div>
    <div className="relative px-6 py-14 sm:px-12 sm:py-16 text-center text-white">
      <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-white/70">
        Invitation
      </span>
      <h2 className="mt-6 text-3xl md:text-4xl font-semibold leading-tight">
        숨을 나누는 무대를 함께 만들고 싶으신가요?
      </h2>
      <p className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed max-w-3xl mx-auto">
        온ː숨이 맞춤형 콘텐츠와 연사 큐레이션으로 강연, 세미나, 토크 콘서트까지
        기억에 남는 순간을 설계해드립니다. 이야기의 다음 장을 함께 써보세요.
      </p>
      <Link
        href="/consult"
        className="mt-10 inline-flex items-center gap-3 rounded-full bg-white text-slate-900 px-8 py-3 text-lg font-bold tracking-tight transition-all duration-300 hover:bg-purple-100 hover:-translate-y-0.5 hover:shadow-xl"
      >
        강연 문의하기
        <span className="text-2xl leading-none">↗</span>
      </Link>
    </div>
  </div>
</section>
 </div>
 );
 }


