const DeskNav = ({ burgerOpen }) => {
  let className = "desk-menu-nav__item";

  if (burgerOpen) {
    className += " open";
  }

  return (
    <nav className="desk-nav open">
      <ul className="desk-menu-nav open">
        <li className="LOGONAME">
          <a href="#!" className="LOGO">
            {"BLOCKDESIGN"}
          </a>
        </li>
        <li className={className}>
          <a href="#!" className="desk-menu-nav__link about-btn">
            {"About"}
          </a>
        </li>
        <li className={className}>
          <a href="#!" className="desk-menu-nav__link background-btn">
            {"BGR"}
          </a>
        </li>
        <li className={className}>
          <a href="#!" className="desk-menu-nav__link work-btn">
            {"Work"}
          </a>
        </li>
        <li className={className}>
          <a href="#!" className="desk-menu-nav__link contact-btn">
            {"Contact"}
          </a>
        </li>
        <li className={className}>
          <a href="#!" className="desk-menu-nav__link blockchain-btn">
            {"Blockchain"}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default DeskNav;
