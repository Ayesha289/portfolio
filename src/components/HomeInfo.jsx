import React from "react";
import InfoBox from "./InfoBox";

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Ayesha</span>👋
      <br />A Software Engineer from India
    </h1>
  ),
  2: (
    <InfoBox
      text="A Computer Science Engineering Student and a web developer"
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="Implemented various projects throughout my engineering course. Curious about them?"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev? I'm just a few keystrokes away"
      link="/contact"
      btnText="Let's talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
