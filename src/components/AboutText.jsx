import { useEffect } from "react";
import AnimateAbout from "./AnimateAbout";
import ThreeSphere from "./ThreeSphere";
// import Animate3D from "./Animate3D";

const AboutText = ({ isAbout }) => {
  if (isAbout) {
    useEffect(() => {
      AnimateAbout();
    }, []);
    return (
      <>
        <div id="About" className="about">
          <div className="aboutText">
            <h2 className="animatedAbout">
              <span> Blockdesign aims to revolutionize the future of </span>
              <span> webdesign by integrating blockchain, NFT's </span>
              <span> and web3 authentication into mainstream systems </span>
            </h2>
          </div>
          <div id="AnimateAbout">
            <ThreeSphere />
          </div>
        </div>
      </>
    );
  }
  return null;
};

export default AboutText;
