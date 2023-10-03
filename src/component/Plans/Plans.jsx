import React from "react";

import { plansData } from "../../data/plansData";
import "./Plans.css";
import whiteTick from "../../assets/whiteTick.png";
function Plans() {
  return (
    <div className="plans-container" id="plan">
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stoke-text">Ready to start </span>
        <span>Your journy </span>
        <span className="stoke-text">Now with us</span>
      </div>
      {/* {Plans data } */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>
            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more benefits &rarr; </span>
            </div>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
