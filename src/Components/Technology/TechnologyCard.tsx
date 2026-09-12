import React, { useState, type Dispatch, type SetStateAction } from "react";
import type { technologyType } from "../../Types/technologytype";
import { GiRoundStar } from "react-icons/gi";
import { toast } from "react-toastify";

interface TechnologyCardProps {
  technology: technologyType;
  stackedTech: technologyType[];
  setStackedTech: Dispatch<SetStateAction<technologyType[]>>;
}

const TechnologyCard = ({
  technology,
  stackedTech,
  setStackedTech,
}: TechnologyCardProps) => {
  const [isStacked, setIsStacked] = useState(false);
  console.log();
  const handleAddToStack = () => {
    setStackedTech([...stackedTech, technology]);
    setIsStacked(true);
    toast.success(`${technology.name} added to stack`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div>
      <div className=" card bg-base-100  h-75 shadow-sm hover:shadow-lg transition-all hover:scale-101 ">
        <figure>
          <img
            className="h-10 mt-3 object-contain"
            src={technology.logo}
            alt="logo"
          />
          <div className="absolute right-3 top-3">
            <span
              className="rounded-full bg-base-100/90 px-3 py-1 text-xs font-semibold shadow backdrop-blur"
              style={{
                backgroundColor: `${technology.badgeColor}20`,
                color: `${technology.badgeColor}`,
              }}
            >
              {technology.badge}
            </span>
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold -mt-2">{technology.name}</h2>
          <p className="text-gray-500">{technology.description}</p>
          <div>
            <ul className="flex justify-between ">
              <li className="text-[11px] border border-gray-200 bg-[#eaf2fd] px-1 rounded-md text-gray-600">
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
              className="bg-[#0A0F1D] text-white p-2 mt-2 w-200 border rounded-[10px] transition-all hover:scale-105 cursor-pointer disabled:bg-gray-300 disabled:border-green-500 disabled:text-green-500 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:opacity-70"
              disabled={isStacked}
            >
              {isStacked ? "✓Added to Stack" : "Add To Stack"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyCard;
