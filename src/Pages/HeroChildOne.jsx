import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  heroImage1,
  heroImage2,
  heroImage3,
  heroImage4,
  heroImage5,
  heroImage6,
} from "@/utils/ImgUtils";

const images = [
  heroImage1,
  heroImage2,
  heroImage3,
  heroImage4,
  heroImage5,
  heroImage6,
];

const HeroChildOne = () => {
  return (
    <section className="md:hidden rounded-xl">
      <div className="relative w-screen h-[45vh] overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          className="h-full"
          breakpoints={{
            640: { slidesPerView: 1 },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="object-cover "
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroChildOne;
