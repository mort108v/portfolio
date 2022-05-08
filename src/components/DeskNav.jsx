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
        <li className={className}>
          <a
            href="#!"
            id="LOGO"
            className="desk-menu-nav__link active logo-btn"
          >
            {"BLOCKDESIGN"}
          </a>
        </li>
        <li className={className}>
          <a
            href="#!"
            id="ABOUT"
            className="desk-menu-nav__link inactive about-btn"
          >
            {"About"}
          </a>
        </li>
        <li className={className}>
          <a
            href="#!"
            id="BGR"
            className="desk-menu-nav__link inactive background-btn"
          >
            {"BGR"}
          </a>
        </li>
        <li className={className}>
          <a
            href="#!"
            id="WORK"
            className="desk-menu-nav__link inactive work-btn"
          >
            {"Work"}
          </a>
        </li>
        <li className={className}>
          <a
            href="#!"
            id="CONTACT"
            className="desk-menu-nav__link inactive contact-btn"
          >
            {"Contact"}
          </a>
        </li>
        <li className={className}>
          <a
            href="#!"
            id="BLOCK"
            className="desk-menu-nav__link inactive blockchain-btn"
          >
            {"Blockchain"}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default DeskNav;
