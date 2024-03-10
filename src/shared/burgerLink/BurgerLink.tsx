import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setBurgerMenuOpen } from "../../store/slices/burgerMenuSlice";
import { TypeBurgerLink } from "./types/types";

const BurgerLink = ({ path, name }: TypeBurgerLink) => {
  const dispatch = useDispatch();
  return (
    <Link to={path} onClick={() => dispatch(setBurgerMenuOpen(false))}>
      {name}
    </Link>
  );
};

export default BurgerLink;
