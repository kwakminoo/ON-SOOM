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
      <CenterSection />
      <QuickConsult />
    </div>
  );
}

