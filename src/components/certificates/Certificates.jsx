import React from "react";
import Apeda from "../../assests/images/apeda-certification.webp";
const Certificates = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "1rem auto",
      }}
    >
      <h1 className="about_title">Certificates</h1>
      <img
        style={{
          width: "200px",
        }}
        src={Apeda}
        alt="Apeda Certification"
      />
    </div>
  );
};

export default Certificates;
