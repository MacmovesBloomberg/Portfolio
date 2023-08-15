import React, { useState } from "react";
import "./ScrollMenu.css"; // Style the SideMenu component using CSS

const ScrollMenu = () => {
  const [activeItem, setActiveItem] = useState("Pwc");

  const handleItemClick = (menuItem) => {
    setActiveItem(menuItem);
  };

  const getParagraphContent = () => {
    switch (activeItem) {
      case "Pwc":
        return (
          <div>
            <h3 style={{ color: "black", fontSize: "16px" }}>
              Software Associate
            </h3>
            <p>Nov 2022 - Present</p>
            <ul className="worklist">
              <li>
                Designed and developed an application for Human Resource to
                automate the complete Recruitment Process, improving efficiency
                by 38%.
              </li>
              <li>Received SPOT Award for the Application Implementation.</li>
              <li>
                Participated in each step of the product development process
                from designing to deployment.
              </li>
              <li>
                Built Reusable, customized React component for usage across the
                application.
              </li>
              <li>
                Made usage of library such as chart JS, React Query, Sheet JS
                for creation of pictorial representation, Customized fetch API,
                handling file.
              </li>
            </ul>
          </div>
        );
      case "Accenture":
        return (
          <div>
            <h3 style={{ color: "black", fontSize: "16px" }}>
              Software Engineer
            </h3>
            <p>May 2019 - Nov 2021</p>
            <ul className="worklist">
              <li>
                Developed an Estate Web application to onboard the customer and
                built functionality that help them maintain all the investment
                at a single source.
              </li>
              <li>
                Experience in all phases of SDLC like Requirement Analysis,
                implementation and maintenance and extensive experience with
                Agile and SCRUM
              </li>
              <li>
                Developed the latest user facing features using React.js and
                built reusable components.
              </li>
              <li>
                Good experience on customizing CSS Frameworks like Bootstrap and
                foundation using CSS preprocessors like SASS
              </li>
              <li>
                Experienced in Bug Tracking tools like JIRA, HP Quality Center
              </li>
            </ul>
          </div>
        );
      case "Wipro":
        return (
          <div>
            <h3 style={{ color: "black", fontSize: "16px" }}>
              React Developer
            </h3>
            <p>Dec 2021 - Nov 2022</p>
            <ul className="worklist">
              <li>
                Troubleshoot interface software and debugged application codes
                to improve functionality and performance.
              </li>
              <li>Got familiarized and built functionality for EWS Page</li>
              <li>
                Monitored and improved front-end performance by 15% and
                documented application changes & worked on updates.
              </li>
              <li>
                Developed the latest user-facing features using React.js and
                built reusable components.
              </li>
              <li>
                Optimized components for maximum performance across a vast array
                of web-capable device and browsers.
              </li>
            </ul>
          </div>
        );
      default:
        return "";
    }
  };

  return (
    <div className="scroll-container ">
      <p className="worktext">Where I've have worked</p>
      <div className="side-menu ">
        <div className="menu-items">
          <div
            className={`menu-item ${activeItem === "Pwc" ? "active" : ""}`}
            onClick={() => handleItemClick("Pwc")}
            onMouseEnter={() => handleItemClick("Pwc")}
          >
            Pwc
          </div>
          <div
            className={`menu-item ${activeItem === "Wipro" ? "active" : ""}`}
            onClick={() => handleItemClick("Wipro")}
            onMouseEnter={() => handleItemClick("Wipro")}
          >
            Wipro
          </div>
          <div
            className={`menu-item ${
              activeItem === "Accenture" ? "active" : ""
            }`}
            onClick={() => handleItemClick("Accenture")}
            onMouseEnter={() => handleItemClick("Accenture")}
          >
            Accenture
          </div>
        </div>
        <div className="vertical-bar"></div>
        <div className="content">
          {activeItem && <p>{getParagraphContent()}</p>}
        </div>
      </div>
    </div>
  );
};

export default ScrollMenu;
