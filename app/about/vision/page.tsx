import Image from "next/image";

export default function VisionPage() {
  return (
    <div className="min-h-screen bg-white pb-12 sm:pb-20 pt-16 sm:pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 제목 */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 text-center mt-12 sm:mt-16 md:mt-20 mb-8 sm:mb-10 md:mb-12">
          기업 이념
        </h1>

        {/* 핵심 가치 이미지 */}
        <div className="flex justify-center mb-10 sm:mb-12 md:mb-16">
          <Image
            src="/onsoomC.png"
            alt="핵심 가치"
            width={1200}
            height={600}
            className="w-full h-auto"
          />
        </div>

        {/* 핵심이념 */}
        <section className="mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4 sm:mb-6 pb-3 border-b-2 border-gray-200">
            1. 핵심이념 (Core Ideology)
          </h2>
          <div className="space-y-2 sm:space-y-3 text-gray-700 text-base sm:text-lg font-medium leading-relaxed">
            <p>모든 성장은 '숨'에서 시작된다고 믿습니다.</p>
            <p>ON ː SOOM은 가능성을 '켜는' 순간을 함께합니다.</p>
            <p>한 숨 더 빠르게 도약할 수 있도록 돕겠습니다.</p>
          </div>
        </section>

        {/* 비전 */}
        <section className="mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4 sm:mb-6 pb-3 border-b-2 border-gray-200">
            2. 비전 (Vision)
          </h2>
          <div className="space-y-2 sm:space-y-3 text-gray-700 text-base sm:text-lg font-medium leading-relaxed">
            <p>ON ː SOOM은 한 사람의 성장을 넘어,</p>
            <p>그들이 만들어갈 더 건강한 조직문화와 사회적 순환을 꿈꿉니다.</p>
            <p>깨어 있는 개인이 곧 깨어 있는 사회를 만든다는 믿음으로,</p>
            <p>미래가 공존하는 교육을 지향합니다.</p>
          </div>
        </section>

        {/* 공헌 */}
        <section className="mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4 sm:mb-6 pb-3 border-b-2 border-gray-200">
            3. 공헌 (Contribution)
          </h2>

          <div className="space-y-2 sm:space-y-3 text-gray-700 text-base sm:text-lg font-medium leading-relaxed">
            <p>ON ː SOOM은 성장의 혜택이 특정 집단에 머물지 않도록,</p>
            <p>신진 리더들을 위한 '공익 프로그램'을 운영합니다.</p>
            <p>
              우리는 한 사람의 변화가 또 다른 숨을 밝히는 '선순환적 성장
              생태계'를 만드는 것을 목표로 합니다.
            </p>
          </div>
        </section>

        <section className="mb-10 sm:mb-12 md:mb-16">
          <div className="space-y-4 sm:space-y-6 text-gray-700 text-base sm:text-lg font-medium leading-relaxed">
            <p className="text-lg italic text-gray-800 mt-32 font-semibold">
              우리는 한 사람의 내면 변화가 또 다른 사람의 숨을 밝히는 '선순환적
              성장 생태계'를 만드는 것을 목표로 합니다.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
