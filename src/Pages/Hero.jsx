import { Phone } from "lucide-react";
import { bg } from "../utils/ImgUtils";
import animationImg from "../../public/assets/animation/animation0.json";
import Lottie from "lottie-react";

const Hero = () => {
  const animations = [animationImg]; // ✅ Correct

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
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full mt-10 md:mt-0  flex justify-center items-center">
        <div className="container pb-12 flex flex-col lg:flex-row justify-center items-center ">
          <div className=" px-4 sm:px-6 lg:px-8 w-[90%] ">
            <>
              {/* <img src={bg} className=" absolute bg-right" /> */}

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl font-black text-400 mb-4 hover:text-[var(--main2-color)] transition-colors duration-300 ">
                Best consulting firm for{" "}
                <span className="text-[var(--main-color)]">BIS, EPR </span> and
                various other certifications in Delhi, India.
              </h1>
              <p className="text-sm sm:text-base md:text-lg xl:text-2xl 2xl:text-3xl text-gray-600 max-w-[60rem]">
                We are an Indian firm specializing in{" "}
                <span className="text-[var(--main-color)]">
                  BIS, LMPC, EPR Certificate , and{" "}
                </span>
                <span className="text-[var(--main-color)]">
                  various other certifications
                </span>{" "}
                that will help you enter or sell in the Indian market at a
                reasonable price. Our expert team ensures a smooth and
                hassle-free certification process, making compliance quick and
                cost-effective.
              </p>

              {/* -- Call Button --*/}
              <div className="inline-block h-[50px] mt-10">
                <a href="tel:+917065995901">
                  <button
                    aria-label="Call Now"
                    className="bg-[var(--main-color)] p-3 shadow rounded-xl flex items-center text-white hover:bg-gray-300 hover:text-[var(--color5)] transition-all  font-bold animate-bounce"
                  >
                    <Phone
                      className="mr-2 transition-transform duration-200"
                      size={16}
                    />
                    +91-7065995901
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
