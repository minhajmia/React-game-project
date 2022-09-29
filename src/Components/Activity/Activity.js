import React, { useEffect, useState } from "react";
import CalculationActivity from "../CalculationActivity/CalculationActivity";
import Header from "../Header/Header";
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
    <div>
      <Header />
      <div className="activity-container grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  gap-5">
        <div className="activity-container grid lg:col-span-3 md:col-span-2 sm:col-span-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5  ">
          {activities.map((activity) => (
            <SingleActivity
              activity={activity}
              key={activity._id}
              handleSecondCount={handleSecondCount}
            />
          ))}
          <div className="mt-10">
            <h2 className="text-center text-2xl font-bold">
              All Question Answer
            </h2>
            <QuestionAnswer />
          </div>
        </div>
        <div className="activity-calculation-container lg:col-span-1 md:col-span-2 sm:col-span-1 ">
          <CalculationActivity cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default Activity;
