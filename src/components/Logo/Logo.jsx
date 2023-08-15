import React, { useEffect, useState } from "react";
import "../../App.css";
import Cursor from "../Cursor/Cursor";
import ResumeDownloadButton from "../ResumeDownloadButton/ResumeDownloadButton";
import "./Logo.css";

const Logo = React.memo(() => {
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

  useEffect(() => {
    const ball = document.querySelector(".ball");
    const animationContainer = document.querySelector(".animation-container");

    let isBouncing = true;

    const handleBallClick = () => {
      if (isBouncing) {
        ball.style.animationPlayState = "paused";
        isBouncing = false;
      } else {
        ball.style.animationPlayState = "running";
        isBouncing = true;
      }
    };

    const handleMouseMove = (event) => {
      const containerBounds = animationContainer.getBoundingClientRect();
      const x = event.clientX - containerBounds.left;
      const y = event.clientY - containerBounds.top;

      ball.style.left = `${x}px`;
      ball.style.top = `${y}px`;
    };

    ball.addEventListener("click", handleBallClick);
    animationContainer.addEventListener("mousemove", handleMouseMove);

    return () => {
      ball.removeEventListener("click", handleBallClick);
      animationContainer.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array means this effect runs once after initial render

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
        <div className="downloadStyle">
          <ResumeDownloadButton />
        </div>
        <div className="main-container">
          <div className="container">
            <div class="animation-container">
              <div class="ball"></div>
              <h1 class="title">Hi There, Warm welcome to my Journey</h1>
            </div>
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
            <img src="src/assets/images/dpbg.png" alt="dp" />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Logo;
