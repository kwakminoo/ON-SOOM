import Link from 'next/link';

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-white pb-12 sm:pb-20 pt-16 sm:pt-20">
      {/* 히어로 섹션 */}
      <section className="px-4 bg-green-50 pb-6 sm:pb-8 -mt-16 sm:-mt-20 pt-16 sm:pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 text-center mt-12 sm:mt-16 md:mt-20 mb-8 sm:mb-10 md:mb-12">
            교육기관 상담
          </h1>
          <p className="text-center text-gray-700 text-base sm:text-lg font-medium mb-8 sm:mb-10 md:mb-12 leading-relaxed px-4">
            청년의 내면을 밝히고 방향을 찾는<br/>
            온ː숨의 교육기관 연계 성장 코칭.<br/>
            <span className="text-green-600 font-bold">자신을 이해하는 것이 진로의 시작입니다.</span>
          </p>
        </div>
      </section>

      {/* 메인 설명 섹션 */}
      <section className="py-8 sm:py-10 md:py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-3 sm:space-y-4 text-gray-700 text-base sm:text-lg font-medium leading-relaxed">
            <p className="text-center">
              온ː숨은 청년과 학생들이 <strong className="text-gray-900">스스로의 내면을 이해하고</strong>, 자신만의 길을 설계하는 힘을 기르도록 돕습니다.
            </p>
            <p className="text-center">
              학교·대학·청년단체와 협력하여 <strong className="text-gray-900">진로·자존감·관계성장</strong> 중심의 코칭 프로그램을 제공합니다.<br/>
              단순한 상담이 아니라, <strong className="text-green-600">'왜 공부하는가', '어떤 사람이 되고 싶은가'</strong>를 함께 탐구하는 성찰형 커리큘럼입니다.
            </p>
            <p className="text-center">
              학생들이 비교와 불안을 넘어 <strong className="text-gray-900">자기 가능성의 숨결</strong>을 믿게 하는 것,<br/>
              그것이 온ː숨의 교육 철학입니다.
            </p>
            <p className="text-center">
              우리는 <strong className="text-green-600">한 세대가 자기 자신과의 관계를 회복</strong>할 때,<br/>
              사회 전체의 성장 기반이 단단해진다고 믿습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 핵심 가치 섹션 */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12 text-center">
            온ː숨 교육 프로그램의 핵심
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* 카드 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                내면 탐구
              </h3>
              <p className="text-gray-600 leading-relaxed">
                '왜 공부하는가', '어떤 사람이 되고 싶은가'를 함께 탐구하는 성찰형 프로그램입니다.
              </p>
            </div>

            {/* 카드 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                자존감 회복
              </h3>
              <p className="text-gray-600 leading-relaxed">
                비교와 불안을 넘어 자기 가능성의 숨결을 믿게 하는 것이 목표입니다.
              </p>
            </div>

            {/* 카드 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                진로 설계
              </h3>
              <p className="text-gray-600 leading-relaxed">
                자신을 이해하는 것이 진로의 시작입니다. 스스로의 길을 설계하는 힘을 기릅니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 대상 기관 섹션 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12 text-center">
            협력 대상 기관
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl mb-4">🏫</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">중·고등학교</h3>
              <p className="text-gray-600 text-sm">
                청소년 자존감·관계 프로그램
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">대학교</h3>
              <p className="text-gray-600 text-sm">
                대학생 진로·성장 워크숍
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">청년단체</h3>
              <p className="text-gray-600 text-sm">
                청년 성장·관계 코칭
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 프로그램 구성 섹션 */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12 text-center">
            프로그램 커리큘럼
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
              <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-medium">
                1
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">자기이해 워크숍</h3>
                <p className="text-gray-600">
                  '나는 누구인가', '무엇을 원하는가'를 탐구하는 성찰 중심 워크숍으로 자기 이해의 출발점을 마련합니다.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
              <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-medium">
                2
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">진로 탐색 코칭</h3>
                <p className="text-gray-600">
                  단순한 직업 소개가 아닌, 자신의 가치관과 강점을 기반으로 한 진로 방향 설계를 지원합니다.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
              <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-medium">
                3
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">관계와 소통</h3>
                <p className="text-gray-600">
                  또래 관계, 가족 관계에서의 소통 방법을 배우고 건강한 관계 맺기를 실천합니다.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
              <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-medium">
                4
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">지속 성장 지원</h3>
                <p className="text-gray-600">
                  프로그램 종료 후에도 학생들이 스스로 성장할 수 있도록 자기 점검 도구와 후속 코칭을 제공합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-12 px-4 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            한 세대의 성장을 함께 만들어갑니다
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            교육기관 연계 프로그램에 대한 자세한 상담이 필요하신가요?<br/>
            온ː숨이 함께하겠습니다.
          </p>
          <Link
            href="/consult"
            className="inline-block bg-green-600 text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
          >
            상담 신청하기
          </Link>
        </div>
      </section>
    </div>
  );
}


