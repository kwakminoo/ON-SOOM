"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type BannerDirection = "left" | "right";

interface AnimatedSubBannerProps {
  src: string;
  alt: string;
  enterFrom: BannerDirection;
}

const AnimatedSubBanner = ({
  src,
  alt,
  enterFrom,
}: AnimatedSubBannerProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -15% 0px",
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  const hiddenTransform =
    enterFrom === "right" ? "translate-x-full" : "-translate-x-full";

  return (
    <div ref={containerRef} className="w-full">
      <div
        className={`transition-all duration-700 ease-out will-change-transform ${
          isVisible ? "translate-x-0 opacity-100" : `${hiddenTransform} opacity-0`
        }`}
      >
        <Image src={src} alt={alt} width={1200} height={400} className="w-full h-auto" />
      </div>
    </div>
  );
};

const VisionSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 640);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section id="vision" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="flex flex-col items-center">
          {/* 로고 */}
          <div className="flex flex-col items-center gap-4 mb-16">
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

          {/* Subbenner 1~3 - 반응형 소스 분기 */}
          <div className="flex flex-col items-center gap-3 w-full overflow-hidden">
            <AnimatedSubBanner
              src={isMobile ? "/new_mobile_subbenner1.png" : "/new_subbenner1.png"}
              alt="Subbenner 1"
              enterFrom="right"
            />
            <AnimatedSubBanner
              src={isMobile ? "/new_mobile_subbenner2.png" : "/new_subbenner2.png"}
              alt="Subbenner 2"
              enterFrom="left"
            />
            <AnimatedSubBanner
              src={isMobile ? "/new_mobile_subbenner3.png" : "/new_subbenner3.png"}
              alt="Subbenner 3"
              enterFrom="right"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;

