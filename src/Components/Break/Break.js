import React from "react";
import "./Break.css";

const Break = ({ handleBreakTime }) => {
  return (
    <div className="Break-container mx-5 mt-5">
      <h2 className="text-left capitalize font-semibold">Add A Break</h2>
      <div className="break-btn">
        <div>
          <button onClick={() => handleBreakTime(10)}>10s</button>
        </div>
        <div>
          <button onClick={() => handleBreakTime(20)}>20s</button>
        </div>
        <div>
          <button onClick={() => handleBreakTime(30)}>30s</button>
        </div>
        <div>
          <button onClick={() => handleBreakTime(40)}>40s</button>
        </div>
        <div>
          <button onClick={() => handleBreakTime(50)}>50s</button>
        </div>
      </div>
    </div>
  );
};

export default Break;
