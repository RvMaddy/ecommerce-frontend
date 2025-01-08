import { assets } from "@/assets/assets";
import React from "react";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img className="w-12 m-auto mb-5" src={assets.exchange_icon} alt="" />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">We Offer hassle free exchange policy</p>
      </div>
      <div>
        <img className="w-12 m-auto mb-5" src={assets.quality_icon} alt="" />
        <p className="font-semibold">7 Days Exchange Policy</p>
        <p className="text-gray-400">We Provide 7 days return policy</p>
      </div>
      <div>
        <img className="w-12 m-auto mb-5" src={assets.support_img} alt="" />
        <p className="font-semibold">Best customer support</p>
        <p className="text-gray-400">We provide 24X7 customer support policy</p>
      </div>
    </div>
  );
};

export default OurPolicy;
