import { type Dispatch, type SetStateAction } from "react";
import type { technologyType } from "../../Types/technologytype";
import { TiDeleteOutline } from "react-icons/ti";
import { IoTrashOutline } from "react-icons/io5";
import { toast } from "react-toastify";

interface StackCardProps {
  stackedTech: technologyType[];
  setStackedTech: Dispatch<SetStateAction<technologyType[]>>;
}

const StackCard = ({ stackedTech, setStackedTech }: StackCardProps) => {
  const handleRemoveTech = (technology: technologyType) => {
    const restTech = stackedTech.filter((tech) => tech.id !== technology.id);

    setStackedTech(restTech);
    toast.error(`${technology.name} removed from stack`, {
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

  const handleRemoveAll = () => {
    setStackedTech([]);
    toast.error(`All technologies removed from stack`, {
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
      <div className=" sm:w-70 w-140 h-auto bg-base-100 shadow-[0_10px_10px_rgba(0,0,0,0.1)] rounded-[10px] p-3">
        <div className="card-body">
          <h2 className="text-lg font-bold italic">Your Stack</h2>

          <p className="text-gray-500">
            {stackedTech.length === 0
              ? "No Technology Selected Yet"
              : `${stackedTech.length} Technology Selected`}
          </p>

          {stackedTech.length === 0 && (
            <p className="text-gray-400 text-center border border-gray-200 my-3 p-3 rounded-[5px]">
              Stack is empty
            </p>
          )}

          <div>
            {stackedTech.map((technology) => (
              <div key={technology.id}>
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
                  <span onClick={() => handleRemoveTech(technology)}>
                    <button className="text-[18px] cursor-pointer transition-all hover:text-red-500 hover:scale-115">
                      <TiDeleteOutline />
                    </button>
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div>
            {stackedTech.length > 0 && (
              <button
                className=" flex items-center justify-center text-red-500 font-bold p-2 mt-2 w-full border rounded-[10px] transition-all hover:scale-105 cursor-pointer"
                onClick={handleRemoveAll}
              >
                <IoTrashOutline /> Remove All
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackCard;
