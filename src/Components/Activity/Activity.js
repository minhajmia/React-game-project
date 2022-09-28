import React, { useEffect, useState } from "react";
import CalculationActivity from "../CalculationActivity/CalculationActivity";
import QuestionAnswer from "../QuestionAnswer/QuestionAnswer";
import SingleActivity from "../SingleActivity/SingleActivity";
import "./Activity.css";

const Activity = () => {
  const [activities, setActivities] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  // second count
  const handleSecondCount = (activity) => {
    const newActivity = [...cart, activity];
    setCart(newActivity);
  };
  return (
    <div className="activity-container grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  gap-5">
      <div className="activity-container grid col-span-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 lg:m-20 ">
        {activities.map((activity) => (
          <SingleActivity
            activity={activity}
            key={activity._id}
            handleSecondCount={handleSecondCount}
          />
        ))}
        <div></div>
        <div className="mt-10">
          <hr />
          <h2 className="text-center text-3xl font-bold">
            All Question Answer
          </h2>
          <QuestionAnswer />
        </div>
        <div></div>
      </div>

      <div className="activity-calculation-container lg:m-0 md:mx-auto sm:mx-auto">
        <CalculationActivity cart={cart} />
      </div>
    </div>
  );
};

export default Activity;
