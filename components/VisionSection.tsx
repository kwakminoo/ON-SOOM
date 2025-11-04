import Image from "next/image";

const VisionSection = () => {
  return (
    <section id="vision" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Subment 이미지와 로고를 가깝게 */}
          <div className="flex flex-col items-center gap-4 mb-16">
            {/* Subment 이미지 */}
            <div className="w-full max-w-xs">
              <Image
                src="/subment.png"
                alt="Subment"
                width={1200}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* 로고 - 2배 크기 */}
            <div className="w-full max-w-lg">
              <Image
                src="/ONSOOM_Logo.png"
                alt="온숨 로고"
                width={800}
                height={200}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Subbenner 1~3 - 원래 사이즈, 세로 배치 */}
          <div className="flex flex-col items-center gap-3 w-full">
            <div className="w-full">
              <Image
                src="/subbenner01.png"
                alt="Subbenner 1"
                width={1200}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="w-full">
              <Image
                src="/subbenner02.png"
                alt="Subbenner 2"
                width={1200}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="w-full">
              <Image
                src="/subbenner03.png"
                alt="Subbenner 3"
                width={1200}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;

