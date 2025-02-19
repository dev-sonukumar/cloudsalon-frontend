import {
  combo,
  eyebrow,
  facial,
  hair,
  makeup,
  manicure,
  waxing,
} from "../utils/ImgUtils";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  { title: "Hair Style", image: hair, path: "/services/hair-style" },
  { title: "MakeUp", image: makeup, path: "/services/makeup" },
  { title: "Face-Threading", image: eyebrow, path: "/services/face-threading" },
  { title: "Facial", image: facial, path: "/services/facial" },
  { title: "Waxing", image: waxing, path: "/services/waxing" },
  {
    title: "Manicure-Pedicure",
    image: manicure,
    path: "/services/manicure-pedicure",
  },
  { title: "Combo-Pack", image: combo, path: "/services/combo-pack" },
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

const OurServices = () => {
  return (
    <div className="bg-[var(--main-color2)] px-5 py-10 pb-20">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "circIn" }}
          className="text-2xl md:text-3xl font-extrabold mb-10 text-center text-[var(--main-color)]"
        >
          Our Services
        </motion.h2>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="relative bg-white bg-opacity-80 backdrop-blur-md hover:shadow-2xl transition-all p-5 rounded-2xl shadow-md cursor-pointer"
            >
              <Link to={service.path}>
                <div className="w-full rounded-lg flex justify-center items-center overflow-hidden mb-3">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full  object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <h3 className="text-black text-sm sm:text-lg font-bold text-center">
                  {service.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OurServices;
