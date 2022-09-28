import React from "react";
import "./ExerciseDetails.css";

const ExerciseDetails = ({ cart, breakTime }) => {
  let total = 0;
  for (const activity of cart) {
    total += activity.time;
  }
  return (
    <div className="ExerciseDetails-container mx-5 mt-5">
      <h2 className="text-left capitalize font-semibold">Exercise Details</h2>
      <div className="exercise-time">
        <span>Exercise time </span>
        <span>{total} seconds</span>
      </div>
      <div className="break-time">
        <span>Break time </span>
        <span>{breakTime} seconds</span>
      </div>
      <div className="w-[100%] mt-5">
        <button className="btn btn-accent">Activity Completed</button>
      </div>
    </div>
  );
};

export default ExerciseDetails;
