import Link from 'next/link';

export default function CorporatePage() {
  return (
    <div className="min-h-screen bg-white pb-12 sm:pb-20 pt-16 sm:pt-20">
      {/* 히어로 섹션 */}
      <section className="px-4 bg-toss-50 pb-6 sm:pb-8 -mt-16 sm:-mt-20 pt-16 sm:pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 text-center mt-12 sm:mt-16 md:mt-20 mb-8 sm:mb-10 md:mb-12">
            기업 상담
          </h1>
          <p className="text-center text-gray-700 text-base sm:text-lg font-medium mb-8 sm:mb-10 md:mb-12 leading-relaxed px-4">
            사람 중심의 리더십, 관계 회복, 지속 가능한 조직문화를 만드는<br className="hidden sm:block"/>
            온ː숨의 기업 성장 코칭 프로그램.
            <span className="block mt-3 sm:mt-2 text-toss-600 font-bold">성과보다 '숨결'을 다룹니다.</span>
          </p>
        </div>
      </section>

      {/* 메인 설명 섹션 */}
      <section className="py-8 sm:py-10 md:py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-3 sm:space-y-4 text-gray-700 text-base sm:text-lg font-medium leading-relaxed">
            <p className="text-center">
              온ː숨의 기업 코칭은 조직의 성과 이전에 <strong className="text-gray-900">사람의 회복과 연결</strong>을 다룹니다.
            </p>
            <p className="text-center">
              우리는 구성원이 스스로 동기와 가치를 발견하도록 돕고, 리더가 사람을 이해하는 리더십을 개발하도록 설계합니다.<br/>
              팀 간의 관계, 소통, 정서적 안전감 같은 <strong className="text-gray-900">'조직의 내면'</strong>을 다루는 것이 핵심입니다.
            </p>
            <p className="text-center">
              온ː숨은 단기적인 퍼포먼스 향상보다 <strong className="text-gray-900">지속 가능한 성장 문화</strong>를 만드는 것을 목표로 합니다.<br/>
              워크숍·리더십 코칭·정기 피드백 시스템을 통해<br/>
              기업이 <strong className="text-blue-600">'함께 숨 쉬는 조직'</strong>으로 변화할 수 있도록 지원합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 핵심 가치 섹션 */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12 text-center">
            온ː숨 기업 코칭의 핵심
          </h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* 카드 1 */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2 sm:mb-3">
                사람 중심 리더십
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                구성원이 스스로 동기와 가치를 발견하고, 리더가 사람을 이해하는 리더십을 개발합니다.
              </p>
            </div>

            {/* 카드 2 */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2 sm:mb-3">
                관계와 소통
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                팀 간의 관계, 소통, 정서적 안전감 같은 '조직의 내면'을 다루는 것이 핵심입니다.
              </p>
            </div>

            {/* 카드 3 */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow sm:col-span-2 md:col-span-1">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2 sm:mb-3">
                지속 가능한 성장
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                단기적인 퍼포먼스보다 지속 가능한 성장 문화를 만들어갑니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 프로그램 방법론 섹션 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12 text-center">
            프로그램 구성
          </h2>
          
          <div className="space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row items-start gap-4 p-4 sm:p-6 bg-gray-50 rounded-xl">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-medium">
                1
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2">워크숍</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  팀 단위 혹은 전사 단위로 진행되는 상호작용 중심의 워크숍을 통해 조직 내면의 이슈를 발견하고 해결 방향을 모색합니다.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4 p-4 sm:p-6 bg-gray-50 rounded-xl">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-medium">
                2
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2">리더십 코칭</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  리더들을 대상으로 한 1:1 또는 소그룹 코칭을 통해 사람을 이해하는 리더십을 구체적으로 실천할 수 있도록 돕습니다.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4 p-4 sm:p-6 bg-gray-50 rounded-xl">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-medium">
                3
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2">정기 피드백 시스템</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  프로그램 종료 후에도 지속적인 성장을 위한 피드백 시스템을 구축하여 '함께 숨 쉬는 조직'으로의 변화를 지원합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-12 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            함께 숨 쉬는 조직을 만들어갑니다
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            기업 코칭 프로그램에 대한 자세한 상담이 필요하신가요?
            <span className="block mt-1">온ː숨이 함께하겠습니다.</span>
          </p>
          <Link
            href="/consult"
            className="inline-block bg-toss-500 text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-toss-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            상담 신청하기
          </Link>
        </div>
      </section>
    </div>
  );
}


