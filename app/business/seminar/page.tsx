import Link from 'next/link';

export default function SeminarPage() {
  return (
    <div className="min-h-screen bg-white pb-20" style={{ paddingTop: '80px' }}>
      {/* 히어로 섹션 */}
      <section className="px-4 bg-purple-50 pb-8" style={{ marginTop: '-80px', paddingTop: '80px' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center" style={{ marginTop: '80px', marginBottom: '50px' }}>
            강연 및 세미나
          </h1>
          <p className="text-center text-gray-700 text-lg font-medium mb-12 leading-relaxed">
            성장과 성찰을 나누는 온ː숨의 강연·세미나 시리즈.<br/>
            듣는 시간에서 생각하는 시간으로,<br/>
            <span className="text-purple-600 font-bold">숨을 트고 삶이 확장됩니다.</span>
          </p>
        </div>
      </section>

      {/* 메인 설명 섹션 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-3 text-gray-700 text-lg font-medium" style={{ lineHeight: '140%' }}>
            <p className="text-center">
              온ː숨은 <strong className="text-purple-600">'숨을 트는 순간들'</strong>을 세상과 나누기 위해 강연과 세미나를 엽니다.
            </p>
            <p className="text-center">
              리더십, 회복탄력성, 마음 성장, 관계의 예술 등 다양한 주제를 다루며,<br/>
              각 분야의 코치와 심리 전문가들이 <strong className="text-gray-900">깨어 있는 삶의 태도</strong>를 이야기합니다.
            </p>
            <p className="text-center">
              모든 강연은 듣는 사람의 일상 속에 변화를 불러일으키는 <strong className="text-gray-900">'성찰의 장'</strong>이 되도록 설계됩니다.<br/>
              온ː숨의 무대는 단순한 강연이 아니라, <strong className="text-purple-600">함께 생각하고 숨 쉬는 시간</strong>입니다.
            </p>
            <p className="text-center">
              조직과 개인이 서로의 경험을 통해 성장할 때,<br/>
              사회는 조금 더 따뜻해집니다.
            </p>
          </div>
        </div>
      </section>

      {/* 강연 주제 섹션 */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12 text-center">
            주요 강연 주제
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* 주제 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                리더십
              </h3>
              <p className="text-gray-600 leading-relaxed">
                사람 중심의 리더십, 공감과 경청의 리더십, 변화를 이끄는 리더의 자세에 대한 통찰을 나눕니다.
              </p>
            </div>

            {/* 주제 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                회복탄력성
              </h3>
              <p className="text-gray-600 leading-relaxed">
                어려움 속에서 다시 일어서는 힘, 내면의 회복력을 키우는 방법과 실천 전략을 공유합니다.
              </p>
            </div>

            {/* 주제 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                마음 성장
              </h3>
              <p className="text-gray-600 leading-relaxed">
                자기이해, 감정 다루기, 자존감 회복 등 개인의 내면 성장과 정신 건강에 대한 주제를 다룹니다.
              </p>
            </div>

            {/* 주제 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                관계의 예술
              </h3>
              <p className="text-gray-600 leading-relaxed">
                건강한 관계 맺기, 소통의 기술, 갈등 해결과 회복, 진정한 연결에 대한 이야기를 나눕니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 강연 형식 섹션 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12 text-center">
            강연 형식
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-medium">
                1
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">키노트 강연</h3>
                <p className="text-gray-600">
                  50~90분 동안 한 가지 주제에 대해 깊이 있게 탐구하는 본격 강연 형식입니다. 전문가의 통찰과 실천 사례를 통해 영감을 얻을 수 있습니다.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-medium">
                2
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">인터랙티브 세미나</h3>
                <p className="text-gray-600">
                  참여자들과 함께 질문하고 대화하며 성찰하는 쌍방향 세미나입니다. 소그룹 활동과 경험 나누기가 포함됩니다.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-medium">
                3
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">워크숍</h3>
                <p className="text-gray-600">
                  2~4시간 동안 진행되는 실습 중심 프로그램입니다. 배운 내용을 즉시 적용하고 개인별 액션 플랜을 만들어갑니다.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-medium">
                4
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">토크 콘서트</h3>
                <p className="text-gray-600">
                  편안한 분위기에서 여러 연사들의 짧은 이야기를 듣고, Q&A와 네트워킹 시간을 갖는 오픈형 이벤트입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 대상 섹션 */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12 text-center">
            강연 대상
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">기업 및 조직</h3>
              <p className="text-gray-600 text-sm">
                임직원 대상 특강 및 워크숍
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">학교 및 교육기관</h3>
              <p className="text-gray-600 text-sm">
                학생·교직원 대상 강연
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">일반 대중</h3>
              <p className="text-gray-600 text-sm">
                공개 세미나 및 토크 콘서트
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-12 px-4 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            함께 생각하고 숨 쉬는 시간
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            강연 및 세미나 초청이 필요하신가요?<br/>
            온ː숨의 강연으로 의미 있는 변화의 시간을 만들어보세요.
          </p>
          <Link
            href="/consult"
            className="inline-block bg-purple-600 text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl"
          >
            강연 문의하기
          </Link>
        </div>
      </section>
    </div>
  );
}


