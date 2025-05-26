import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { assets } from "../assets/assets";

const slides = [
  {
    id: 1,
    image: assets.main_banner_bg1,
    heading: "India’s Most Affordable Home Salon Home Salon in Delhi.",
    subheading:
      "No need to step out for Salon! Cloud Salon provides all Salon Services near you, including Waxing, facials, Manicures, pedicures, Spa from experienced beauticians, and more.",
  },
  {
    id: 2,
    image: assets.main_banner_bg5,
  },
  {
    id: 3,
    image: assets.main_banner_bg2,
    heading:
      "Redefine Your Beauty Routine with Professional Care, Anytime, Anywhere — Only with Cloud Salon.",
  },
  {
    id: 4,
    image: assets.main_banner_bg4,
  },
  {
    id: 5,
    image: assets.main_banner_bg3,
  },
];

const slides_mb = [
  {
    id: 1,
    image: assets.main_banner_bg_mb1,
    heading: "India’s Most Affordable Home Salon Home Salon in Delhi.",
    subheading:
      "No need to step out for Salon! Cloud Salon provides all Salon Services near you, including Waxing, facials, Manicures, pedicures, Spa from experienced beauticians, and more.",
  },
  {
    id: 2,
    image: assets.main_banner_bg_mb2,
  },
  {
    id: 3,
    image: assets.main_banner_bg_mb3,
  },
  {
    id: 4,
    image: assets.main_banner_bg_mb4,
  },
  {
    id: 5,
    image: assets.main_banner_bg_mb5,
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const activeSlides = isMobile ? slides_mb : slides;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % activeSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeSlides]);

  return (
    <div className="w-full h-[700px] xl:h-[600px] relative overflow-hidden">
      {activeSlides.map((slide, index) => {
        const isVisible =
          index === currentSlide ||
          index === (currentSlide + 1) % activeSlides.length;
        if (!isVisible) return null;

        return (
          <div
            key={slide.id + "-" + index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <LazyLoadImage
              src={slide.image}
              alt={slide.heading || `Slide ${index + 1}`}
              effect="blur"
              width="100%"
              height="100%"
              className="w-full h-full object-cover"
              visibleByDefault={index === currentSlide}
            />
            {(slide.heading || slide.subheading) && (
              <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-14">
                {slide.heading && (
                  <h1 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-[48%] leading-tight lg:leading-15">
                    {slide.heading}
                  </h1>
                )}
                {slide.subheading && (
                  <p className="text-sm md:text-md lg:text-lg pt-4 text-center md:text-left lg:max-w-[35%]">
                    {slide.subheading}
                  </p>
                )}
              </div>
            )}
          </div>
        );
      })}

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {activeSlides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
