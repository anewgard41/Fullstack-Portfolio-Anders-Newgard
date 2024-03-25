import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => {
  return(
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="btn">
      {btnText}
    </Link>
  </div>
  )
};

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi! my name is <span className="font-semiBold">Anders</span>👋
      <br />A Full Stack Developer from North Carolina
    </h1>
  ),
  2: (
    <InfoBox 
    text = "I'm currently looking for a new role. If you're interested in working together, feel free to reach out!"
    link = "/contact"
    btnText = "Contact Me"
    />
  ),
  3: (
    <InfoBox />
  ),
  4: (
    <InfoBox />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
