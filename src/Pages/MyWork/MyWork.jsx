import React from "react";
import "./mywork.css";
import CardComponent from "../../components/Card/Card";
import ScrollMenu from "../../components/ScrollMenu/ScrollMenu";

export default function MyWork() {
  return (
    <>
      <div className="work-container">
        <p className="work-text">Take a loot at my work</p>
        <div className="introimg">
          <CardComponent />
        </div>
      </div>
      {/* <ScrollMenu /> */}
    </>
  );
}
