import React from "react";
import { NavLink } from "react-router-dom";
import "./Tab.css";

const Tab = ({ href, name }) => {
  return (
    <NavLink to={href} className="item" activeClassName="active item">
      {name}
    </NavLink>
  );
};

export default Tab;
