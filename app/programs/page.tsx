import Link from "next/link";

export default function ProgramsPage() {
  const programs = [
    {
      title: "자가진단",
      description: "나의 현재 상태를 점검하고 필요한 방향을 찾아보세요",
      icon: "📋",
      href: "/programs/self-test",
      color: "from-blue-50 to-blue-100"
    },
    {
      title: "온라인 신청",
      description: "프로그램 참여를 위한 온라인 신청",
      icon: "💻",
      href: "/programs/apply",
      color: "from-green-50 to-green-100"
    },
    {
      title: "기업 상담",
      description: "조직문화 개선과 임직원 성장을 위한 맞춤 프로그램",
      icon: "🏢",
      href: "/programs/corporate",
      color: "from-purple-50 to-purple-100"
    },
    {
      title: "교육기관 상담",
      description: "학교 및 교육기관을 위한 특화 프로그램",
      icon: "🎓",
      href: "/programs/education",
      color: "from-yellow-50 to-yellow-100"
    },
    {
      title: "강연 및 세미나",
      description: "성장과 변화를 위한 강연 및 워크샵",
      icon: "🎤",
      href: "/programs/seminar",
      color: "from-pink-50 to-pink-100"
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 제목 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            프로그램 안내
          </h1>
          <p className="text-lg text-gray-600">
            나에게 맞는 성장의 여정을 시작하세요
          </p>
        </div>

        {/* 프로그램 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {programs.map((program) => (
            <Link
              key={program.title}
              href={program.href}
              className={`p-8 bg-gradient-to-br ${program.color} rounded-xl hover:shadow-lg transition-all duration-300 group`}
            >
              <div className="text-center">
                <div className="text-5xl mb-4">{program.icon}</div>
                <h2 className="text-xl font-medium text-gray-900 mb-3 group-hover:scale-105 transition-transform">
                  {program.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {program.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* 안내 메시지 */}
        <div className="bg-gray-50 p-8 rounded-xl text-center">
          <h3 className="text-xl font-medium text-gray-900 mb-3">
            프로그램 문의
          </h3>
          <p className="text-gray-600 mb-4">
            각 프로그램에 대한 자세한 상담이 필요하신가요?
          </p>
          <Link
            href="/consult"
            className="inline-block px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            상담 신청하기
          </Link>
        </div>
      </div>
    </div>
  );
}


