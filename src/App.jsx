import "../scss/main.scss";
import { useState, useEffect } from "react";
// import ThemeChange from "./components/ThemeChange";
import Burger from "./components/Burger";
import { isMobile } from "react-device-detect";
import Social from "./components/Social";
import CustomCursor from "./components/CustomCursor";
import Nav from "./components/Nav";
import DeskNav from "./components/DeskNav";
import About from "./components/About";

import IntroText from "./components/IntroText";
const App = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  useEffect(() => {
    if (!isMobile) {
      setBurgerOpen(true);
      // const burger = document.querySelector(".burger");
      // burger.className.add("deskview");
    }
  }, []);

  return (
    <div className="App">
      <CustomCursor />
      <canvas id="canvas1"></canvas>
      <header className="App-header draw">
        <>{isMobile ? <Social /> : <Social className="hide" />}</>

        {/* <ThemeChange /> */}
        <div className="burger" onClick={() => setBurgerOpen(!burgerOpen)}>
          <Burger burgerOpen={burgerOpen} />
        </div>
        <>
          {isMobile ? (
            <Nav burgerOpen={burgerOpen} />
          ) : (
            <DeskNav burgerOpen={burgerOpen} />
          )}
        </>
      </header>

      <section id="Splash" className="draw">
        <canvas id="pixelEffect"></canvas>
        <IntroText className="intro" />
      </section>
      <section id="About" className="about hide">
        <About />
      </section>
    </div>
  );
};

export default App;
