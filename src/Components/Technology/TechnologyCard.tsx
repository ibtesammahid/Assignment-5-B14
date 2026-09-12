import React, { useState, type Dispatch, type SetStateAction } from "react";
import type { technologyType } from "../../Types/technologytype";
import { GiRoundStar } from "react-icons/gi";
import StackCard from "./StackCard";

interface TechnologyCardProps {
  technology: technologyType
  stackedTech: technologyType[];
  setStackedTech: Dispatch<SetStateAction<technologyType[]>>;
}



const TechnologyCard = ({ technology,stackedTech, setStackedTech}: TechnologyCardProps ) => {
  const [isStacked, setIsStacked] = useState(false);
  console.log();
  const handleAddToStack = ()=> {
  setStackedTech([...stackedTech, technology]);
  setIsStacked(true)
}

  return (
    <div>
      <div className="card bg-base-100 w- h-75 shadow-sm">
        <figure>
          <img
            className="h-10 mt-3 object-contain"
            src={technology.logo}
            alt="logo"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold -mt-2">{technology.name}</h2>
          <p className="text-gray-500">{technology.description}</p>
          <div>
            <ul className="flex justify-between ">
              <li className="text-[11px] border border-gray-200 bg-[#eaf2fd] px-0.75 rounded-[4px]">
                {technology.category}
              </li>
              <li className="text-[11px] text-gray-500">
                {technology.difficulty}
              </li>
              <li className="text-[11px] flex items-center font-semibold">
                {" "}
                <span className="text-amber-300">
                  <GiRoundStar />
                </span>
                {technology.rating}
              </li>
            </ul>
          </div>
          <div className="card-actions justify-center ">
            <button
              onClick={handleAddToStack}
              className="bg-[#1E1E1E] text-white p-2 mt-2 w-200 rounded-[10px] transition-all hover:scale-105 cursor-pointer"
              disabled={isStacked ? true:false}
              
            >
              {isStacked === true ? "Stacked" : "Add To Stack"}
            </button>
          </div>
        </div>
      </div>

      {/* <StackCard stackedTech={stackedTech} /> */}
    </div>
  );
};

export default TechnologyCard;
