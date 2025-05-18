import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img
          src={assets.exchange_icon}
          className="w-12 m-auto mb-5"
          alt="Hygiene Icon"
        />
        <p className="font-semibold">Strict Hygiene Protocols</p>
        <p className="text-gray-400">
          We ensure sanitized tools & disposable kits for every service.
        </p>
      </div>

      <div>
        <img
          src={assets.quality_icon}
          className="w-12 m-auto mb-5"
          alt="Certified Beautician Icon"
        />
        <p className="font-semibold">Certified Beauticians</p>
        <p className="text-gray-400">
          Experienced, background-verified beauty professionals at your
          doorstep.
        </p>
      </div>

      <div>
        <img
          src={assets.support_img}
          className="w-12 m-auto mb-5"
          alt="Support Icon"
        />
        <p className="font-semibold">On-Time & Reliable Service</p>
        <p className="text-gray-400">
          We value your time — punctual and professional services, always.
        </p>
      </div>
    </div>
  );
};

export default OurPolicy;
