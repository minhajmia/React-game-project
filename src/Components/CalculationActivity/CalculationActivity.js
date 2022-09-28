import React, { useState } from "react";
import Break from "../Break/Break";
import ExerciseDetails from "../ExerciseDetails/ExerciseDetails";
import PersonalPortfolio from "../PersonalPortfolio/PersonalPortfolio";
import "./CalculationActivity.css";

const CalculationActivity = ({ cart }) => {
  const [breakTime, setBreakTime] = useState(0);
  //
  const handleBreakTime = (value) => {
    setBreakTime(value);
  };
  return (
    <div className="calculationActivity-container">
      <PersonalPortfolio />
      <Break handleBreakTime={handleBreakTime} />
      <ExerciseDetails cart={cart} breakTime={breakTime} />
    </div>
  );
};

export default CalculationActivity;
