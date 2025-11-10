export default function StoryPage() {
  return (
    <div className="min-h-screen bg-white pb-12 sm:pb-20 pt-16 sm:pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 제목 */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 text-center mt-12 sm:mt-16 md:mt-20 mb-8 sm:mb-10 md:mb-12">
          온숨 스토리
        </h1>

        {/* 이모지 헤더 */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-6 sm:mb-8">
            대표 인사말
          </h2>
          <div className="space-y-4 text-left text-gray-700 text-base sm:text-lg leading-relaxed">
            <p className="font-semibold text-gray-900">
              안녕하세요, ON:SOOM 대표 정지은입니다.
            </p>
            <p>
              대표이기 이전에, 저는 두 아이의 엄마였습니다. 아이들이 잘 자라길
              바라는 마음으로, 좋은 성적과 결과가 행복의 기준이라고 믿었던 시절이
              있었습니다. 그 믿음이 아이에게도, 제 자신에게도 때로는 상처가
              되었습니다.
            </p>
            <p>
              그 시간을 지나며 배웠습니다. 배움은 결과를 위한 경쟁이 아니라, 삶을
              이해하고 나답게 성장해가는 과정이라는 것을요. 넘어지고, 숨이
              차오를 때 비로소 ‘진짜 나’를 만나게 되더군요.
            </p>
            <p>
              그 깨달음이 ON:SOOM의 시작이었습니다. 한계를 넘어 숨을 고르고, 다시
              나아갈 수 있도록 돕는 공간. 각자의 속도로 성장할 수 있도록 로드맵
              프로그램과 코칭을 통해 함께 길을 만듭니다.
            </p>
            <p>
              누군가는 이제 막 출발선에 서 있고, 누군가는 잠시 멈춰 방향을 찾고
              있을지 모릅니다. ON:SOOM은 그 모든 여정에서 당신이 다시 도약할 수
              있도록 함께합니다.
            </p>
            <p>
              한계를 넘어, 성장하는 곳. 그곳에서 당신의 다음 걸음을 응원합니다.
            </p>
          </div>
        </div>

        {/* 본문 */}
        <div className="space-y-3 sm:space-y-4 text-gray-700 text-base sm:text-lg font-medium leading-relaxed">
          <p className="text-center">
            'ONːSOOM(온ː숨)'은 청년들과 기업의 성장을 돕는 교육 코칭
            브랜드입니다.
          </p>

          <p className="text-center">
            저희는 'ON'과 '숨'이라는 두 단어에 깨어남과 회복 그리고 그것을
            뛰어넘는 성장의 의미를 담았습니다.
          </p>

          <p className="text-center">
            'ON'은 자신과 조직을 인식하고 변화의 스위치를 켜는 순간을, '숨'은
            존재의 리듬을 되찾는 과정을 상징합니다.
          </p>

          <div className="p-6 sm:p-8 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl my-6 sm:my-8 md:my-10">
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900 text-center leading-relaxed">
              ON ː SOOM은 청년들이 스스로의 가능성을 켜고(ON)
              <br />
              온전히 숨 쉬는 삶을 살아가도록 돕습니다.
            </p>
          </div>

          <p className="text-center text-lg sm:text-xl font-medium text-gray-800 my-6 sm:my-8">
            성장은 거창한 도약이 아니라, 한 번의 진짜 숨에서 시작됩니다.
          </p>

          {/* 슬로건 */}
          <div className="pt-6 sm:pt-8 border-t-2 border-gray-200 mt-6 sm:mt-8">
            <div className="text-center space-y-4">
              <p className="text-2xl md:text-3xl font-semibold text-gray-900">
                숨을 켜다, 성장을 잇다.
              </p>
              <p className="text-lg md:text-xl text-gray-600 font-medium italic">
                Turn your breath on, connect to your growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
