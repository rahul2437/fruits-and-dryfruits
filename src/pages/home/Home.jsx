import React from "react";
import AboutUsHome from "../../components/aboutus/AboutUs";
import Carousel from "../../components/Carousel";
import Certificates from "../../components/certificates/Certificates";
import Emailusform from "../../components/email/Emailusform";
import Map from "../../components/map/Map";
const Home = () => {
  return (
    <div className="home center">
      {" "}
      <div style={{ display: "block", textAlign: "center" }}>
        {/* <Carousel /> */}
        <AboutUsHome />
        <Certificates />
        <Emailusform />
        {/* <Map /> */}
      </div>
    </div>
  );
};

export default Home;
