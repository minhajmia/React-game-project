import React from "react";
import "./PersonalPortfolio.css";
import img from "../../image/Minhaj-Mia.jpg";

const PersonalPortfolio = () => {
  return (
    <div className="PersonalPortfolio-container  mt-5 mx-5">
      <div className=" flex items-center">
        <div className="profile-image">
          <img src={img} alt="" />
        </div>
        <div className="profile-name">
          <h3 className="name">Minhaj Mia</h3>
          <br />
          <p className="location">Arambag, Motijheel, Dhaka</p>
        </div>
      </div>
      <div className="person-calculation  flex items-center justify-between">
        <div className="weight">
          <h2 className="text-1xl font-bold">65kg</h2>
          <p>Weight</p>
        </div>
        <div className="height ">
          <h2 className="text-1xl font-bold">5.4</h2>
          <p>height</p>
        </div>
        <div className="age">
          <h2 className="text-1xl font-bold">22yrs</h2>
          <p>Age</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalPortfolio;
