import React from "react";
import banner from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="flex min-h-125 items-center justify-between px-20">
      <div className="max-w-xl ml-2">
        <h2 className="  text-6xl font-bold">
          Build Your Ideal <br />{" "}
          <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h2>
        <p className="mt-5 mb-10 text-lg text-gray-600  ">
          Explore Frontend, Backend, Database, and Tooling Options, <br />{" "}
          compare them side by side and put together the stack that fits your{" "}
          <br /> next project.
        </p>
        <div className="flex gap-2">
          <button className="bg-linear-to-r from-[#F97316] to-[#EC4899] text-white py-1.5 px-2 rounded-md hover:scale-105">
            Explore Technologies
          </button>
          <button className="py-1.5 px-10 border border-gray-300 rounded-md hover:scale-105">
            Learn More
          </button>
        </div>
      </div>

      <div className="-mr-4">
        <img src={banner} alt="" />
      </div>
    </section>
  );
};

export default Banner;
