import React from "react";
import "./ExerciseDetails.css";

import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer, toast } from "react-toastify";

// CALL IT ONCE IN YOUR APP
if (typeof window !== "undefined") {
  injectStyle();
}
const ExerciseDetails = ({ cart, breakTime }) => {
  // Toast --
  function notify() {
    toast.dark("Thanks Guys");
  }
  // calculate seconds
  let total = 0;
  for (const activity of cart) {
    total += activity.time;
  }

  return (
    <div className="ExerciseDetails-container mx-5 mt-5">
      <h2 className="text-left capitalize font-semibold">Game Details</h2>
      <div className="exercise-time">
        <span>Game time </span>
        <span>{total} seconds</span>
      </div>
      <div className="break-time">
        <span>Break time </span>
        <span>{breakTime} seconds</span>
      </div>
      <div className="w-[100%] mt-5">
        <button onClick={notify} className="btn btn-accent">
          Activity Completed
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ExerciseDetails;
