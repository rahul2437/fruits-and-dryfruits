import React from "react";
import { about } from "../../assests/content";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import "./footer.css";
import Logo from "../header/Logo";
const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div>
        {/* <Logo /> */}
        <h1 className="footer_title">SMOVING</h1>
        <p>{about.description}</p>
      </div>
      <div>
        <h1 className="footer_title">CONTACT US</h1>
        <div>
          <div>
            <MdLocationOn />
          </div>
          <div>{about.contact.address}</div>
        </div>
        <div>
          <div>
            <MdPhone />
          </div>
          <div>{about.contact.phone}</div>
        </div>
        <div>
          <div>
            <MdEmail />
          </div>
          <div>{about.contact.email}</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
