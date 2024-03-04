import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setBurgerMenuOpen } from "../../store/slices/burgerMenuSlice";

const BurgerLink = ({ path, name }) => {
  const dispatch = useDispatch();
  return (
    <Link to={path} onClick={() => dispatch(setBurgerMenuOpen(false))}>
      {name}
    </Link>
  );
};

export default BurgerLink;
