import React from "react";
import { aboutUSPAGE } from "../../assests/content";
import { GiPlainCircle } from "react-icons/gi";
import "./About.css";
const About = () => {
  console.log(aboutUSPAGE);
  return (
    <div className="about_page_main">
      {aboutUSPAGE.data.map((about) => (
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
