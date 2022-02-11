import "../scss/main.scss";
import { useState, useEffect } from "react";
// import ThemeChange from "./components/ThemeChange";
import Burger from "./components/Burger";
import { isMobile } from "react-device-detect";
import Social from "./components/Social";
import CustomCursor from "./components/CustomCursor";
import Nav from "./components/Nav";
import DeskNav from "./components/DeskNav";
// import AnimateIntro from "./components/AnimateIntro";

const App = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  useEffect(() => {
    if (!isMobile) {
      setBurgerOpen(true);
    }
  }, []);

  return (
    <div className="App">
      <CustomCursor />
      <canvas id="canvas1"></canvas>
      <header className="App-header draw">
        {/* <AnimateIntro /> */}
        <Social />
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
      </section>
      <section id="About" className="draw"></section>
    </div>
  );
};

export default App;
