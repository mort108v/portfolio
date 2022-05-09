import "../scss/main.scss";
import { useState, useEffect } from "react";
// import ThemeChange from "./components/ThemeChange";
import Burger from "./components/Burger";
import { isMobile } from "react-device-detect";
import Social from "./components/Social";
import CustomCursor from "./components/CustomCursor";
import Nav from "./components/Nav";
// import DeskNav from "./components/DeskNav";
import AboutText from "./components/AboutText";
import IntroText from "./components/IntroText";
// import Animate3D from "./components/Animate3D";

const App = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [navLinkActive, setNavLinkActive] = useState({
    activeLink: null,
    navLinkIDs: [
      { id: "BLOCKDESIGN" },
      { id: "ABOUT" },
      { id: "BGR" },
      { id: "WORK" },
      { id: "CONTACT" },
      { id: "BLOCKCHAIN" },
    ],
  });

  let className = "desk-menu-nav__item";

  if (burgerOpen) {
    className += " open";
  }

  const [isAbout, setIsAbout] = useState(false);

  useEffect(() => {
    if (!isMobile) {
      setBurgerOpen(true);
    }
  }, []);

  const handleNavClick = (index, e) => {
    console.log(index, e);
    console.log(isAbout);

    setNavLinkActive({
      ...navLinkActive,
      activeLink: navLinkActive.navLinkIDs[index].id,
    });
    if (e == "ABOUT") {
      setIsAbout(true);
      return;
    }
    setIsAbout(false);
    console.log(isAbout);
  };

  function handleNavStyles(index) {
    if (navLinkActive.navLinkIDs[index].id === navLinkActive.activeLink) {
      return "desk-menu-nav__link active";
    }
    return "desk-menu-nav__link inactive";
  }

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
            <Nav burgerOpen={burgerOpen} className="hide" />
          ) : (
            // <DeskNav burgerOpen={burgerOpen}>
            <nav className="desk-nav open">
              <ul className="desk-menu-nav open">
                {navLinkActive.navLinkIDs.map((e, index) => (
                  <li className={className} key={e + index}>
                    <a
                      href="#!"
                      key={e.id}
                      className={handleNavStyles(index, e.id)}
                      onClick={() => {
                        handleNavClick(index, e.id);
                      }}
                    >
                      {e.id}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
          {/* </DeskNav> */}
        </>
      </header>

      <section id="Splash" className="draw">
        <canvas id="pixelEffect"></canvas>
        <IntroText className="intro" />
        <AboutText isAbout={isAbout} />
      </section>
    </div>
  );
};

export default App;
