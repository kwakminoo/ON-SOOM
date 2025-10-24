import { Suspense } from "react";
import HeroSlider from "@/components/HeroSlider";
import QuickConsult from "@/components/QuickConsult";
import ProgramSection from "@/components/ProgramSection";
import CenterSection from "@/components/CenterSection";
import TestimonialSection from "@/components/TestimonialSection";
import VisionSection from "@/components/VisionSection";

export default function Home() {
  return (
    <div className="pt-20">
      <HeroSlider />
      <VisionSection />
      <ProgramSection />
      <TestimonialSection />
      <Suspense fallback={<div className="py-16 md:py-24 bg-gray-50" />}>
        <CenterSection />
      </Suspense>
      <QuickConsult />
    </div>
  );
}

