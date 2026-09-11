import React from "react";
import type { technologyType } from "../../Types/technologytype";
import { GiRoundStar } from "react-icons/gi";

const TechnologyCard = ({ technology }: { technology: technologyType }) => {
  return (
    <div >
      <div className="card bg-base-100 w-60 h-75 shadow-sm">
      <figure >
        <img className="items-start h-10  object-fill" src={technology.logo} alt="logo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{technology.name}</h2>
        <p className="text-gray-500">{technology.description}</p>
        <div>
          <ul className="flex justify-between ">
            <li className="text-[11px] border border-gray-200 bg-[#eaf2fd] px-0.75 rounded-[4px]">{technology.category}</li>
            <li className="text-[11px] text-gray-500">{technology.difficulty}</li>
            <li className="text-[11px] flex items-center font-semibold"> <span className="text-amber-300"><GiRoundStar /></span>{technology.rating}</li>
          </ul>
        </div>
        <div className="card-actions justify-center ">
          <button className="bg-[#1E1E1E] text-white p-2 mt-2 w-200 rounded-[10px]">Select</button>
        </div>
      </div>
    </div>
    
  

    </div>
  );
};

export default TechnologyCard;
