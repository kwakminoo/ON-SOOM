"use client";

import { useState } from "react";
import Image from "next/image";

const centers = [
  {
    id: 1,
    name: "홍대1호점",
    image: "/Seoul.svg",
  },
  {
    id: 2,
    name: "홍대2호점",
    image: "/Seoul.svg",
  },
  {
    id: 3,
    name: "남구로",
    image: "/GooRo.svg",
  },
  {
    id: 4,
    name: "강남",
    image: "/GangNam.svg",
  },
];

const CenterSection = () => {
  const [selectedCenter, setSelectedCenter] = useState(centers[0]);

  return (
    <section id="centers" className="py-16 md:py-24 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        {/* 섹션 헤더 */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-900 tracking-tight">
            온숨의 공간
          </h2>
        </div>

        {/* 좌측 버튼 + 우측 이미지 레이아웃 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* 좌측: 버튼 목록 */}
          <div className="flex flex-col justify-between min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
            {centers.map((center) => (
              <button
                key={center.id}
                onClick={() => setSelectedCenter(center)}
                className={`inline-flex items-center justify-center px-8 py-5 text-xl md:text-2xl lg:text-3xl font-medium transition-all duration-200 rounded-lg border-2 ${
                  selectedCenter.id === center.id
                    ? "bg-gray-900 text-white border-gray-900 shadow-lg"
                    : "bg-white text-gray-700 border-gray-300 hover:border-gray-400 hover:shadow-md"
                }`}
              >
                {center.name}
              </button>
            ))}
          </div>

          {/* 우측: 이미지 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg flex items-center justify-center min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
            <div className="relative w-full h-full aspect-square max-w-full max-h-full p-8">
              <Image
                src={selectedCenter.image}
                alt={selectedCenter.name}
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CenterSection;
