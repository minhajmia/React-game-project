import React from "react";
import "./Break.css";

const Break = ({ handleBreakTime }) => {
  return (
    <div className="Break-container mx-5 mt-5">
      <h2 className="text-left capitalize font-semibold">Add a break</h2>
      <div className="break-btn">
        <div>
          <button onClick={() => handleBreakTime(10)}>10</button>
        </div>
        <div>
          <button onClick={() => handleBreakTime(20)}>20</button>
        </div>
        <div>
          <button onClick={() => handleBreakTime(30)}>30</button>
        </div>
        <div>
          <button onClick={() => handleBreakTime(40)}>40</button>
        </div>
        <div>
          <button onClick={() => handleBreakTime(50)}>50</button>
        </div>
      </div>
    </div>
  );
};

export default Break;
