import { motion, useScroll, useTransform } from "framer-motion";
import { Star } from "lucide-react";
import { heroImage1 } from "@/utils/ImgUtils";

const HeroAnimation = () => {
  const { scrollY } = useScroll();

  // Animate opacity and Y position
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const y = useTransform(scrollY, [0, 200], [0, -50]);

  return (
    <motion.div
      className="ml-52 mt-10 lg:mt-0 lg:ml-32 mb-12"
      style={{ opacity, y }} // Smooth scroll effect
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex justify-center items-center">
        <motion.div
          className="absolute"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 7, ease: "linear" }}
        >
          <div className="w-40 h-40 lg:w-56 lg:h-56 border-2 border-gray-300 rounded-full flex justify-center items-center">
            <img
              src={heroImage1}
              className="w-32 h-32 lg:w-48 lg:h-48 bg-white rounded-full object-cover shadow-lg"
              alt="Profile"
            />
          </div>
        </motion.div>
        <Star className="text-yellow-500 w-6 h-6 z-40" />
      </div>
    </motion.div>
  );
};

export default HeroAnimation;
