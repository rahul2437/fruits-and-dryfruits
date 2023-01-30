import React from "react";
import "./about.css";
import { about } from "../../assests/content";
const AboutUsHome = () => {
  return (
    <div className="about_main">
      <div>
        <h1 className="about_title">About Us</h1>
        <div className="about_desc">{about.description}</div>
      </div>
      <div>logo</div>
    </div>
  );
};

export default AboutUsHome;
