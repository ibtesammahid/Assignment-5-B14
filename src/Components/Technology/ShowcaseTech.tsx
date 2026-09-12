import React, { type Dispatch, type SetStateAction } from "react";
import type { technologyType } from "../../Types/technologytype";
import TechnologyCard from "./TechnologyCard";
// import StackCard from "./StackCard";

interface ShowcaseTechProps {
  technologies: technologyType[];
  stackedTech: technologyType[];
  setStackedTech: Dispatch<SetStateAction<technologyType[]>>
}

const ShowcaseTech = ({ technologies, stackedTech, setStackedTech} : ShowcaseTechProps ) => {
  console.log(technologies, "from showcase");
  return (
    <div className="grid grid-cols-3 gap-5">
      {technologies.map((technology: technologyType) => {
        return (
          <div key={technology.id} >
            <TechnologyCard technology={technology} stackedTech={stackedTech} setStackedTech ={setStackedTech} />
            
            </div>

        );
      })}
    </div>
  );
};

export default ShowcaseTech;
