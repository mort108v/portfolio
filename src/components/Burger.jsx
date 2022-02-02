const Burger = ({ burgerOpen }) => {
  return (
    // Open Burger and animate
    <>
      {/* <div className="burger" onClick={() => setBurgerOpen(!burgerOpen)}> */}
      <div className="menu-btn">
        {burgerOpen ? (
          <div className="menu-btn__burger open"></div>
        ) : (
          <div className="menu-btn__burger"></div>
        )}
      </div>
      {/* </div> */}
      {/* {burgerOpen ?  : null} */}
    </>
  );
};
export default Burger;
