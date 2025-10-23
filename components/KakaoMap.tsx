"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

interface Center {
  name: string;
  address: string;
  lat: number;
  lng: number;
}

const centers: Center[] = [
  {
    name: "온숨 홍대 1호점",
    address: "서울특별시 마포구 서교동 354-8 호 LA",
    lat: 37.5549,
    lng: 126.9225,
  },
  {
    name: "온숨 홍대 2호점",
    address: "서울특별시 마포구 서교동 354-8 호 LA",
    lat: 37.5549,
    lng: 126.9225,
  },
  {
    name: "온숨 남구로점",
    address: "서울특별시 구로구 디지털로 300",
    lat: 37.4856,
    lng: 126.8983,
  },
];

export default function KakaoMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadMap = () => {
      const script = document.createElement("script");
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=f08eb895ec7d3d5d9aed42cafb5ee451&autoload=false`;
      document.head.appendChild(script);

      script.onload = () => {
        window.kakao.maps.load(() => {
          if (!mapRef.current) return;

          const options = {
            center: new window.kakao.maps.LatLng(37.5133, 127.0),
            level: 8,
          };

          const map = new window.kakao.maps.Map(mapRef.current, options);

          centers.forEach((center) => {
            const pos = new window.kakao.maps.LatLng(center.lat, center.lng);
            new window.kakao.maps.Marker({
              map: map,
              position: pos,
            });
          });
        });
      };
    };

    loadMap();
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            온숨의 공간
          </h2>
          <p className="text-gray-600 text-lg">
            편안한 공간으로 오세요
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div
            ref={mapRef}
            className="w-full h-[400px] md:h-[500px] lg:h-[600px]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {centers.map((center, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {center.name}
              </h3>
              <p className="text-gray-600 text-sm mb-3">{center.address}</p>
              <a
                href={`https://map.kakao.com/link/map/${center.name},${center.lat},${center.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-toss-600 hover:text-toss-700 font-medium"
              >
                카카오맵으로 보기
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
