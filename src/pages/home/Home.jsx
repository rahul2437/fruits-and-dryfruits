import React from "react";
import AboutUsHome from "../../components/aboutus/AboutUs";
import Emailusform from "../../components/email/Emailusform";
const Home = () => {
  return (
    <div className="home center">
      {" "}
      <div style={{ display: "block" }}>
        <AboutUsHome />
        <Emailusform />
      </div>
    </div>
  );
};

export default Home;
