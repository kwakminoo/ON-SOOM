import Link from "next/link";

export default function ProgramsPage() {
  const programs = [
    {
      title: "Self Roadmap",
      subtitle: "1회 • 80,000원",
      description:
        "목표와 감정을 명확히 인식하도록 돕는 1:1 로드맵. 자기 인식과 감정 정리를 중심으로 진행합니다.",
      icon: "🧭",
      href: "/programs/apply",
      color: "from-blue-50 to-indigo-50",
      highlight: "자기 인식",
    },
    {
      title: "Self-growth Roadmap",
      subtitle: "5회 패키지 • 400,000원",
      description:
        "진로·관계·자기 방향성을 함께 설계하는 성장형 로드맵. 매주 피드백과 과제를 제공합니다.",
      icon: "🌱",
      href: "/programs/apply",
      color: "from-emerald-50 to-teal-50",
      highlight: "성장 설계",
    },
    {
      title: "Life Roadmap",
      subtitle: "8회 패키지 • 650,000원",
      description:
        "번아웃, 무기력, 자존감 회복을 위한 장기 로드맵. 감정일기와 리프레임 훈련이 포함됩니다.",
      icon: "🌿",
      href: "/programs/apply",
      color: "from-amber-50 to-orange-50",
      highlight: "회복과 치유",
    },
    {
      title: "Life-growth Roadmap",
      subtitle: "3개월 과정 • 1,000,000원",
      description:
        "청년층 대상 장기 성장 프로젝트. 코칭+과제+팔로업 시스템을 결합해 지속적 자기 확장을 지원합니다.",
      icon: "🚀",
      href: "/programs/apply",
      color: "from-purple-50 to-violet-50",
      highlight: "장기 프로젝트",
      featured: true,
    },
    {
      title: "Workshop Roadmap",
      subtitle: "그룹 세션 1회 • 40,000원",
      description:
        "4~6인이 함께 참여해 '내면 대화'와 '관계 안에서의 나'를 탐색하는 집단 성장형 워크숍입니다.",
      icon: "👥",
      href: "/programs/apply",
      color: "from-rose-50 to-pink-50",
      highlight: "그룹 성장",
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
            <Link
              key={program.title}
              href={`${program.href}?program=${encodeURIComponent(program.title)}`}
              className={`relative p-8 bg-gradient-to-br ${
                program.color
              } rounded-2xl hover:shadow-xl transition-all duration-300 group border border-gray-100 ${
                program.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {program.featured && (
                <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                  추천
                </div>
              )}

              <div className="flex flex-col h-full">
                <div className="text-5xl mb-4">{program.icon}</div>

                <h2 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                  {program.title}
                </h2>

                <div className="inline-flex items-center text-sm font-medium text-gray-700 mb-4">
                  <span className="bg-white/60 px-3 py-1 rounded-full">
                    {program.subtitle}
                  </span>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed mb-4 flex-grow">
                  {program.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200">
                  <span className="text-xs font-medium text-gray-600">
                    {program.highlight}
                  </span>
                  <span className="text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all">
                    →
                  </span>
                </div>
              </div>
            </Link>
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

        {/* 안내 메시지 */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-10 rounded-2xl text-center">
          <h3 className="text-2xl font-semibold text-white mb-3">
            프로그램 상담이 필요하신가요?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            각 프로그램에 대한 자세한 설명과 맞춤 상담을 제공해드립니다
          </p>
          <Link
            href="/consult"
            className="inline-block px-8 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-medium"
          >
            무료 상담 신청하기
          </Link>
        </div>
      </div>
    </div>
  );
}
