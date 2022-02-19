import { useEffect } from "react";
import AnimateIntro from "./AnimateIntro";
const IntroText = () => {
  useEffect(() => {
    AnimateIntro();
  }, []);
  return (
    <>
      <div className="headerText">
        <div className="logo">
          <h1 className="animatedTitle">DESIGNING THE FUTURE</h1>
        </div>
      </div>
    </>
  );
};

export default IntroText;
