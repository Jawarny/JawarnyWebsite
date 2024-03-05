import React from "react";
import "./Header.css";
import logo from "../../assets/logo-jeux.png";

export default function Header() {
  let title = "Jeux";
  return (
    <header>
      <div className="square">
        <img src={logo} alt={title} className="logo-jeux" />
      </div>

      <h1 className="titre">{title}</h1>

      <div className="menu">
        <div className="navigation"></div>
      </div>
      <div className="square"></div>
    </header>
  );
}
