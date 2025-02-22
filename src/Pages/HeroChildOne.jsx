import {
  animationHero,
  heroImage1,
  heroImage2,
  heroImage3,
  heroImage4,
  heroImage5,
  heroImage6,
} from "../utils/ImgUtils";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { useState, useEffect } from "react";

const images = [
  heroImage1,
  heroImage2,
  heroImage3,
  heroImage4,
  heroImage5,
  heroImage6,
];

const SkeletonLoader = () => (
  <div className="animate-pulse bg-gray-300 rounded-xl w-full h-full"></div>
);

const HeroChildOne = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imagePromises = images.map((img) => {
      return new Promise((resolve) => {
        const image = new Image();
        image.src = img;
        image.onload = resolve;
      });
    });
    Promise.all(imagePromises).then(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="md:hidden rounded-xl">
      <div className="overflow-hidden relative w-full h-[35vh] rounded-xl">
        {isLoading ? (
          <SkeletonLoader />
        ) : (
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt="Slider Image"
            className="w-full object-cover rounded-xl"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          />
        )}
      </div>
    </section>
  );
};

export default HeroChildOne;
