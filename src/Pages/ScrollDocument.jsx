import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Lottie from "lottie-react";
import { MdVerified } from "react-icons/md";
import {
  FaSearch,
  FaCog,
  FaCheckCircle,
  FaThumbsUp,
  FaAward,
} from "react-icons/fa";
import animation1 from "../../public/assets/animation/animation1.json";
import animation2 from "../../public/assets/animation/animation2.json";
import animation3 from "../../public/assets/animation/animation3.json";
import animation4 from "../../public/assets/animation/animation4.json";
import animation5 from "../../public/assets/animation/animation5.json";
import animation6 from "../../public/assets/animation/animation6.json";

const Scroll3DEffect = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const animations = [
    { animation: animation1, title: "Identify product", icon: <FaSearch /> },
    { animation: animation2, title: "Prepare documents", icon: <FaCog /> },
    {
      animation: animation3,
      title: "Submit an application",
      icon: <FaCheckCircle />,
    },
    {
      animation: animation4,
      title: "Testing & inspection",
      icon: <FaThumbsUp />,
    },
    {
      animation: animation5,
      title: "Successful verification",
      icon: <MdVerified />,
    },
    { animation: animation6, title: "Your license", icon: <FaAward /> },
  ];

  return (
    <div
      className="overflow-hidden pb-20 flex flex-col items-center justify-center space-y-24 px-4 sm:px-8"
      ref={ref}
    >
      {animations.map((item, index) => {
        const animRef = useRef(null);
        const { scrollYProgress } = useScroll({
          target: animRef,
          offset: ["start center", "end center"],
        });

        const rotateX = useTransform(scrollYProgress, [0, 1], [20, -20]);
        const rotateY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
        const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);
        const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

        return (
          <motion.div
            key={index}
            ref={animRef}
            style={{ rotateX, rotateY, scale, opacity }}
            className="w-full min-h-[30rem] flex flex-col items-center justify-center"
          >
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center container text-center lg:text-left ">
              {/* Text Content */}
              <div className="lg:w-[75%] flex flex-col  justify-center items-center">
                <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                  Key steps in the certification process:
                </h3>
                <h2 className="text-4xl sm:text-5xl lg:text-5xl xl:text-7xl font-extrabold mb-4 flex items-center justify-between lg:justify-start">
                  {item.title}{" "}
                  <span className="ml-5 hidden lg:flex">{item.icon}</span>
                </h2>
                <div>
                  <span className="lg:hidden text-4xl sm:text-6xl lg:text-6xl  font-extrabold mb-4 items-center justify-between lg:justify-start">
                    {item.icon}
                  </span>
                </div>
              </div>

              {/* Animation */}
              <div className="lg:w-1/3 flex justify-center">
                <Lottie
                  animationData={item.animation}
                  className="max-w-xs sm:max-w-md"
                />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Scroll3DEffect;
