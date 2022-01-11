import { useState } from "react";
import Nav from "./Nav";
const Burger = () => {
  const [open, setOpen] = useState(false);
  // const allBurgerDivs = document.querySelectorAll(".menu-btn__burger");
  // allBurgerDivs.addEventListener("mouseover", ()=> {
  //   allBurgerDivs.className.toggle(".orange");
  //   console.log("Green");
  // });
  return (
    // Open Burger and animate
    <>
      <div className="menu-btn" onClick={() => setOpen(!open)}>
        {open ? (
          <div className="menu-btn__burger open"></div>
        ) : (
          <div className="menu-btn__burger"></div>
        )}
      </div>
      {open ? <Nav open={open} /> : null}
    </>
    // And then open Nav
  );
};

export default Burger;
