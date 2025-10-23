"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    id: 1,
    title: "성장 로드맵",
    description:
      "진로·관계·자기 방향성을 함께 설계하는 성장형 로드맵. 매주 피드백과 과제 제공.",
    color: "#262627",
    hoverColor: "#3d58ac",
    textColor: "text-white",
    href: "/programs",
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "통합 성장 로드맵",
    description:
      "청년층 대상의 장기 성장 프로젝트. 코칭+과제+팔로업 시스템을 결합해 '지속적 자기 확장'을 지원.",
    color: "#262627",
    hoverColor: "#3d58ac",
    textColor: "text-white",
    href: "/programs",
    image:
      "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "라이프 로드맵",
    description:
      "번아웃, 무기력, 자존감 회복을 위한 장기 로드맵. 감정일기, 리프레임 훈련 포함.",
    color: "#262627",
    hoverColor: "#3d58ac",
    textColor: "text-white",
    href: "/programs",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    title: "워크샵 로드맵",
    description:
      "4~6인이 함께 참여해 '내면 대화'와 '관계 안에서의 나'를 탐색하는 집단 성장형 워크숍.",
    color: "#262627",
    hoverColor: "#3d58ac",
    textColor: "text-white",
    href: "/programs",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=300&fit=crop",
  },
];

const ProgramSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<
    Array<(typeof programs)[0] & { uniqueId: string }>
  >(() => {
    const initial: Array<(typeof programs)[0] & { uniqueId: string }> = [];
    for (let i = 0; i < 3; i++) {
      programs.forEach((program, idx) => {
        initial.push({ ...program, uniqueId: `${i}-${idx}` });
      });
    }
    return initial;
  });
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId: number;
    let position = 0;
    const speed = 0.5;

    const animate = () => {
      position += speed;

      if (container) {
        container.style.transform = `translateX(-${position}px)`;

        const cardWidth = 344;
        const totalWidth = cardWidth * programs.length;

        if (position >= totalWidth) {
          position = 0;
          container.style.transform = `translateX(0)`;

          setItems((prev) => {
            const newItems = [...prev.slice(4)];
            const newBatch = programs.map((program, idx) => ({
              ...program,
              uniqueId: `${Date.now()}-${idx}`,
            }));
            return [...newItems, ...newBatch];
          });
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <section
      id="programs"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        {/* 섹션 헤더 */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-3 sm:mb-4 tracking-tight">
            로드맵 프로그램
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl">
            당신의 성장 여정을 위한 맞춤형 로드맵
          </p>
        </div>
      </div>

      {/* 무한 스크롤 컨테이너 */}
      <div className="relative overflow-hidden">
        <div ref={scrollRef} className="flex" style={{ transition: "none" }}>
          {items.map((program) => (
            <Link
              key={program.uniqueId}
              className="flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px] lg:w-[340px] mx-2 sm:mx-3 md:mx-4"
              href={program.href}
              onMouseEnter={() => setHoveredId(program.uniqueId)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl h-full"
                style={{
                  backgroundColor:
                    hoveredId === program.uniqueId
                      ? program.hoverColor
                      : program.color,
                }}
              >
                {/* 이미지 */}
                <div className="relative h-48 sm:h-52 md:h-56 lg:h-64 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* 컨텐츠 */}
                <div className="p-6 sm:p-7 md:p-6">
                  <h3
                    className={`text-xl sm:text-2xl md:text-3xl font-semibold ${program.textColor} mb-4`}
                  >
                    {program.title}
                  </h3>
                  <p
                    className={`text-sm ${program.textColor} opacity-90 leading-relaxed`}
                  >
                    {program.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
