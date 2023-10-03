import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
const hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* {the-best-ad} */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "155px" : "204px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>The Best Fitness Club in TOWN</span>
        </div>
        {/* {Hero Heading} */}
        <div className="hero-text">
          <div>
            <span className="stoke-text">shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and body and live up your life
              to fullest
            </span>
          </div>
        </div>
        {/* {hero-figure} */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay='3' prefix="+"/>
            </span>
            <span>Export coaches </span>
          </div>
          <div>
            <span><NumberCounter end={972} start={800} delay='3' prefix="+"/></span>
            <span>Member joined </span>
          </div>
          <div>
            <span><NumberCounter end={50} start={10} delay='3' suffix="+"/> </span>
            <span>fitness program</span>
          </div>
        </div>
        {/* {hero-buttons} */}
        <div className="hero-buttons">
          <button className="btn">Get Start</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        {/* {hero-img} */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={{ ...transition }}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        />
        {/* {calories} */}
        <motion.div
          className="calories"
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
        >
          <img src={calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default hero;
