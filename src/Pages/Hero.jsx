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
import Slider from "react-slick";
import HeroChildOne from "./HeroChildOne";

const images = [
  heroImage1,
  heroImage2,
  heroImage3,
  heroImage4,
  heroImage5,
  heroImage6,
];

const Hero = () => {
  const animations = [animationHero]; // ✅ Correct
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Check if any animation is missing
  if (
    animations.some(
      (animationImg) => !animationImg || Object.keys(animationImg).length === 0
    )
  ) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
        ❌ One or more animations not found!
      </div>
    );
  }

  return (
    <section className="bg-no-repeat bg-cover">
      <div className="w-full mt-10 flex  justify-center items-center">
        <div className="container px-5 md:px-0 pb-12 flex flex-col-reverse md:flex-col lg:flex-row justify-center items-center gap-10">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-black text-400 mb-2 hover:text-[var(--main-color)] transition-colors duration-300">
              India’s Most Affordable Home Salon
              <span className="text-[var(--main-color)]"> Home Salon </span> in
              Delhi.
            </h1>
            <p className="text-[12px] md:text-lg text-gray-600 max-w-[60rem]">
              No need to step out for Salon! Cloud Salon provides all Salon
              Services near you, including Waxing, facials, Manicures,
              pedicures, Spa from experienced beauticians, and more.
            </p>
            {/* -- Call Button --*/}
            <div className="h-[50px] mt-7 mx-auto flex items-center justify-center lg:justify-start gap-4">
              <a href="tel:+917065995901">
                <button
                  aria-label="Call Now"
                  className="bg-[var(--main-color)] p-3 shadow rounded-xl flex items-center text-white hover:bg-gray-300 hover:text-[var(--color5)] transition-all font-bold animate-bounce"
                >
                  <Phone
                    className="mr-2 transition-transform duration-200"
                    size={16}
                  />
                  +91-9315040549
                </button>
              </a>
            </div>
          </div>
          <div className=" md:w-1/2 rounded-xl">
            {/* --- Image Grid Slide section --- */}
            <section className="hidden md:inline">
              <div className="md:h-[450px] grid grid-cols-3 grid-rows-2 gap-2 p-4">
                <motion.div
                  className="col-span-1 row-span-1 overflow-hidden mt-7 rounded-xl"
                  initial={{ opacity: 0, x: -50 }} // From left
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  whileHover={{ scale: 1.05 }} // Hover effect
                >
                  <img
                    src={heroImage2}
                    alt="Portrait 1"
                    className="w-full object-cover border rounded-xl"
                  />
                </motion.div>

                <motion.div
                  className="col-span-1 row-span-2 overflow-hidden rounded-xl"
                  initial={{ opacity: 0, y: 100 }} // From bottom
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={heroImage1}
                    alt="Portrait 2"
                    className="w-full h-full object-cover border rounded-xl"
                  />
                </motion.div>

                <motion.div
                  className="col-span-1 row-span-1 overflow-hidden rounded-xl"
                  initial={{ opacity: 0, x: 100 }} // From right
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={heroImage3}
                    alt="Portrait 3"
                    className="w-[480px] object-cover border rounded-xl mt-4"
                  />
                </motion.div>

                <motion.div
                  className="col-span-1 row-span-1 overflow-hidden flex justify-end rounded-xl"
                  initial={{ opacity: 0, y: -50 }} // From top
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.4 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={heroImage4}
                    alt="Portrait 4"
                    className="w-[140px] h-[140px] object-cover border rounded-xl"
                  />
                </motion.div>

                <motion.div
                  className="col-span-1 row-span-1 overflow-hidden rounded-xl"
                  initial={{ opacity: 0, x: -50 }} // From left
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={heroImage6}
                    alt="Portrait 5"
                    className="w-[140px] object-cover border rounded-xl"
                  />
                </motion.div>
              </div>
            </section>

            {/* --- Image Slide Section --- */}
           <HeroChildOne/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
