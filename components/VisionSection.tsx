const VisionSection = () => {
  return (
    <section id="vision" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        {/* 섹션 헤더 */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <div className="inline-block bg-gray-900 px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 mb-4 sm:mb-5">
            <div className="text-white text-3xl sm:text-4xl md:text-5xl font-light tracking-tight">ON:SOOM</div>
          </div>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            ON:SOOM의 핵심 가치와 비전
          </p>
        </div>

        {/* 미션 / 비전 / 핵심가치 - 3열 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {/* 미션 */}
          <div className="bg-gray-50 border-2 border-gray-200 p-8 sm:p-10 md:p-12 hover:shadow-xl hover:border-gray-900 transition-all duration-300 relative">
            <div className="absolute top-0 left-0 w-16 h-16 bg-gray-900 flex items-center justify-center">
              <span className="text-white text-xs font-bold">MISSION</span>
            </div>
            <div className="pt-8 sm:pt-10">
              <div className="space-y-5 sm:space-y-6 md:space-y-7">
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">공감하는 상담</h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    2030 세대의 고민과 스트레스를 진정으로 이해합니다
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4 sm:pt-5">
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">전문적인 서비스</h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    과학적 근거에 기반한 체계적인 프로그램을 운영합니다
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4 sm:pt-5">
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">쉬운 접근성</h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    언제 어디서나 편하게 상담받을 수 있습니다
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 비전 */}
          <div className="bg-gray-50 border-2 border-gray-200 p-8 sm:p-10 md:p-12 hover:shadow-xl hover:border-gray-900 transition-all duration-300 relative">
            <div className="absolute top-0 left-0 w-16 h-16 bg-gray-900 flex items-center justify-center">
              <span className="text-white text-xs font-bold">VISION</span>
            </div>
            <div className="pt-8 sm:pt-10">
              <div className="space-y-5 sm:space-y-6">
                <p className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 leading-relaxed">
                  2030 세대가 마음 편히 이야기하는 세상
                </p>
                <div className="border-t border-gray-200 pt-4 sm:pt-5">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    심리상담이 일상의 건강관리처럼 자연스러운 문화를 만들어갑니다
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 핵심가치 */}
          <div className="bg-gray-50 border-2 border-gray-200 p-8 sm:p-10 md:p-12 hover:shadow-xl hover:border-gray-900 transition-all duration-300 relative">
            <div className="absolute top-0 left-0 w-16 h-16 bg-gray-900 flex items-center justify-center">
              <span className="text-white text-xs font-bold">CORE VALUES</span>
            </div>
            <div className="pt-8 sm:pt-10">
              <div className="space-y-5 sm:space-y-6 md:space-y-7">
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">신뢰</h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    비밀 보호와 안전한 상담 환경
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4 sm:pt-5">
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">전문성</h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    검증된 전문가와 과학적 접근
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4 sm:pt-5">
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">공감</h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    따뜻한 위로와 진심어린 지지
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;

