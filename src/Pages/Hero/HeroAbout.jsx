import { heroImage1 } from "@/utils/ImgUtils";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/varients";
// import TextMovingAnimation from "../AminamtionPages/TextMovingAnimation";

const HeroAbout = () => {
  return (
    <div className="w-full overflow-hidden bg-[var(--main-color2)]  pb-20 px-5 ">
      {/* <div className="pb-10">
        <TextMovingAnimation
          spanText={"Empower Your Business:"}
          mainText={
            "Your Trusted Consultant for Legal Business Compliance Solutions."
          }
        />
      </div> */}

      {/* ----- About ----- */}

      <section className="w-full  container flex  flex-col lg:flex-row  gap-10 lg:gap-20 text-[var(--color-black)] ">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <img src={heroImage1} alt="About Us" className="rounded-2xl" />
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="lg:w-1/2  "
        >
          <h2 className="text-2xl md:text-5xl font-extrabold text-[var(--main-color)]">
            Who we are ?
          </h2>

          <p className="pt-5 text-[var(--paragraph-color)]  pb-3">
            Welcome to Cloud Salon – Delhi’s Most Affordable Home Salon
            Experience! No more salon visits or waiting in queues! Cloud Salon
            brings premium beauty services right to your doorstep. Whether
            you’re looking for waxing, facials, manicures, pedicures, spa
            treatments, or bridal makeup, our team of certified and experienced
            beauticians ensures a luxurious salon experience at home.
          </p>
          <div>
            <ul className="text-[var(--paragraph-color)]">
              <li>
                <span className="font-extrabold"> Hygienic & Safe – </span>
                We follow strict sanitization protocols for your safety.
              </li>
              <li>
                <span className="font-extrabold"> Affordable Pricing – </span>
                Quality services without breaking the bank.
              </li>
              <li>
                <span className="font-extrabold"> Convenient Booking – </span>
                Choose your preferred time, and we’ll be there!
              </li>
              <li>
                <span className="font-extrabold">
                  {" "}
                  Professional Beauticians –
                </span>
                Skilled experts delivering salon-like results.
              </li>
            </ul>
          </div>
          <p className="pt-3 text-[var(--paragraph-color)]  lg:mb-10">
            Relax, unwind, and get pampered in the comfort of your home with
            Cloud Salon – where beauty meets convenience. Book your appointment
            today and experience the future of home salon services in Delhi!
          </p>
          <div className="flex items-center gap-5 mt-5">
            <h2>Know More</h2>
            <Link
              to="/services" // Replace with your actual route
              className="group border border-[var(--color-black)] rounded-full w-16 h-16 lg:w-24 lg:h-24 flex justify-center items-center transition-all ease-out transform hover:scale-150 lg:hover:scale-125 hover:bg-[var(--color-black)]"
              aria-label="Know More"
            >
              <ArrowUpRight className="text-[var(--color-black)] transition-colors group-hover:text-white" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HeroAbout;
