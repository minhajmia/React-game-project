import React from "react";
import "./SingleActivity.css";

const SingleActivity = ({ activity, handleSecondCount }) => {
  const { name, picture, time } = activity;
  return (
    <div>
      <div className="card  glass">
        <figure>
          <img src={picture} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Time required : {time}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleSecondCount(activity)}
              className="btn btn-accent"
            >
              Add to list
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleActivity;
