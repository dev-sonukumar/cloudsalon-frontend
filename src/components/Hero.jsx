import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { assets } from "../assets/assets";

// Desktop Banners
const desktopSlides = [
  { id: 1, image: assets.main_banner_pc_bg1 },
  { id: 2, image: assets.main_banner_pc_bg2 },
  { id: 3, image: assets.main_banner_pc_bg3 },
  { id: 4, image: assets.main_banner_pc_bg4 },
  { id: 5, image: assets.main_banner_pc_bg5 },
];

// Mobile Banners
const mobileSlides = [
  { id: 1, image: assets.main_banner_bg1 },
  { id: 2, image: assets.main_banner_bg2 },
  { id: 3, image: assets.main_banner_bg3 },
  { id: 4, image: assets.main_banner_bg4 },
  { id: 5, image: assets.main_banner_bg5 },
];

export default function HeroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: false,
    lazyLoad: "ondemand",
  };

  return (
    <>
      {/* Desktop Slider */}
      <div className="hidden md:block w-full h-[400px] lg:h-[500px]">
        <Slider {...settings}>
          {desktopSlides.map(({ id, image }) => (
            <div key={id} className="h-[400px] lg:h-[500px]">
              <img
                src={image}
                loading="lazy"
                className="w-full h-full object-contain"
                alt={`Slide ${id}`}
                draggable={false}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Mobile Slider */}
      <div className="block md:hidden w-full h-[200px] sm:h-[280px]">
        <Slider {...settings}>
          {mobileSlides.map(({ id, image }) => (
            <div key={id} className="h-[200px] sm:h-[280px]">
              <img
                src={image}
                loading="lazy"
                className="w-full h-full object-cover"
                alt={`Mobile Slide ${id}`}
                draggable={false}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
