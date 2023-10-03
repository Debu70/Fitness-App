import React from "react";
import "./Header.css";

import Logo from "../../assets/logo.png";
import leftArrow from "../../assets/leftArrow.png";
import { useState } from "react";
import { Link } from "react-scroll";
const Header = () => {

  const mobile = window.innerHeight <= 768 ? true : false;
  const pc = window.innerWidth >=800


  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      {menuOpen === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => setMenuOpen(true)}
        >
          <img
            src={leftArrow}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>

      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              activeClass="active"
              to="home"
              span={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              to="program"
              span={true}
              smooth={true}
            >
              Program
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              to="reasons"
              span={true}
              smooth={true}
            >
              Why us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              to="plan"
              span={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              to="Testimonials"
              span={true}
              smooth={true}
            >
              Testimonial
            </Link>
          </li>
        </ul>
      )}


    </div>
  );
};

export default Header;
