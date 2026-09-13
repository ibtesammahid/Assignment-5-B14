import { type Dispatch, type SetStateAction } from "react";
import type { technologyType } from "../../Types/technologytype";
import TechnologyCard from "./TechnologyCard";

interface ShowcaseTechProps {
  technologies: technologyType[];
  stackedTech: technologyType[];
  setStackedTech: Dispatch<SetStateAction<technologyType[]>>;
}

const ShowcaseTech = ({
  technologies,
  stackedTech,
  setStackedTech,
}: ShowcaseTechProps) => {
  return (
    <div className="sm:grid sm:grid-cols-3 sm:gap-5 grid grid-cols-1 gap-5">
      {technologies.map((technology: technologyType) => {
        return (
          <div key={technology.id}>
            <TechnologyCard
              technology={technology}
              stackedTech={stackedTech}
              setStackedTech={setStackedTech}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ShowcaseTech;
