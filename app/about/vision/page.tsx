import Image from "next/image";

export default function VisionPage() {
  return (
    <div className="min-h-screen bg-white pb-16" style={{ paddingTop: '80px' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 제목 */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-16 text-center" style={{ marginTop: '100px' }}>
          기업 이념
        </h1>

        {/* 핵심 가치 이미지 */}
        <div className="flex justify-center mb-16">
          <Image
            src="/onsoomC.png"
            alt="핵심 가치"
            width={1200}
            height={600}
            className="w-full h-auto"
          />
        </div>

        {/* 철학 */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
            1. 철학 (Philosophy)
          </h2>
          <div className="space-y-3 text-gray-700 font-medium" style={{ lineHeight: '18px' }}>
            <p>모든 성장은 '숨'에서 시작된다고 믿습니다.</p>
            <p>숨은 삶의 리듬이자, 존재의 진심입니다.</p>
            <p>ON ː SOOM은 청년이 자기 안의 숨을 깨우고, 스스로의 가능성을 '켜는' 순간을 함께합니다.</p>
            <p>우리는 내면의 회복이 곧 사회의 회복으로 이어진다고 믿습니다.</p>
          </div>
        </section>

        {/* 비전 */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
            2. 비전 (Vision)
          </h2>
          <div className="space-y-3 text-gray-700 font-medium" style={{ lineHeight: '18px' }}>
            <p className="text-xl font-semibold text-gray-900">"청년이 자기 자신으로 숨 쉬며 성장하는 사회."</p>
            <p>ON ː SOOM은 청년 한 사람의 성장을 넘어,</p>
            <p>그들이 만들어갈 더 건강한 조직문화와 사회적 순환을 꿈꿉니다.</p>
            <p>깨어 있는 개인이 곧 깨어 있는 사회를 만든다는 믿음으로,</p>
            <p>'성장'과 '돌봄'이 공존하는 세상을 지향합니다.</p>
          </div>
        </section>

        {/* 미션 */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
            3. 미션 (Mission)
          </h2>
          <ul className="space-y-3 text-gray-700 font-medium" style={{ lineHeight: '18px' }}>
            <li className="flex items-start">
              <span className="text-gray-400 mr-3">•</span>
              <span>청년들이 자신의 내면을 탐색하고, 삶의 방향성을 회복하도록 돕는다.</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-400 mr-3">•</span>
              <span>코칭과 프로그램을 통해 자기 인식, 감정 회복, 관계 성장을 촉진한다.</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-400 mr-3">•</span>
              <span>개인의 성장 경험이 공동체로 확산될 수 있도록 사회적 참여의 기회를 만든다.</span>
            </li>
          </ul>
        </section>

        {/* 사회적 공헌 */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
            4. 사회적 공헌 (Social Contribution)
          </h2>
          <div className="space-y-6 text-gray-700 font-medium" style={{ lineHeight: '18px' }}>
            <p>
              ON ː SOOM은 성장의 혜택이 특정 집단에 머물지 않도록, 청년·청소년·신진 리더들을 위한 '공익 코칭 프로그램'을 운영합니다.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">'숨 프로젝트'</h3>
              <p>경제적·심리적 어려움을 겪는 청년을 대상으로 한 무료 코칭 캠페인</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">'ON Fellowship'</h3>
              <p>코칭을 배운 청년이 다시 다른 청년의 성장을 돕는 순환형 멘토링</p>
            </div>

            <p className="text-lg italic text-gray-800 mt-8 font-semibold">
              우리는 한 사람의 내면 변화가 또 다른 사람의 숨을 밝히는 '선순환적 성장 생태계'를 만드는 것을 목표로 합니다.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}


