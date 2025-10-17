export default function StoryPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 제목 */}
        <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-16 text-center">
          회사 스토리 소개
        </h1>

        {/* 이모지 헤더 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
            🌿 숨쉬는 이야기
          </h2>
        </div>

        {/* 본문 */}
        <div className="space-y-8 text-gray-700 leading-relaxed text-lg">
          <p>
            'ONːSOOM(온ː숨)'은 청년들의 내면 성장을 돕는 코칭 브랜드입니다.
          </p>

          <p>
            저희는 'ON'과 '숨'이라는 두 단어에 깨어남과 회복의 의미를 담았습니다.
          </p>

          <p>
            'ON'은 자신을 인식하고 변화의 스위치를 켜는 순간을, '숨'은 존재의 리듬을 되찾는 과정을 상징합니다.
          </p>

          <div className="my-12 p-8 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl">
            <p className="text-xl md:text-2xl font-light text-gray-900 text-center leading-relaxed">
              ON ː SOOM은 청년들이 스스로의 가능성을 '켜고(ON)', 온전히 숨 쉬는 삶을 살아가도록 돕습니다.
            </p>
          </div>

          <p className="text-center text-xl font-medium text-gray-800">
            성장은 거창한 도약이 아니라, 한 번의 진짜 숨에서 시작됩니다.
          </p>

          {/* 슬로건 */}
          <div className="mt-16 pt-8 border-t-2 border-gray-200">
            <div className="text-center space-y-4">
              <p className="text-2xl md:text-3xl font-light text-gray-900">
                숨을 켜다, 성장을 잇다.
              </p>
              <p className="text-lg md:text-xl text-gray-600 italic">
                Turn your breath on, connect to your growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


