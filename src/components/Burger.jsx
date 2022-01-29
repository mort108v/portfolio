import { useState, useEffect } from "react";
import Nav from "./Nav";
import { isMobile } from "react-device-detect";

const Burger = () => {
  const [open, setOpen] = useState();

  useEffect(() => {
    if (isMobile) {
      setOpen(false);
    }
    setOpen(true);
  }, []);

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
