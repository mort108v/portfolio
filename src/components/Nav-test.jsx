const Nav = (props) => {
  // Set className to "open" for animation and visibillity
  let className = "menu-nav__item";
  if (props.open) {
    className += " open";
  }
  return (
    <nav className="nav open">
      <div className="menu-nav open">
        <div className={className}>
          <a href="#!" className="menu-nav__link signup-btn">
            {"Sign Up!"}
          </a>
        </div>
        <div className={className}>
          <a href="#!" className="menu-nav__link guest-btn">
            {"Guest <3"}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
