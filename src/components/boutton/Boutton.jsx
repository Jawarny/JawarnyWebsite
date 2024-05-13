import React from "react";
import { Link } from "react-router-dom";

import "./Boutton.css";

const Boutton = (props) => {
  return (
    <Link to={props.to} className="button" {...props}>
      {props.tag}
    </Link>
  );
};

export default Boutton;
