// import Hero from "./Components/hero"
import { Suspense, useState } from "react";
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
  // const technologyPromise = technologyFetch();
  const [technologyPromise] = useState(() => technologyFetch());
      const [stackedTech, setStackedTech] = useState<technologyType[]>([])
  

  return (
    <>
      <Navbar />
      <Banner />

      <h2 className="font-bold text-4xl ml-22 mt-25 ">
        Explore the{" "}
        <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>

      <p className="text-[#64748B] ml-22 mt-3">
        Pick one technology per category to build your ideal stack
      </p>

      <div className="flex justify-between gap-5 mx-22 my-10">
        <Suspense fallback={<p>Loding...</p>}>
          <Technology technologyPromise={technologyPromise} stackedTech={stackedTech} setStackedTech={setStackedTech}   />
          <StackCard stackedTech={stackedTech} setStackedTech={setStackedTech} />
        </Suspense>
      </div>
    </>
  );
}

export default App;
