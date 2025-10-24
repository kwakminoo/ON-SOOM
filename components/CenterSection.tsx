"use client";

import { useState, useEffect, useRef } from "react";
import Script from "next/script";

declare global {
  interface Window {
    kakao: any;
  }
}

const centers = [
  {
    id: 1,
    name: "홍대 1호",
    address: "서울특별시 마포구 서교동 354-8 호 LA",
    phone: "02-1234-5678",
    hours: "평일 10:00 - 20:00 | 주말 10:00 - 18:00",
    map: "지하철 2호선 홍대입구역 9번 출구 도보 5분",
    lat: 37.5549,
    lng: 126.9225,
  },
  {
    id: 2,
    name: "홍대 2호",
    address: "서울특별시 마포구 서교동 354-8 호 LA",
    phone: "02-2345-6789",
    hours: "평일 10:00 - 20:00 | 주말 10:00 - 18:00",
    map: "지하철 2호선 홍대입구역 3번 출구 도보 7분",
    lat: 37.5549,
    lng: 126.9225,
  },
  {
    id: 3,
    name: "남구로",
    address: "서울특별시 구로구 디지털로 300",
    phone: "02-3456-7890",
    hours: "평일 10:00 - 20:00 | 주말 10:00 - 18:00",
    map: "지하철 2호선 구로디지털단지역 2번 출구 도보 3분",
    lat: 37.4856,
    lng: 126.8983,
  },
];

const CenterSection = () => {
  const [selectedCenter, setSelectedCenter] = useState(centers[0]);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const markerInstance = useRef<any>(null);

  const initializeMap = () => {
    if (!window.kakao || !window.kakao.maps) {
      return;
    }

    window.kakao.maps.load(() => {
      if (!mapRef.current) return;

      try {
        const options = {
          center: new window.kakao.maps.LatLng(selectedCenter.lat, selectedCenter.lng),
          level: 3,
          minLevel: 1,  // 최대 확대 레벨
          maxLevel: 5,  // 최대 축소 레벨 (숫자가 클수록 더 많이 축소)
        };

        mapInstance.current = new window.kakao.maps.Map(mapRef.current, options);

        // 마커 생성
        markerInstance.current = new window.kakao.maps.Marker({
          map: mapInstance.current,
          position: new window.kakao.maps.LatLng(selectedCenter.lat, selectedCenter.lng),
        });

        // 지도 이동 범위 제한 - dragend 이벤트 사용
        const centerPosition = new window.kakao.maps.LatLng(selectedCenter.lat, selectedCenter.lng);
        const maxDistance = 0.01; // 약 1km 반경

        window.kakao.maps.event.addListener(mapInstance.current, 'dragend', function() {
          const currentCenter = mapInstance.current.getCenter();
          const latDiff = Math.abs(currentCenter.getLat() - selectedCenter.lat);
          const lngDiff = Math.abs(currentCenter.getLng() - selectedCenter.lng);

          // 최대 범위를 벗어나면 중심으로 다시 이동
          if (latDiff > maxDistance || lngDiff > maxDistance) {
            mapInstance.current.panTo(centerPosition);
          }
        });
      } catch (error) {
        console.error('카카오맵 초기화 실패:', error);
      }
    });
  };

  useEffect(() => {
    if (isMapLoaded) {
      initializeMap();
    }
  }, [isMapLoaded, selectedCenter.lat, selectedCenter.lng]);

  useEffect(() => {
    if (mapInstance.current && markerInstance.current && window.kakao) {
      const newPosition = new window.kakao.maps.LatLng(selectedCenter.lat, selectedCenter.lng);
      mapInstance.current.setCenter(newPosition);
      markerInstance.current.setPosition(newPosition);
    }
  }, [selectedCenter]);

  return (
    <>
      <Script
        src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=f08eb895ec7d3d5d9aed42cafb5ee451&autoload=false"
        strategy="afterInteractive"
        onLoad={() => setIsMapLoaded(true)}
        onError={() => console.error('카카오맵 스크립트 로드 실패')}
      />
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          {/* 섹션 헤더 */}
          <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-3 sm:mb-4 tracking-tight">
              온숨의 공간
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl">
              편안한 공간으로 오세요
            </p>
          </div>

          {/* 공간 선택 탭 */}
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

          {/* 선택된 공간 정보 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* 카카오맵 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div ref={mapRef} className="w-full h-96" />
            </div>

            {/* 공간 상세 정보 */}
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
    </>
  );
};

export default CenterSection;
