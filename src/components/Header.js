import React, { useContext } from "react";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import { Context } from "../Context";
export default function Header() {
  const { darkMode, changeMode } = useContext(Context);

  return (
    <header className="header m-bottom-50">
      <div className="header-container container">
        <h2>Where in the world?</h2>
        <button className="btn btn-toggle-dark-mode" onClick={changeMode}>
          {darkMode ? <FaRegSun /> : <FaRegMoon />}
          Dark Mode
        </button>
      </div>
    </header>
  );
}
