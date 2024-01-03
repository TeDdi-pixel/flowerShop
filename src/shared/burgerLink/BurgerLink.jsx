import React from "react";
import { Link } from "react-router-dom";

const BurgerLink = ({ path, name }) => {
  return <Link to={path}>{name}</Link>;
};

export default BurgerLink;
