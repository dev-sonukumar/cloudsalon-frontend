import { assets, features } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const BottomBanner = () => {
  const navigate = useNavigate();

  return (
    <div className="relative mt-24">
      <img
        src={assets.bottom_banner_image}
        alt="banner"
        className="w-full hidden md:block"
      />
      {/* <img
        src={assets.bottom_banner_image_sm}
        alt="banner"
        className="w-full md:hidden"
      /> */}
      <video
        onClick={() => navigate("/products")}
        src={assets.bottom_banner_video_sm}
        className="w-full md:hidden"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      <div className="w-full hidden md:block absolute inset-0 lg:w-full h-full lg:flex justify-center lg:items-center ">
        <div className="mt-10 lg:mt-0 lg:mr-auto lg:ml-20">
          <h1 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
            Why We Are the Best?
          </h1>
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4 mt-2">
              <img
                src={feature.icon}
                alt={feature.title}
                className="md:w-6 w-6"
              />
              <div>
                <h3 className="text-lg md:text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="text-gray-500/70 text-xs md:text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
