import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 제목 */}
        <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-16 text-center">
          온ː숨 소개
        </h1>

        {/* 소개 카드들 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Link 
            href="/about/story"
            className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-all duration-300 group"
          >
            <div className="text-center">
              <div className="text-4xl mb-4">🌿</div>
              <h2 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                온숨 스토리
              </h2>
              <p className="text-sm text-gray-600">
                우리의 시작과 의미
              </p>
            </div>
          </Link>

          <Link 
            href="/about/vision"
            className="p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:shadow-lg transition-all duration-300 group"
          >
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h2 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                기업이념
              </h2>
              <p className="text-sm text-gray-600">
                우리가 지향하는 가치
              </p>
            </div>
          </Link>

          <Link 
            href="/about/centers"
            className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl hover:shadow-lg transition-all duration-300 group"
          >
            <div className="text-center">
              <div className="text-4xl mb-4">📍</div>
              <h2 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                센터별 안내
              </h2>
              <p className="text-sm text-gray-600">
                찾아오시는 길
              </p>
            </div>
          </Link>
        </div>

        {/* 간단한 소개 */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-light text-gray-900 mb-4">
              ON ː SOOM과 함께하는 성장의 여정
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              ON ː SOOM은 청년들의 내면 성장을 돕는 코칭 브랜드입니다.
            </p>
            <p className="text-gray-700 leading-relaxed">
              우리는 한 사람 한 사람의 진정한 성장이 더 건강한 사회를 만든다고 믿으며,
              청년들이 자신의 가능성을 깨우고 온전히 숨 쉬는 삶을 살아갈 수 있도록 돕습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


