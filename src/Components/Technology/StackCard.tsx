import React from "react";

const StackCard = () => {
  return (
    <div >
      <div className="card w-80 h-auto bg-base-100 card-xl shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Your Stack</h2>
          <p>Technology Slected </p>
            
         
          <div className="justify-end card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackCard;
