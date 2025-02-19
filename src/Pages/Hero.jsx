import { Phone } from "lucide-react";
import { animationHero, bg } from "../utils/ImgUtils";
import animationImg from "../../public/assets/animation/animation-hero.json";
import Lottie from "lottie-react";

const Hero = () => {
  const animations = [animationHero]; // ✅ Correct

  // Check if any animation is missing
  if (
    animations.some(
      (animationImg) => !animationImg || Object.keys(animationImg).length === 0
    )
  ) {
    return (
      <div className="h-screen flex  items-center justify-center bg-gray-900 text-white">
        ❌ One or more animations not found!
      </div>
    );
  }

  return (
    <section
      className="bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bg - 1})` }}
    >
      <div className="w-full mt-10  flex justify-center items-center ">
        <div className="container px-5 pb-12 flex flex-col lg:flex-row justify-center items-center ">
          <div>
            <>
              {/* <img src={bg} className=" absolute bg-right" /> */}

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-black text-400 mb-4 hover:text-[var(--main-color)] transition-colors duration-300 ">
                India’s Most Affordable Home Salon
                <span className="text-[var(--main-color3)] ">
                  {" "}
                  Home Salon{"  "}
                </span>{" "}
                in Delhi, India.
              </h1>
              <p className="text-sm md:text-lg  text-gray-600 max-w-[60rem]">
                No need to step out for Salon! Cloud Salon provides all Salon
                Services near you, including Waxing, facials, Manicures,
                pedicures, Spa from experienced beauticians, and more.
              </p>

              {/* -- Call Button --*/}
              <div className=" h-[50px] mt-10 mx-auto  flex items-center justify-center lg:justify-start ">
                <a href="tel:+917065995901">
                  <button
                    aria-label="Call Now"
                    className="bg-[var(--main-color)] p-3 shadow rounded-xl flex items-center text-white hover:bg-gray-300 hover:text-[var(--color5)] transition-all  font-bold animate-bounce"
                  >
                    <Phone
                      className="mr-2 transition-transform duration-200"
                      size={16}
                    />
                    +91-9315040549
                  </button>
                </a>
              </div>
              {/* <img src={asset18} className="lg:absolute " /> */}
            </>
          </div>
          <div className="w-1/2">
            <Lottie animationData={animationImg} loop autoplay />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
