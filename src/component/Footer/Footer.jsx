import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import git from "../../assets/github.png";
import insta from "../../assets/instagram.png";
import linkedIn from "../../assets/linkedin.png";
function Footer() {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={git} alt="" />
          <img src={insta} alt="" />
          <img src={linkedIn} alt="" />
        </div>
        <div className="logo-r">
          <img src={logo} alt="" />
        </div>
      </div>

    </div>
  );
}

export default Footer;
