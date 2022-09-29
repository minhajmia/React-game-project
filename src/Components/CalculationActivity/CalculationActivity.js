import React, { useEffect, useState } from "react";
import { storValue, addToDatabase } from "../../utilities/fakedb";
import Break from "../Break/Break";
import ExerciseDetails from "../ExerciseDetails/ExerciseDetails";
import PersonalPortfolio from "../PersonalPortfolio/PersonalPortfolio";
import "./CalculationActivity.css";

const CalculationActivity = ({ cart }) => {
  const [breakTime, setBreakTime] = useState(0);
  // break time handler
  const handleBreakTime = (value) => {
    const newValue = [value];
    setBreakTime(newValue);
    addToDatabase(value);
  };
  useEffect(() => {
    const store = storValue;
    const saveValue = store;
    setBreakTime(saveValue);
  }, []);
  return (
    <div className="calculationActivity-container">
      <PersonalPortfolio />
      <Break handleBreakTime={handleBreakTime} />
      <ExerciseDetails cart={cart} breakTime={breakTime} />
    </div>
  );
};

export default CalculationActivity;
