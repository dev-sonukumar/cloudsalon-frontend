import {
  combo1,
  facial1,
  hair1,
  makeup1,
  manicure1,
  threading1,
  waxing1,
} from "../utils/ImgUtils";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";

const services = [
  {
    title: "Hair Style",
    image: hair1,
    path: "/services/hair-style",
    icon: <ChevronRight />,
  },
  {
    title: "MakeUp",
    image: makeup1,
    path: "/services/makeup",
    icon: <ChevronRight />,
  },
  {
    title: "Face-Threading",
    image: threading1,
    path: "/services/face-threading",
    icon: <ChevronRight />,
  },
  {
    title: "Facial",
    image: facial1,
    path: "/services/facial",
    icon: <ChevronRight />,
  },
  {
    title: "Waxing",
    image: waxing1,
    path: "/services/waxing",
    icon: <ChevronRight />,
  },
  {
    title: "Manicure-Pedicure",
    image: manicure1,
    path: "/services/manicure-pedicure",
    icon: <ChevronRight />,
  },
  {
    title: "Combo-Pack",
    image: combo1,
    path: "/services/combo-pack",
    icon: <ChevronRight />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

const SkeletonLoader = () => (
  <div className="animate-pulse bg-gray-300 rounded-2xl w-full h-40"></div>
);

const OurServices = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imagePromises = services.map((service) => {
      return new Promise((resolve) => {
        const image = new Image();
        image.src = service.image;
        image.onload = resolve;
      });
    });
    Promise.all(imagePromises).then(() => setIsLoading(false));
  }, []);

  return (
    <div className="px-5 py-10 pb-20">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "circIn" }}
          className="text-2xl md:text-4xl font-extrabold mb-10 text-center text-[var(--main-color)]"
        >
          Our Services
        </motion.h2>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="relative bg-white bg-opacity-80 backdrop-blur-md hover:shadow-2xl transition-all p-2 md:p-3 rounded-2xl shadow-md cursor-pointer"
            >
              {isLoading ? (
                <SkeletonLoader />
              ) : (
                <Link to={service.path}>
                  <div className="w-full rounded-lg flex justify-center items-center overflow-hidden mb-3">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <h3 className="flex gap-3 justify-center items-center text-black text-sm sm:text-lg font-bold ">
                    {service.title}
                    {service.icon}
                  </h3>
                </Link>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OurServices;
