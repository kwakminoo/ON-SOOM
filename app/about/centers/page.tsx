"use client";

import Link from "next/link";

export default function CentersPage() {
  const centers = [
    {
      id: 1,
      name: "홍대",
      tag: "홍대",
      tagColor: "bg-blue-100 text-blue-800",
      address: "서울특별시 마포구 서교동 354-8 호 LA",
      phone: "02-1234-5678",
      hours: {
        weekday: "평일: 10:00 - 20:00",
        weekend: "주말: 10:00 - 18:00",
      },
      directions: [
        "지하철 2호선 홍대입구역 9번 출구 도보 5분",
        "공항철도 홍대입구역 하차",
      ],
      image: "/center1.jpg",
      status: "open",
    },
    {
      id: 2,
      name: "여의도",
      tag: "여의도",
      tagColor: "bg-green-100 text-green-800",
      address: "서울특별시 영등포구 여의대로 24",
      phone: "02-2345-6789",
      hours: {
        weekday: "평일: 10:00 - 20:00",
        weekend: "주말: 10:00 - 18:00",
      },
      directions: [
        "지하철 5호선 여의도역 3번 출구 도보 4분",
        "버스 정류장 국회의사당역 앞 하차",
      ],
      image: "/center2.jpg",
      status: "open",
    },
    {
      id: 3,
      name: "남구로",
      tag: "3호점",
      tagColor: "bg-purple-100 text-purple-800",
      address: "서울특별시 구로구 디지털로 300",
      phone: "02-3456-7890",
      hours: {
        weekday: "평일: 10:00 - 20:00",
        weekend: "주말: 10:00 - 18:00",
      },
      directions: [
        "지하철 2호선 구로디지털단지역 2번 출구 도보 3분",
        "7호선 환승 가능",
      ],
      image: "/center3.jpg",
      status: "open",
    },
    {
      id: 4,
      name: "강남",
      tag: "COMING SOON",
      tagColor: "bg-yellow-100 text-yellow-800",
      address: "서울특별시 강남구 (위치 확정 중)",
      phone: "-",
      hours: {
        weekday: "2026년 하반기 오픈 예정",
        weekend: "",
      },
      directions: ["자세한 위치는 추후 공지 예정입니다"],
      image: "/center4.jpg",
      status: "coming",
    },
  ];

  return (
    <div className="min-h-screen bg-white pb-12 sm:pb-20 pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 제목 */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 text-center mt-12 sm:mt-16 md:mt-20 mb-6 sm:mb-8 md:mb-10">
          온숨의 공간
        </h1>
        <p className="text-center text-gray-600 text-base sm:text-lg mb-10 sm:mb-12 md:mb-16 font-medium">
          ON ː SOOM의 공간을 방문해보세요
        </p>

        {/* 공간 카드 */}
        <div className="space-y-8">
          {centers.map((center) => (
            <div
              key={center.id}
              className={`bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden rounded-[20px] ${
                center.status === "coming" ? "relative" : ""
              }`}
            >
              {center.status === "coming" && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs sm:text-sm font-bold rounded-full shadow-lg">
                    COMING SOON
                  </span>
                </div>
              )}

              <div className="flex flex-col md:flex-row">
                {/* 정보 섹션 */}
                <div className="w-full md:w-1/2 p-6 sm:p-8 lg:p-10">
                  <div className="mb-6">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                      ON ː SOOM {center.name}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-500 font-medium">
                      {center.name} 지점
                    </p>
                  </div>

                  <div className="space-y-4 sm:space-y-5 text-sm sm:text-base text-gray-700 font-medium">
                    {center.status === "coming" ? (
                      <>
                        <div className="flex items-start">
                          <span className="font-semibold w-20 sm:w-24 flex-shrink-0 text-gray-900">
                            📍 위치
                          </span>
                          <span className="break-words text-gray-500">
                            {center.address}
                          </span>
                        </div>
                        <div className="flex items-start">
                          <span className="font-semibold w-20 sm:w-24 flex-shrink-0 text-gray-900">
                            🗓️ 오픈
                          </span>
                          <span className="text-yellow-700 font-semibold">
                            {center.hours.weekday}
                          </span>
                        </div>
                        <div className="flex items-start">
                          <span className="font-semibold w-20 sm:w-24 flex-shrink-0 text-gray-900">
                            💬 안내
                          </span>
                          <div className="text-gray-500">
                            {center.directions.map((direction, idx) => (
                              <p key={idx} className="mb-1">
                                {direction}
                              </p>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-start">
                          <span className="font-semibold w-20 sm:w-24 flex-shrink-0 text-gray-900">
                            🕐 운영시간
                          </span>
                          <div>
                            <p>{center.hours.weekday}</p>
                            <p>{center.hours.weekend}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <span className="font-semibold w-20 sm:w-24 flex-shrink-0 text-gray-900">
                            🚇 오시는 길
                          </span>
                          <div>
                            {center.directions.map((direction, idx) => (
                              <p key={idx} className="mb-1">
                                {direction}
                              </p>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {center.status === "coming" && (
                    <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <p className="text-sm text-gray-700 font-medium">
                          🎉 강남 지점 오픈 소식이 궁금하신가요?
                          <br />
                          <span className="text-yellow-700">
                            사전 알림 신청 시 오픈 일정을 가장 먼저
                            알려드립니다.
                          </span>
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* 이미지 섹션 */}
                <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-auto md:min-h-[400px] bg-gray-100 flex-shrink-0 relative">
                  {center.status === "coming" && (
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/90 to-orange-50/90 backdrop-blur-sm z-10"></div>
                  )}
                  <img
                    src={center.image}
                    alt={`${center.name} 센터`}
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center bg-gradient-to-br ${center.tagColor
                            .replace("text-", "from-")
                            .replace("-800", "-100")} to-gray-100">
                            <div class="text-center p-8">
                              <p class="text-base sm:text-lg text-gray-700 font-medium">${
                                center.name
                              } 지점</p>
                              <p class="text-xs sm:text-sm text-gray-500 mt-2">${
                                center.status === "coming"
                                  ? "Coming Soon"
                                  : "이미지 준비중"
                              }</p>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 문의 안내 */}
        {/* <div className="mt-16 text-center py-8 sm:py-10 md:py-12 px-4 sm:px-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-[20px]">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            방문 문의
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-2 font-medium">
            센터 이용 및 프로그램 신청을 원하시나요?
          </p>
          <p className="text-xs sm:text-sm text-gray-500 mb-6 font-medium">
            이메일: info@onsoom.kr | 대표전화: 02-0000-0000
          </p>
          <Link
            href="/programs/apply"
            className="inline-block w-full sm:w-auto px-8 py-3 bg-gray-900 text-white text-sm sm:text-base rounded-[20px] hover:bg-gray-800 transition-colors font-medium"
          >
            신청하기
          </Link>
        </div> */}
      </div>
    </div>
  );
}
