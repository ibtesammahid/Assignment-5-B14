// import Hero from "./Components/hero"
import { Suspense } from "react";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Technology from "./Components/Technology/Technology";
import type { technologyType } from "./Types/technologytype";
import StackCard from "./Components/Technology/StackCard";

const technologyFetch = async (): Promise<technologyType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const technologyPromise = technologyFetch();

  return (
    <>
      <Navbar />
      <Banner />
      <h2 className="font-bold text-4xl ml-22 ">
        Explore the{" "}
        <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>
      <p className="text-[#64748B] ml-22 mt-3">
        Pick one technology per category to build your ideal stack
      </p>
      <div className="flex justify-between mx-22 my-10">
        <Suspense fallback={<p>Loding...</p>}>
          <Technology technologyPromise={technologyPromise} />
          <StackCard />
        </Suspense>
      </div>
    </>
  );
}

export default App;
