import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from '../../assets/rightArrow.png'
function Program() {
  return (
    <div className="Programs" id="program">
      {/* {header} */}
      <div className="programs-header">
        <span className="stoke-text">Explore our </span>
        <span>Programs </span>
        <span className="stoke-text">to shape your</span>
      </div>
      {/* {program-catagory} */}
      <div className="program-catagory">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={RightArrow} alt=""/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Program;
