import { useState } from "react";
import "./App.css";
import MyWork from "./Pages/MyWork/MyWork";
import Footer from "./Pages/Footer/footer";
import ScrollMenu from "./components/ScrollMenu/ScrollMenu";
import Logo from "./components/Logo/Logo";
import { Parallax } from "react-parallax";
import deer1 from "../src/assets/images/deer1.jpg";
import deer2 from "../src/assets/images/deer2.jpg";
import deer3 from "../src/assets/images/deer3.jpg";
import deer4 from "../src/assets/images/deer4.jpg";

function App() {
  return (
    <>
      <Parallax strength={300} bgImage={deer3}>
        <div className="content">
          <Logo />
        </div>
      </Parallax>
      <Parallax strength={300} bgImage={deer1}>
        <div className="content">
          <MyWork />
        </div>
      </Parallax>
      <Parallax strength={600} bgImage={deer4}>
        <div className="content">
          <ScrollMenu />
        </div>
      </Parallax>
      <Parallax strength={200} bgImage={deer2}>
        <div>
          <Footer />
        </div>
      </Parallax>
    </>
  );
}

export default App;
