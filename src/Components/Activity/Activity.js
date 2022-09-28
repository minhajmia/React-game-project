import React, { useEffect, useState } from "react";
import CalculationActivity from "../CalculationActivity/CalculationActivity";
import SingleActivity from "../SingleActivity/SingleActivity";
import "./Activity.css";

const Activity = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);
  return (
    <div className=" grid grid-cols-2">
      <div className="activity-container grid lg:grid-cols-3 md:grid-cols-2 gap-4 ">
        {activities.map((activity) => (
          <SingleActivity activity={activity} key={activity._id} />
        ))}
      </div>
      <div className="activity-calculation-container grid lg:grid-cols-3 md:grid-cols-2 gap-5 ">
        <CalculationActivity />
      </div>
    </div>
  );
};

export default Activity;
