"use client";

import { useState } from "react";
import { MapPin, Phone, Clock } from "lucide-react";

const centers = [
  {
    id: 1,
    name: "강남센터",
    address: "서울시 강남구 테헤란로 123, 4층",
    phone: "02-1234-5678",
    hours: "평일 10:00 - 21:00 | 주말 10:00 - 19:00",
    map: "강남역 도보 3분",
  },
  {
    id: 2,
    name: "홍대센터",
    address: "서울시 마포구 홍익로 456, 3층",
    phone: "02-2345-6789",
    hours: "평일 10:00 - 21:00 | 주말 10:00 - 19:00",
    map: "홍대입구역 도보 5분",
  },
  {
    id: 3,
    name: "강북센터",
    address: "서울시 성북구 동소문로 789, 5층",
    phone: "02-3456-7890",
    hours: "평일 10:00 - 21:00 | 주말 10:00 - 19:00",
    map: "미아사거리역 도보 2분",
  },
  {
    id: 4,
    name: "분당센터",
    address: "경기도 성남시 분당구 판교역로 101, 7층",
    phone: "031-1234-5678",
    hours: "평일 10:00 - 21:00 | 주말 10:00 - 19:00",
    map: "판교역 직결",
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

            {/* CTA 버튼 */}
            <div className="mt-5 sm:mt-6 md:mt-8 lg:mt-10">
              <a
                href={`tel:${selectedCenter.phone}`}
                className="inline-block bg-gray-900 text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base font-light hover:bg-gray-800 transition-colors w-full text-center rounded-sm"
              >
                전화 문의하기
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CenterSection;

