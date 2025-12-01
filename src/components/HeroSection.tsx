import { useState, useEffect } from "react";
import heroTruck from "@/assets/hero-truck.jpg";
import heroContainers from "@/assets/hero-containers.jpg";

const slides = [
  {
    image: heroTruck,
    title: "Strategy Institute of Transport and Logistics",
    description: "교통물류전략연구소는 지속 가능하고 효율적인 교통 및 물류 시스템의 구축을 통해 혁신적이고 글로벌한 미래 물류를 선도하는 센터로 자리매김하며, 산업과 사회에 지속적인 가치를 제공합니다.",
  },
  {
    image: heroContainers,
    title: "Strategy Institute of Transport and Logistics",
    description: "교통물류전략연구소는 지속 가능하고 효율적인 교통 및 물류 시스템의 구축을 통해 혁신적이고 글로벌한 미래 물류를 선도하는 센터로 자리매김하며, 산업과 사회에 지속적인 가치를 제공합니다.",
  },
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-primary/50" />
          <div className="relative container mx-auto h-full flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed">
              {slide.description}
            </p>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-accent w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
