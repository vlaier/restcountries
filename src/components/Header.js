import React from "react";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className="header m-bottom-50">
      <div className="header-container container">
        <h2>Where in the world?</h2>
        <button
          className="btn btn-toggle-dark-mode"
          onClick={() => setDarkMode((prevMode) => !prevMode)}
        >
          {darkMode ? <FaRegSun /> : <FaRegMoon />}
          Dark Mode
        </button>
      </div>
    </header>
  );
}
