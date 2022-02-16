const Nav = ({ burgerOpen }) => {
  let className = "menu-nav__item";

  if (burgerOpen) {
    className += " open";
  }

  return (
    <nav className="nav open">
      <ul className="menu-nav open">
        <li className={className}>
          <a href="#!" className="menu-nav__link about-btn">
            {"About"}
          </a>
        </li>
        <li className={className}>
          <a href="#!" className="menu-nav__link background-btn">
            {"Background"}
          </a>
        </li>
        <li className={className}>
          <a href="#!" className="menu-nav__link work-btn">
            {"Work"}
          </a>
        </li>
        <li className={className}>
          <a href="#!" className="menu-nav__link goals-btn">
            {"Goals"}
          </a>
        </li>
        <li className={className}>
          <a href="#!" className="menu-nav__link blockchain-btn">
            {"Blockchain"}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

// import * as imageNewUser from '../js/pushimagefirst'
// import * as getScript from './getusers.js'
// import * as putScript from './putdata.js'

//   async function loadUsersPage() {
//     await new Promise((resolve) => setTimeout(resolve, 3000));
//     window.location = "../user.html";
//   }
