import React, { type Dispatch, type SetStateAction } from "react";
import type { technologyType } from "../../Types/technologytype";
import { TiDeleteOutline } from "react-icons/ti";


interface StackCardProps {
  stackedTech: technologyType[];
    setStackedTech: Dispatch<SetStateAction<technologyType[]>>;
}

const StackCard = ({ stackedTech , setStackedTech }: StackCardProps) => {
    const handleRemoveTech = (technology: technologyType) => {
        const restTech = stackedTech.filter((tech) => tech.id !== technology.id);
        console.log(restTech , "rest tech");
        setStackedTech(restTech);
    }

  return (
    <div>
      <div className=" w-70 h-auto bg-base-100 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Your Stack</h2>

          <p>{stackedTech.length ===0 ? "No Technology Selected Yet"  : `${stackedTech.length} Technology Selected` }</p>
          
          {(stackedTech.length === 0) && (
            <p className="text-[#64748B] text-center border border-gray-200 my-3 p-3 rounded-[5px]">Stack is empty</p>
          )}
          

          
       

          <div >
            {stackedTech.map((technology) => (
              <div>
                <div className="flex justify-between items-center gap-3 border border-gray-200 my-2 p-2 rounded-[5px]">
                  <img
                    className="h-8"
                    src={technology.logo}
                    alt={technology.name}
                  />
                  <div className=" w-60">
                    <h2 className="text-[13px] font-semibold">
                      {technology.name}
                    </h2>
                    <p className="text-[10px] ">{technology.category}</p>
                  </div>
                  <span className="cursor-pointer" onClick={() => handleRemoveTech(technology)}>
                    <button className="text-[18px] cursor-pointer transition-all hover:text-red-500 hover:scale-115"><TiDeleteOutline /></button>
                </span>
                </div>

                
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackCard;
