import React, { useEffect, useState } from "react";
import "../../App.css";
import Cursor from "../Cursor/Cursor";

const Logo = () => {
  const texts = ["Freelancer", "Frontend Developer", "UI Designer"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => {
      clearInterval(textInterval);
    };
  }, []);
  useEffect(() => {
    setCurrentText(texts[currentTextIndex]);
  }, [currentTextIndex]);

  return (
    <div>
      <div>
        <div className="text-container">
          <span className="letter v">V</span>
          <span className="letter i">I</span>
          <span className="letter s">S</span>
          <span className="letter h">H</span>
          <span className="letter a">A</span>
          <span className="letter l">L</span>
        </div>
        <div className="main-container">
          <div className="container">
            <h1 className="text-3xl introheading">
              <Cursor />
            </h1>
            <span className="text first-text">I'm a </span>
            <span
              className={`typing-effect ${
                currentTextIndex % texts.length === 0 ? "color-change" : ""
              }`}
            >
              {currentText}
            </span>
          </div>
          <div className="introdpimg">
            <img src="src/assets/dpbg.png" alt="dp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
