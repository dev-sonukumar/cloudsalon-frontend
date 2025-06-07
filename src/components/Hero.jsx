import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { assets } from "../assets/assets";

// Responsive image slides
const slides = [
  { id: 1, image: assets.main_banner_bg1 },
  { id: 2, image: assets.main_banner_bg5 },
  { id: 3, image: assets.main_banner_bg2 },
  { id: 4, image: assets.main_banner_bg4 },
  { id: 5, image: assets.main_banner_bg3 },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-black">
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;

        return (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
          >
            <LazyLoadImage
              src={slide.image}
              alt={`Slide ${index + 1}`}
              effect="blur"
              className="w-full h-full object-fit"
              visibleByDefault={isActive}
            />
          </div>
        );
      })}

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-110" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
