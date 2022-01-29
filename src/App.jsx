import "../scss/main.scss";
// import ThemeChange from "./components/ThemeChange";
import Burger from "./components/Burger";
import Social from "./components/Social";
import CustomCursor from "./components/CustomCursor";
// import AnimateIntro from "./components/AnimateIntro";

const App = () => {
  return (
    <div className="App">
      <CustomCursor />
      <canvas id="canvas1"></canvas>
      <header className="App-header draw">
        {/* <AnimateIntro /> */}
        <Social />
        {/* <ThemeChange /> */}
        <Burger />
      </header>
      <section id="Splash" className="draw">
        <canvas id="pixelEffect"></canvas>
      </section>
    </div>
  );
};

export default App;
