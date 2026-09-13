import banner from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="  sm:flex sm:min-h-130 mt-15 sm:-mt-1 items-center justify-between px-20 ">
      <div className="max-w-xl ml-2">
        <h2 className="sm:text-left text-center sm:text-6xl text-5xl font-bold">
          Build Your Ideal <br />{" "}
          <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h2>
        <p className="mt-5 mb-10 text-lg text-gray-600 sm:text-left text-center">
          Explore Frontend, Backend, Database, and Tooling Options,{" "}
          <br className="" />
          compare them side by side and put together the stack that fits your
          <br className="hidden sm:block" /> next project.
        </p>
        <div className="sm:flex sm:gap-2 sm:justify-start flex justify-center gap-4 ">
          <button className="bg-linear-to-r from-[#F97316] to-[#EC4899] text-white sm:py-1.5 sm:w-45 sm:px-2 py-2 w-full rounded-md hover:scale-105">
            Explore Technologies
          </button>
          <button className="sm:py-1.5 sm:w-45 py-2 w-full border border-gray-300 rounded-md hover:scale-105">
            Learn More
          </button>
        </div>
      </div>

      <div className="-mr-4 ">
        <img
          src={banner}
          alt=""
          className="sm:h-100 sm:w-125 w-300 h-180 -mt-20 sm:mt-10 object-cover"
        />
      </div>
    </section>
  );
};

export default Banner;
