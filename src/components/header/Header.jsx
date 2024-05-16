import React from "react";
import "./Header.css";
import logo from "../../assets/logo-jeux.png";
import ItemDeNavigation from "./itemDeNavigation/ItemDeNavigation";

export default function Header() {
  let websiteTitle = "Babarny";
  return (
    <header>
      <ItemDeNavigation to="/acceuil" tag="" src={logo} alt={websiteTitle} />

      <h1 className="titre">{websiteTitle}</h1>

      <div className="menu">
        <div className="navigation"></div>
      </div>
      <ItemDeNavigation to="" tag="" src="" alt="profile"></ItemDeNavigation>
    </header>
  );
}
