import Image from "next/image";

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-white pb-12 sm:pb-20 pt-16 sm:pt-20">
      {/* 히어로 배너 (기업/프로그램 페이지와 유사한 스타일) */}
      <section className="relative isolate overflow-hidden bg-slate-950 -mt-16 sm:-mt-20 lg:-mt-10 py-28 sm:py-36">
        <div aria-hidden className="absolute inset-0">
          <Image
            src="/CEO1.jpg"
            alt="온숨 스토리 히어로"
            fill
            className="object-cover"
            priority
            quality={100}
            sizes="100vw"
          />
          {/* 하단으로 갈수록 흰 배경으로 자연스럽게 이어지는 그라데이션 + 살짝 블러 */}
          <div className="absolute inset-x-0 bottom-0 h-24 sm:h-28 md:h-32 bg-gradient-to-b from-transparent via-white/60 to-white backdrop-blur-[2px] pointer-events-none" />
        </div>
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center text-center px-6 sm:px-8 lg:px-12 gap-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase text-white/90">
            ON:SOOM STORY
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-white">
            대표 인사말
          </h1>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/90 max-w-3xl">
            숨에서 시작해 성장으로 이어지는 온숨의 여정에 함께하세요.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-14 md:mt-16">

        {/* 이모지 헤더 */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          {/* 히어로 아래 중복 이미지/타이틀 블록 제거 */}

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

        {/* CEO2 이미지 배너 */}
        <div className="space-y-3 sm:space-y-4 text-gray-700 text-base sm:text-lg font-medium leading-relaxed">
          <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] my-6 sm:my-8 md:my-10 h-[200px] sm:h-[240px] md:h-[280px] overflow-hidden">
            <Image
              src="/CEO2.jpg"
              alt="브랜드 메시지 배너"
              fill
              className="object-cover"
              priority={false}
              quality={100}
              sizes="100vw"
            />
            {/* 상/하단 흰색 그라데이션 + 약한 블러로 배경과 자연스럽게 연결 */}
            <div className="absolute inset-x-0 top-0 h-20 sm:h-24 md:h-28 bg-gradient-to-b from-white via-white/60 to-transparent backdrop-blur-[2px] pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-20 sm:h-24 md:h-28 bg-gradient-to-t from-white via-white/60 to-transparent backdrop-blur-[2px] pointer-events-none" />
            <div className="absolute inset-0 flex items-center justify-center px-6">
              <p className="text-base sm:text-xl md:text-2xl font-medium text-white text-center leading-relaxed drop-shadow">
                ON ː SOOM은 청년들이 스스로의 가능성을 켜고(ON)
                <br />
                온전히 숨 쉬는 삶을 살아가도록 돕습니다.
              </p>
            </div>
          </section>

          {/* 본문 - 브랜드 소개 문단 */}
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

          <p className="text-center text-lg sm:text-xl font-medium text-gray-800 my-6 sm:my-8">
            성장은 거창한 도약이 아니라, 한 번의 진짜 숨에서 시작됩니다.
          </p>

          {/* 슬로건 (원래 스타일 복원) */}
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
