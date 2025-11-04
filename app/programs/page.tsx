"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProgramsPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
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
      featured: true,
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 제목 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            프로그램 안내
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            당신의 성장 단계에 맞는 로드맵을 선택하세요
          </p>
        </div>

        {/* 프로그램 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {programs.map((program) => (
            <a
              key={program.title}
              href={`${program.href}?program=${encodeURIComponent(
                program.title
              )}`}
              className={`relative overflow-hidden rounded-2xl hover:shadow-xl transition-all duration-300 group border border-gray-100 ${
                program.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              onMouseEnter={() => setHoveredId(program.title)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {program.featured && (
                <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-medium px-3 py-1 rounded-full z-10">
                  추천
                </div>
              )}

              {/* 배경 이미지 */}
              <div className="absolute inset-0">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
                {/* 색상 오버레이 - 호버 시 더 진하게 */}
                <div
                  className="absolute inset-0 transition-all duration-300"
                  style={{
                    backgroundColor:
                      hoveredId === program.title
                        ? program.hoverColor
                        : program.color,
                    opacity: hoveredId === program.title ? 0.95 : 0.85,
                  }}
                />
              </div>

              {/* 컨텐츠 */}
              <div className="relative z-10 p-8 flex flex-col justify-between h-full min-h-[350px]">
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-2 transition-colors">
                    {program.title}
                  </h2>

                  <div className="inline-flex items-center text-sm font-medium text-white mb-4">
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
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            어떤 프로그램이 나에게 맞을까요?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="text-3xl mb-2">💭</div>
              <h4 className="font-medium text-gray-900 mb-2">
                처음 시작하는 분
              </h4>
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
    </div>
  );
}
