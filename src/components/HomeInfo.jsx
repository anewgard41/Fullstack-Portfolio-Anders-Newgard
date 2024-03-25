import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => {
  return(
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} alt="arrow" className="w-4 h-4 object-contain"/>
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
      text="Versatile Full Stack Developer with a passion for creating engaging and user-friendly applications. I have experience in multiple industries and am always eager to learn."
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="Collaborated with multiple teams to develop and deploy accessible, high quality applications. Check out my projects to see some of my work!"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Feel free to reach out to me with any questions or project ideas. I am always looking for excellent people with cool ideas to work with."
      link="/contact"
      btnText="Shoot me a message!"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
