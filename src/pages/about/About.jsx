import React from "react";
import { GiPlainCircle } from "react-icons/gi";
import { aboutUsPage } from "../../assests/content";
import "./About.css";
const About = () => {
  console.log(aboutUsPage);
  return (
    <div className="about_page_main">
      {aboutUsPage.data.map((about) => (
        <div className="about_page_content">
          <div>
            <GiPlainCircle />
            {about}
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
