import React from "react";
import "./Navbar.css";
import Logo from "./images/Logo.png";

const Navbar = () => {
  return (
    <header className="brand">
      <img src={Logo} alt="LogoAtlantia" />
    </header>
  );
};

export default Navbar;
