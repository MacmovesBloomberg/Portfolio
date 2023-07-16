// import { useState, useEffect } from 'react';
// import { ParallaxProvider, Parallax } from 'react-parallax';
// import './App.css';
// import BubbleEffect from './components/ImageMove';
// import MyWork from './Pages/MyWork/MyWork';
// import Footer from './Pages/Footer/footer';
// import CardComponent from './components/Card/Card';

// function App() {
//   const [count, setCount] = useState(0);
//   const texts = ['Freelancer', 'Frontend Developer', 'UI Designer'];
//   const [currentTextIndex, setCurrentTextIndex] = useState(0);
//   const [currentText, setCurrentText] = useState('');

//   useEffect(() => {
//     const textInterval = setInterval(() => {
//       setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
//     }, 2000);

//     return () => {
//       clearInterval(textInterval);
//     };
//   }, []);

//   useEffect(() => {
//     setCurrentText(texts[currentTextIndex]);
//   }, [currentTextIndex]);

//   return (
//     <ParallaxProvider>
//       <Parallax
//         bgImage="https://c4.wallpaperflare.com/wallpaper/535/845/69/digital-art-artwork-fantasy-art-planet-sun-hd-wallpaper-preview.jpg" // Replace with the actual path to your background image
//         strength={500} // Adjust this value to control the strength of the parallax effect
//       >
//         <div className="animated-background h-96">
//           <div>
//             <div className="text-container">
//               <span className="letter v">V</span>
//               <span className="letter i">I</span>
//               <span className="letter s">S</span>
//               <span className="letter h">H</span>
//               <span className="letter a">A</span>
//               <span className="letter l">L</span>
//             </div>
//             <div className="main-container">
//               <div className="container">
//                 <h1 className="text-3xl introheading">
//                   Hi There, Warm Welcome to my Life Journey
//                 </h1>
//                 <span className="text first-text">I'm a </span>
//                 <span
//                   className={`typing-effect ${currentTextIndex % texts.length === 0 ? 'color-change' : ''
//                     }`}
//                 >
//                   {currentText}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Parallax>
//       <MyWork />
//       <CardComponent />
//       <Footer />
//       <BubbleEffect />
//     </ParallaxProvider>
//   );
// }

// export default App;

import { useState } from "react";
import "./App.css";
import MyWork from "./Pages/MyWork/MyWork";
import Footer from "./Pages/Footer/footer";
import ScrollMenu from "./components/ScrollMenu/ScrollMenu";
import Logo from "./components/Logo/Logo";
import { Parallax } from "react-parallax";
import deer1 from "../src/assets/deer1.jpg";
import deer2 from "../src/assets/deer2.jpg";
import deer3 from "../src/assets/deer3.jpg";
import deer4 from "../src/assets/deer4.jpg";

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
