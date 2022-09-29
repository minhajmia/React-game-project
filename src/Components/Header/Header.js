import React from "react";
import "./Header.css";
import logo from "../../image/logo.png";

const Header = () => {
  return (
    <div className=" text-center mb-3">
      <img className="inline" src={logo} alt="" />
      <h3 className="font-bold text-2xl my-2">Gaming Activity-2022</h3>
      <h3>Choose Your Game</h3>
    </div>
  );
};

export default Header;
