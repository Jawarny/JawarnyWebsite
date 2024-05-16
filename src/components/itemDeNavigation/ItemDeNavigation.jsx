import React from "react";
import { Link } from "react-router-dom";

import "./ItemDeNavigation.css";

const ItemDeNavigation = (props) => {
  return (
    <Link to={props.to} className="item" {...props}>
      <img src={props.src} alt={props.title} className="logo-jeux" />
    </Link>
  );
};

export default ItemDeNavigation;
