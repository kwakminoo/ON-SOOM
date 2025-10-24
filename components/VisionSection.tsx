import Image from "next/image";

const VisionSection = () => {
  return (
    <section id="vision" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="flex justify-center">
          <Image
            src="/3N.png"
            alt="3N"
            width={1200}
            height={600}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default VisionSection;

