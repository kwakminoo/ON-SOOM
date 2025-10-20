"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const programs = [
  {
    id: 1,
    title: "개인 심리상담",
    description: "우울, 불안, 스트레스 등 개인의 심리적 어려움 해결",
    ageGroup: "2030 세대",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "커플 상담",
    description: "연애, 결혼 준비, 갈등 해결 등 관계 개선 상담",
    ageGroup: "전연령",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "직장인 상담",
    description: "업무 스트레스, 번아웃, 대인관계 문제 해결",
    ageGroup: "2030 세대",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    title: "온라인 상담",
    description: "시간과 장소에 구애받지 않는 비대면 상담",
    ageGroup: "전연령",
    image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    title: "심리검사",
    description: "성격, 정서, 지능 등 다양한 심리검사 제공",
    ageGroup: "전연령",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    title: "진로 상담",
    description: "취업, 이직, 커리어 개발 등 진로 고민 해결",
    ageGroup: "2030 세대",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=300&fit=crop",
  },
];

const ProgramSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<Array<typeof programs[0] & { uniqueId: string }>>(() => {
    // 초기에 충분한 카드 생성 (18개)
    const initial: Array<typeof programs[0] & { uniqueId: string }> = [];
    for (let i = 0; i < 3; i++) {
      programs.forEach((program, idx) => {
        initial.push({ ...program, uniqueId: `${i}-${idx}` });
      });
    }
    return initial;
  });

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId: number;
    let position = 0;
    const speed = 0.5; // 픽셀/프레임

    const animate = () => {
      position += speed;
      
      if (container) {
        container.style.transform = `translateX(-${position}px)`;

        // 카드 하나의 너비 (320px + 24px margin)
        const cardWidth = 344;
        const totalWidth = cardWidth * programs.length;

        // 6개 카드를 지나갔으면 위치 리셋하고 카드 재배치
        if (position >= totalWidth) {
          position = 0;
          container.style.transform = `translateX(0)`;
          
          // 카드 재배치 (처음 6개 제거, 뒤에 6개 추가)
          setItems((prev) => {
            const newItems = [...prev.slice(6)];
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
    <section id="programs" className="py-16 md:py-24 bg-gradient-to-b from-white to-toss-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        {/* 섹션 헤더 */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-3 sm:mb-4 tracking-tight">
            프로그램
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl">
            2030 세대를 위한 맞춤 상담 프로그램
          </p>
        </div>
      </div>

      {/* 무한 스크롤 컨테이너 */}
      <div className="relative overflow-hidden">
        <div ref={scrollRef} className="flex" style={{ transition: 'none' }}>
          {items.map((program) => (
            <div
              key={program.uniqueId}
              className="flex-shrink-0 w-[260px] sm:w-[280px] md:w-72 lg:w-80 mx-2 sm:mx-3 md:mx-4"
            >
              <div className="bg-white overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                {/* 이미지 */}
                <div className="relative h-48 sm:h-52 md:h-56 lg:h-64 overflow-hidden bg-gray-200">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* 컨텐츠 */}
                <div className="p-5 sm:p-6 md:p-7 lg:p-8">
                  <span className="text-[10px] sm:text-xs font-medium text-gray-400 uppercase tracking-widest mb-2 sm:mb-3 block">
                    {program.ageGroup}
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-light text-gray-900 mb-2 sm:mb-3">
                    {program.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;

