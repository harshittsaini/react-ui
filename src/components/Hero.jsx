import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col h-screen w-full justify-center items-center mx-auto mt-[-96px]">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl md:py-5 pb-3">
          Grow with data.
        </h1>
        <div className="flex">
          <p className="md:text-4xl sm:text-3xl text-xl font-bold md:py-3">
            fast, flexible financing for {" "}
          </p>
          <ReactTyped
            className="md:text-4xl sm:text-3xl text-xl font-bold md:py-3 pl-2"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500 py-4 px-8">Monitor your data analytics to increase revenue for BTB, BTC & SAAS platforms.</p>
        <button className="bg-[#00df9a] w-[200px] rounded-lg py-3 mx-auto my-6 font-bold text-black">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
