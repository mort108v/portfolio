import { useState, useEffect } from "react";

const ThemeChange = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  // Switch color theme
  useEffect(() => {
    const root = document.documentElement;
    root?.style.setProperty(
      "--background-color",
      darkTheme ? "#16152b" : "#CACEFC"
    );
    root?.style.setProperty("--text-color", darkTheme ? "#CACEFC" : "#16152b");
  }, [darkTheme]);

  return (
    <div className="App-header__btn">
      <button
        className="btn-colorTheme"
        onClick={() => setDarkTheme(!darkTheme)}
      >
        {darkTheme ? (
          <h3>
            <i className="fa fa-sun fa-1x" aria-hidden="true"></i>
          </h3>
        ) : (
          <h3>
            <i className="fa fa-moon fa-1x" aria-hidden="true"></i>
          </h3>
        )}
      </button>
    </div>
  );
};
export default ThemeChange;
