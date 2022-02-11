const DeskNav = ({ burgerOpen }) => {
  let className = "desk-menu-nav__item";

  if (burgerOpen) {
    className += " open";
  }

  return (
    <nav className="desk-nav open">
      <ul className="desk-menu-nav open">
        <li className={className}>
          <a href="#!" className="desk-menu-nav__link signin-btn">
            {"Sign In!"}
          </a>
        </li>
        <li className={className}>
          <a href="#!" className="desk-menu-nav__link signup-btn">
            {"Sign Up!"}
          </a>
        </li>
        <li className={className}>
          <a href="#!" className="desk-menu-nav__link guest-btn">
            {"Guest <3"}
          </a>
        </li>
        <li className={className}>
          <a href="#!" className="desk-menu-nav__link about-btn">
            {"About"}
          </a>
        </li>
        <li className={className}>
          <a href="#!" className="desk-menu-nav__link some-btn">
            {"Some"}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default DeskNav;
