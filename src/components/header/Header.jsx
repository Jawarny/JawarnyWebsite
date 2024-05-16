import React from "react";
import "./Header.css";
import logo from "../../assets/logo-jeux.png";
import ItemDeNavigation from "../itemDeNavigation/ItemDeNavigation";

export default function Header() {
  let title = "Babarny";
  return (
    <header>
      <ItemDeNavigation to="/acceuil" tag="" src={logo} alt={title} />

      <h1 className="titre">{title}</h1>

      <div className="menu">
        <div className="navigation"></div>
      </div>
      <ItemDeNavigation to="/monProfil" tag="" src="" alt={title} />
    </header>
  );
}
