"use client";

import { useState } from "react";
import { MapPin, Phone, Clock } from "lucide-react";

const centers = [
  {
    id: 1,
    name: "홍대 1호",
    address: "서울특별시 마포구 홍익로 000",
    phone: "02-1234-5678",
    hours: "평일 10:00 - 20:00 | 주말 10:00 - 18:00",
    map: "지하철 2호선 홍대입구역 9번 출구 도보 5분",
  },
  {
    id: 2,
    name: "홍대 2호",
    address: "서울특별시 마포구 와우산로 000",
    phone: "02-2345-6789",
    hours: "평일 10:00 - 20:00 | 주말 10:00 - 18:00",
    map: "지하철 2호선 홍대입구역 3번 출구 도보 7분",
  },
  {
    id: 3,
    name: "구로",
    address: "서울특별시 구로구 디지털로 000",
    phone: "02-3456-7890",
    hours: "평일 10:00 - 20:00 | 주말 10:00 - 18:00",
    map: "지하철 2호선 구로디지털단지역 2번 출구 도보 3분",
  },
];

const CenterSection = () => {
  const [selectedCenter, setSelectedCenter] = useState(centers[0]);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        {/* 섹션 헤더 */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-3 sm:mb-4 tracking-tight">
            센터
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl">
            편리한 위치의 센터에서 편안하게 상담받으세요
          </p>
        </div>

        {/* 센터 선택 탭 */}
        <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          {centers.map((center) => (
            <button
              key={center.id}
              onClick={() => setSelectedCenter(center)}
              className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base font-light transition-colors rounded-sm ${
                selectedCenter.id === center.id
                  ? "text-white bg-gray-900"
                  : "text-gray-600 bg-white border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {center.name}
            </button>
          ))}
        </div>

        {/* 선택된 센터 정보 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* 지도 영역 (플레이스홀더) */}
          <div className="bg-gray-200 h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-600">{selectedCenter.name}</p>
              <p className="text-gray-400 text-sm mt-2">
                지도 API 연동 예정
              </p>
            </div>
          </div>

          {/* 센터 상세 정보 */}
          <div className="bg-white p-6 sm:p-7 md:p-8 lg:p-10">
            <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-light text-gray-900 mb-5 sm:mb-6 md:mb-8 lg:mb-10">
              {selectedCenter.name}
            </h3>

            <div className="space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8">
              {/* 주소 */}
              <div className="border-b border-gray-200 pb-6">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">주소</p>
                <p className="text-gray-900">{selectedCenter.address}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {selectedCenter.map}
                </p>
              </div>

              {/* 전화번호 */}
              <div className="border-b border-gray-200 pb-6">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">전화번호</p>
                <a
                  href={`tel:${selectedCenter.phone}`}
                  className="text-gray-900 hover:text-gray-600"
                >
                  {selectedCenter.phone}
                </a>
              </div>

              {/* 운영시간 */}
              <div>
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">운영시간</p>
                <p className="text-gray-900">{selectedCenter.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CenterSection;

