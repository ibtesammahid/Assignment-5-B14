import React from "react";
import type { technologyType } from "../../Types/technologytype";
import TechnologyCard from "./TechnologyCard";
// import StackCard from "./StackCard";

const ShowcaseTech = ({ technologies } :{technologies:technologyType[]}) => {
  console.log(technologies, "from showcase");
  return (
    <div className="grid grid-cols-3 gap-10 ">
      {technologies.map((technology: technologyType) => {
        return (
          <div>
            <TechnologyCard key={technology.id} technology={technology}/>
            
            </div>

        );
      })}
    </div>
  );
};

export default ShowcaseTech;
