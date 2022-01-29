const Nav = (props) => {
  // Set className to "open" for animation and visibillity
  let className = "menu-nav__item";
  if (props.open) {
    className += " open";
  }
  return (
    <nav className="nav open">
      <ul className="menu-nav open">
        <li className={className}>
          <a href="#!" className="menu-nav__link signup-btn">
            {"Sign Up!"}
          </a>
        </li>
        <li className={className}>
          <a href="#!" className="menu-nav__link guest-btn">
            {"Guest <3"}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
