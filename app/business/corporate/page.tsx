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
      { threshold: 0.3 }
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
          style={{ backgroundImage: `url('${imageSrc}')` }}
          role="img"
          aria-label={imageAlt}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/20 to-transparent" />
        <span className="absolute inset-x-0 bottom-0 bg-black/45 px-6 py-4 text-sm sm:text-base font-semibold tracking-wide text-white/90">
          {highlight}
        </span>
      </div>

      <div
        className={[
          "space-y-4 sm:space-y-6 text-white/80 leading-relaxed",
          "transition-all duration-700 ease-out",
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4",
          isImageRight ? "lg:order-1" : "lg:order-2",
        ].join(" ")}
      >
        <h3 className="text-2xl sm:text-3xl font-semibold text-white">{title}</h3>
        <p className="text-base sm:text-lg">{description}</p>
      </div>
    </div>
  );
}

export default function CorporatePage() {
  const partnerEmail =
    process.env.NEXT_PUBLIC_PARTNERSHIP_EMAIL ?? "partner@example.com";
  const partnerMailTo = `mailto:${partnerEmail}`;
  const [heroCondensed, setHeroCondensed] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(720);

  const narratives: NarrativeContent[] = [
    {
      direction: "image-right",
      title: "사람의 숨에 귀 기울이는 시작",
      description:
        "온ː숨의 기업 코칭은 조직의 성과 이전에 사람의 회복과 연결을 다룹니다. 구성원이 스스로 동기와 가치를 발견하도록 돕고, 리더가 사람을 이해하는 리더십을 개발하도록 설계합니다.",
      highlight: "Immersive Session",
      imageSrc: "/enterprise4.jpg",
      imageAlt: "기업 워크숍에서 리더들이 토론하고 있는 모습",
    },
    {
      direction: "image-left",
      title: "관계와 소통으로 숨결을 나누다",
      description:
        "팀 간의 관계, 소통, 정서적 안전감 같은 ‘조직의 내면’을 세심하게 돌봅니다. 구성원 모두가 숨 쉬고 안심할 수 있는 토대 위에서 조직은 서로의 다름을 이해하고 성장의 연결고리를 찾습니다.",
      highlight: "Dialogue Lab",
      imageSrc: "/enterprise2.jpg",
      imageAlt: "구성원들이 서로 대화를 나누며 협력하는 장면",
    },
    {
      direction: "image-right",
      title: "지속 가능한 성장 문화의 구축",
      description:
        "온ː숨은 단기적인 퍼포먼스 향상보다 지속 가능한 성장 문화를 만드는 것을 목표로 합니다. 워크숍, 리더십 코칭, 정기 피드백 시스템을 통해 기업이 ‘함께 숨 쉬는 조직’으로 변화할 수 있도록 지원합니다.",
      highlight: "Growth Partnership Studio",
      imageSrc: "/enterprise6.jpg",
      imageAlt: "조직 구성원들이 성장을 축하하는 모습",
    },
  ];

  useEffect(() => {
    const syncViewportHeight = () => {
      setViewportHeight(window.innerHeight);
    };
    syncViewportHeight();
    window.addEventListener("resize", syncViewportHeight);

    const handleScroll = () => {
      const threshold = window.innerHeight * 0.22;
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
    ? Math.max(Math.min(viewportHeight * 0.21, 300), 210)
    : Math.min(viewportHeight, 780);

  const heroBackgroundClasses = [
    "absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
    heroCondensed ? "scale-[1.02]" : "scale-[1.08]",
  ].join(" ");

  const heroContentClasses = [
    "relative mx-auto flex w-full max-w-6xl flex-col items-center text-center px-6 sm:px-8 lg:px-12 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
    heroCondensed
      ? "gap-4 rounded-3xl border border-white/15 bg-black/45 px-6 sm:px-10 py-10 backdrop-blur-md shadow-[0_35px_120px_-45px_rgba(15,23,42,0.85)]"
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
            style={{ backgroundImage: "url('/enterprise1.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/60 to-black/85 transition-opacity duration-700 ease-out" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/40 transition-opacity duration-700 ease-out" />
        </div>
        <div className={heroContentClasses}>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase">
            Corporate Growth Coaching
          </span>
          <h1 className="mt-8 text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            사람의 숨에서 시작되는
            <span className="block text-toss-200 mt-4">지속 가능한 조직 변화</span>
          </h1>
          <p className="mt-8 text-base sm:text-lg md:text-xl leading-relaxed text-white/90 max-w-3xl mx-auto">
            사람 중심의 리더십, 관계 회복, 지속 가능한 조직문화를 만드는 온ː숨의
            기업 성장 코칭 프로그램. 성과보다{" "}
            <span className="font-semibold text-toss-200">성장</span>을 다룹니다.
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
              ORGANIC GROWTH MOMENTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
              숨에서 시작해 성장으로 이어지는 조직 문화 설계
            </h2>
            <p className="text-white/70 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              조직의 숨결이 성장의 에너지로 전환되는 과정을 세밀하게 따라가 보세요.
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
            className="absolute inset-y-0 right-0 w-2/3 bg-[url('/enterprise4.jpg')] bg-cover bg-center opacity-10"
            aria-hidden
          />
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-white/70">
              Core Principles
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              ONː SOOM 기업 코칭의 핵심
            </h2>
            <p className="text-white/60 text-base sm:text-lg leading-relaxed">
              조직이 사람의 숨으로 움직이도록 설계하는 세 가지 축을 통해, 성과보다
              성장에 집중하는 문화를 함께 만들어갑니다.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] px-6 py-8 sm:px-8 sm:py-10 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.1]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 text-blue-200">
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
                  사람 중심 리더십
                </h3>
              </div>
              <p className="relative mt-5 text-sm sm:text-base leading-relaxed text-white/70">
                구성원이 스스로 동기와 가치를 발견하고, 리더가 사람을 이해하는
                리더십을 촘촘히 체화하도록 돕습니다.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] px-6 py-8 sm:px-8 sm:py-10 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.1]">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  관계와 소통
                </h3>
              </div>
              <p className="relative mt-5 text-sm sm:text-base leading-relaxed text-white/70">
                팀 간의 관계, 소통, 정서적 안전감을 다루며, 서로를 이해하는 언어와
                연결 구조를 설계합니다.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] px-6 py-8 sm:px-8 sm:py-10 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.1] sm:col-span-2 md:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
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
                  지속 가능한 성장
                </h3>
              </div>
              <p className="relative mt-5 text-sm sm:text-base leading-relaxed text-white/70">
                단기 성과에 머무르지 않고, 조직이 숨결처럼 성장 에너지를 순환시키는
                시스템을 구축합니다.
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
              프로그램 구성
            </h2>
            <p className="text-white/60 text-base sm:text-lg leading-relaxed">
              워크숍에서 시작해 리더십 코칭, 피드백 시스템까지 이어지는 온ː숨만의
              3단계 여정을 따라가며 조직의 숨결을 정교하게 다듬습니다.
            </p>
          </div>

          <div className="relative mt-14 space-y-10">
            <span className="pointer-events-none absolute left-[32px] top-0 hidden h-full border-l border-white/10 sm:block" />

            <div className="relative grid gap-6 sm:grid-cols-[auto,1fr] items-start rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-9 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.08]">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-500 text-white text-lg font-semibold shadow-lg">
                1
              </div>
              <div className="space-y-3 text-white/75">
                <h3 className="text-xl font-semibold text-white">워크숍</h3>
                <p className="text-sm sm:text-base leading-relaxed">
                  팀 혹은 전사 단위로 진행되는 상호작용형 워크숍을 통해 조직 내면의
                  이슈를 발견하고, 함께 해결 방향을 모색합니다. 실제 사례를 기반으로
                  경험을 재구성합니다.
                </p>
                <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.25em] text-white/40">
                  <span className="rounded-full border border-white/10 px-3 py-1">
                    Diagnostic
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1">
                    Co-Creation
                  </span>
                </div>
              </div>
            </div>

            <div className="relative grid gap-6 sm:grid-cols-[auto,1fr] items-start rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-9 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.08]">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 via-blue-500 to-slate-500 text-white text-lg font-semibold shadow-lg">
                2
              </div>
              <div className="space-y-3 text-white/75">
                <h3 className="text-xl font-semibold text-white">리더십 코칭</h3>
                <p className="text-sm sm:text-base leading-relaxed">
                  리더를 대상으로 1:1 혹은 소그룹 코칭을 진행하여, 사람을 이해하는
                  리더십을 실천할 수 있도록 행동 설계와 실행 피드백을 제공합니다.
                </p>
                <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.25em] text-white/40">
                  <span className="rounded-full border border-white/10 px-3 py-1">
                    Coaching
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1">
                    Embodiment
                  </span>
                </div>
              </div>
            </div>

            <div className="relative grid gap-6 sm:grid-cols-[auto,1fr] items-start rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-9 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.08]">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-slate-500 via-slate-600 to-slate-800 text-white text-lg font-semibold shadow-lg">
                3
              </div>
              <div className="space-y-3 text-white/75">
                <h3 className="text-xl font-semibold text-white">정기 피드백 시스템</h3>
                <p className="text-sm sm:text-base leading-relaxed">
                  프로그램 이후에도 성장이 지속될 수 있도록 피드백과 리플렉션 구조를
                  구축합니다. 숨을 고르고 다시 도약하는 루틴을 설계합니다.
                </p>
                <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.25em] text-white/40">
                  <span className="rounded-full border border-white/10 px-3 py-1">
                    Feedback
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1">
                    Sustainability
                  </span>
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
              className="absolute -right-24 top-1/2 h-[160%] w-[160%] origin-center -translate-y-1/2 rotate-12 bg-[url('/enterprise1.jpg')] bg-cover bg-center opacity-10"
              aria-hidden
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(2,6,23,0)_0%,_rgba(2,6,23,0.8)_100%)]" />
          </div>
          <div className="relative px-6 py-14 sm:px-12 sm:py-16 text-center text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-white/70">
              Partnership
            </span>
            <h2 className="mt-6 text-3xl md:text-4xl font-semibold leading-tight">
              함께 숨 쉬는 조직을 넘어, 성장하는 파트너십으로
            </h2>
            <p className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed max-w-3xl mx-auto">
              온ː숨과의 제휴로 기업 문화의 다음 장을 함께 쓰고 싶다면, 제휴 신청을
              통해 이야기의 시작을 알려주세요. 필요한 내용을 남겨주시면 빠르게
              연락드리겠습니다.
            </p>
            <Link
              href={partnerMailTo}
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-white text-slate-900 px-8 py-3 text-lg font-bold tracking-tight transition-all duration-300 hover:bg-toss-100 hover:-translate-y-0.5 hover:shadow-xl"
            >
              제휴 신청하기
              <span className="text-2xl leading-none">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
