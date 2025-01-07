import React from "react";

import tick from "../assets/images/hero/tick.svg";
function Benefits() {
  return (
    <div className="container w-[1200px] mx-auto h-[733px] flex mt-[100px] ">
      <div className="bg-benefitsimg w-[700px]"></div>
      <div className="w-[550px] pl-5">
        <h5 className="font-grace text-EEC044 text-[24px]">
          Our Farm Benefits
        </h5>
        <h1 className="font-manrope font-extrabold text-1F1E17 text-[48px]">
          Why Choose Agrios Market
        </h1>

        <p className="font-manrope font-medium text-878680 text-[16px] mt-5 mb-5">
          There are many variations of passages of available but the majortity
          have sufferred alteration in some form by injected humor or random
          word which don't look even.
        </p>
        <div className="flex flex-col gap-[20px]">
          <div className="flex">
            <div>
              <img className="w-[40px] h-[40px]" src={tick} alt="" />
            </div>
            <div className="ml-3">
              <h1 className="font-manrope font-extrabold text-1F1E17 text-[24px]">
                Quality Organic Food
              </h1>
              <p className="font-manrope font-medium text-878680 text-[16px] mt-2 mb-2">
                There are variation You need to be sure there is anything hidden
                in the middle of text.
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <img className="w-[40px] h-[40px]" src={tick} alt="" />
            </div>
            <div className="ml-3">
              <h1 className="font-manrope font-extrabold text-1F1E17 text-[24px]">
                Professional Farmers
              </h1>
              <p className="font-manrope font-medium text-878680 text-[16px] mt-2 mb-2">
                There are variation You need to be sure there is anything hidden
                in the middle of text.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <img className="w-[40px] h-[40px]" src={tick} alt="" />
            </div>
            <div className="ml-3">
              <h1 className="font-manrope font-extrabold text-1F1E17 text-[24px]">
                Quality Products
              </h1>
              <p className="font-manrope font-medium text-878680 text-[16px] mt-2 mb-2">
                There are variation You need to be sure there is anything hidden
                in the middle of text.
              </p>
            </div>
          </div>
          <div className="mt-[18px]">
            <button className="w-[200px]  h-[60px] bg-4BAF47 font-manrope font-bold text-[14px] text-white rounded-[10px]">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
