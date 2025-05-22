import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const MainBanner = () => {
  return (
    <div className="relative">
      <img
        src={assets.main_banner_bg}
        alt="banner"
        className="w-full hidden md:block"
      />
      <img
        src={assets.main_banner_bg_sm}
        alt="banner"
        className="w-full md:hidden"
      />

      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-10 ">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-[45%] leading-tight lg:leading-15">
          India’s Most Affordable Home Salon Home Salon in Delhi.{" "}
        </h1>
        <p className="text-md lg:text-md pt-4 text-center md:text-left lg:max-w-[35%] ">
          No need to step out for Salon! Cloud Salon provides all Salon Services
          near you, including Waxing, facials, Manicures, pedicures, Spa from
          experienced beauticians, and more.
        </p>

        <div className="flex items-center mt-6 font-medium rounded-lg">
          <Link
            to={"/collection"}
            className="group flex items-center gap-2 px-7 md:px-9 py-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dull)] hover:text-black  transition rounded text-white cursor-pointer "
          >
            Our Services
            <img
              className="md:hidden transition group-focus:translate-x-1 bg-(--color-primary)"
              src={assets.white_arrow_icon}
              alt="arrow"
            />
          </Link>

          <Link
            to={"/collection"}
            className="group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer"
          >
            Explore deals
            <img
              className="transition group-hover:translate-x-1"
              src={assets.black_arrow_icon}
              alt="arrow"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
