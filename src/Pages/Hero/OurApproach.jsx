import { heroImage1, heroImage2, heroImage3 } from "@/utils/ImgUtils";
import { fadeIn } from "@/utils/varients";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

const approachData = [
  {
    title: "Luxury with Expert Beauticians",
    description:
      "Get high-quality beauty treatments by certified, experienced professionals at prices that won’t break the bank.",
    bgImage: heroImage1,
    number: "01",
  },
  {
    title: "Safe, Hygienic & Personalized Care",
    description:
      "We prioritize your safety with strict hygiene protocols and provide personalized services tailored to your skin and beauty needs.",
    bgImage: heroImage2,
    number: "02",
  },
  {
    title: "Convenience at Your Doorstep",
    description:
      "No need to step out! Enjoy professional salon services in the comfort and privacy of your home—saving time and effort.",
    bgImage: heroImage3,
    number: "03",
  },
];

const OurApproach = () => {
  return (
    <section className="my-20">
      <section className="container flex flex-col lg:flex-row gap-10">
        {/* Left Section */}
        <div className="lg:w-1/2">
          <div className="max-w-6xl mx-auto">
            <button className="border px-3 py-2 rounded-xl mb-5">
              Our Approach
            </button>

            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-5xl font-extrabold text-[var(--heading-color)] mb-10"
            >
              Professional Expertise in Beauty Consultation
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[var(--paragraph-color)] text-lg mb-14 max-w-3xl mx-auto"
            >
              To build a successful digital solution, we follow a
              well-maintained structured approach that ensures functionality,
              durability, and scalability, aligning with BIS certification
              standards.
            </motion.p>
            <div className="flex items-center gap-5 mt-5 relative">
              <h2 className="font-semibold">Learn More</h2>

              <Link
                to={"/services"}
                className="group border border-[var(--color-black)] rounded-full w-16 h-16 lg:w-24 lg:h-24 flex justify-center items-center transition-transform transform hover:scale-125 hover:bg-[var(--color-black)]"
                aria-label="Know More"
              >
                <ArrowUpRight className="text-[var(--color-black)] transition-colors group-hover:text-white" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section - Approach Cards */}
        <div className="lg:w-1/2">
          <div className="grid grid-cols-1 gap-3 w-full ">
            {approachData.map((item, index) => (
              <motion.div
                key={index}
                className="flex  justify-center relative bg-blue-500  p-8 rounded-xl shadow-md overflow-hidden group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Background Image Slide Effect - Initially Hidden */}
                <div className="flex justify-center">
                  <div
                    className="absolute top-0 left-0 w-0 h-full opacity-0 transition-all duration-700 ease-in-out group-hover:w-full group-hover:opacity-100 bg-no-repeat bg-center"
                    style={{
                      backgroundImage: `url(${item.bgImage})`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                  {/* Overlay to Improve Readability */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-700"></div>

                  {/* Content */}
                  <div className="relative z-10 group-hover:text-gray-900 transition-colors duration-700">
                    <h3 className="text-2xl font-bold mb-4 text-gray-100">
                      {item.title}
                    </h3>
                    <p className="text-base text-gray-400">
                      {item.description}
                    </p>
                  </div>
                  <section>
                    <h2
                      className="text-7xl font-extrabold text-transparent  "
                      style={{ WebkitTextStroke: "2px  white " }}
                    >
                      {item.number}
                    </h2>
                  </section>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default OurApproach;
