// import { useState, useEffect } from "react";
// import { handleNavClick } from "../App";

// const [navLinkClicked, setNavLinkClicked] = useState("");

const DeskNav = ({ burgerOpen }) => {
  // const [navLinkActive, setNavLinkActive] = useState({
  //   activeLink: null,
  //    navLinkIDs: [
  //      { id: "LOGO" },
  //      { id: "ABOUT" },
  //      { id: "BGR" },
  //      { id: "CONTACT" },
  //      { id: "BLOCK" },
  //    ],
  // });

  // const navLinks = document.getElementsByClassName("desk-menu-nav__link");

  // for (const navLink of navLinks) {
  //   navLink.addEventListener("click", (e) => handleNavClick(e));
  // }

  let className = "desk-menu-nav__item";

  if (burgerOpen) {
    className += " open";
  }

  return (
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
  );
};

export default DeskNav;
