"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    id: 1,
    title: "Self Roadmap",
    highlight: "자기 인식",
    description:
      "목표와 감정을 명확히 인식하도록 돕는 1:1 로드맵. 자기 인식과 감정 정리를 중심으로 진행합니다.",
    color: "#262627",
    hoverColor: "#3d58ac",
    textColor: "text-white",
    href: "/programs",
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=300&fit=crop",
    cardColor: "from-blue-50 to-indigo-50",
  },
  {
    id: 2,
    title: "Self-growth Roadmap",
    highlight: "성장 설계",
    description:
      "진로·관계·자기 방향성을 함께 설계하는 성장형 로드맵. 매주 피드백과 과제를 제공합니다.",
    color: "#262627",
    hoverColor: "#3d58ac",
    textColor: "text-white",
    href: "/programs",
    image:
      "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=400&h=300&fit=crop",
    cardColor: "from-emerald-50 to-teal-50",
  },
  {
    id: 3,
    title: "Life Roadmap",
    highlight: "회복과 치유",
    description:
      "번아웃, 무기력, 자존감 회복을 위한 장기 로드맵. 감정일기와 리프레임 훈련이 포함됩니다.",
    color: "#262627",
    hoverColor: "#3d58ac",
    textColor: "text-white",
    href: "/programs",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
    cardColor: "from-amber-50 to-orange-50",
  },
  {
    id: 4,
    title: "Workshop Roadmap",
    highlight: "그룹 성장",
    description:
      "4~6인이 함께 참여해 '내면 대화'와 '관계 안에서의 나'를 탐색하는 집단 성장형 워크숍입니다.",
    color: "#262627",
    hoverColor: "#3d58ac",
    textColor: "text-white",
    href: "/programs",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=300&fit=crop",
    cardColor: "from-rose-50 to-pink-50",
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
        // Subpixel 렌더링 방지를 위해 정수로 반올림 + GPU 가속을 위해 translate3d 사용
        const roundedPosition = Math.round(position);
        container.style.transform = `translate3d(-${roundedPosition}px, 0, 0)`;

        const cardWidth = 342; // 330px (카드 너비) + 12px (mx-1.5 양쪽)
        const totalWidth = cardWidth * programs.length;

        if (position >= totalWidth) {
          position = 0;
          container.style.transform = `translate3d(0, 0, 0)`;

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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-900 mb-4 tracking-tight">
            로드맵 프로그램
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl">
            당신의 성장 여정을 위한 맞춤형 로드맵
          </p>
        </div>
      </div>

      {/* 무한 스크롤 컨테이너 */}
      <div className="relative overflow-hidden">
        <div 
          ref={scrollRef} 
          className="flex" 
          style={{ 
            transition: "none",
            willChange: "transform",
            backfaceVisibility: "hidden",
            perspective: 1000,
          }}
        >
          {items.map((program) => (
            <Link
              key={program.uniqueId}
              className="flex-shrink-0 w-[330px] mx-1.5"
              href={program.href}
              onMouseEnter={() => setHoveredId(program.uniqueId)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl h-[440px]"
                style={{
                  backgroundColor:
                    hoveredId === program.uniqueId
                      ? program.hoverColor
                      : program.color,
                  backfaceVisibility: "hidden",
                  transform: "translateZ(0)",
                }}
              >
                {/* 이미지 */}
                <div className="relative h-[220px] overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* 컨텐츠 */}
                <div 
                  className={`px-6 pt-5 pb-5 h-[220px] flex flex-col bg-gradient-to-br ${program.cardColor}`}
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "translateZ(0)",
                  }}
                >
                  {/* 작은 텍스트 (12px) */}
                  <p
                    className="text-xs text-gray-600 opacity-70 mb-2"
                    style={{ 
                      fontSize: '12px',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale',
                    }}
                  >
                    {program.highlight}
                  </p>
                  
                  {/* 제목 (26px) */}
                  <h3
                    className="font-semibold text-gray-900 mb-4"
                    style={{ 
                      fontSize: '26px', 
                      lineHeight: '1.4', 
                      letterSpacing: '-0.02em',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale',
                    }}
                  >
                    {program.title}
                  </h3>
                  
                  {/* 공간 확보 */}
                  <div className="flex-grow"></div>
                  
                  {/* 설명 (16px) - 아래 정렬 */}
                  <p
                    className="text-gray-700 opacity-90 leading-relaxed"
                    style={{ 
                      fontSize: '16px', 
                      lineHeight: '1.4', 
                      letterSpacing: '-0.02em',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale',
                    }}
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
