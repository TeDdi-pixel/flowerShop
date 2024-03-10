import { CgMenuLeft } from "react-icons/cg";
import { setBurgerMenuOpen } from "../../store/slices/burgerMenuSlice";
import { useDispatch } from "react-redux";

const HeaderIconMenu = () => {
  const dispatch = useDispatch();
  return (
    <button
      className="header__icon-menu"
      onClick={() => dispatch(setBurgerMenuOpen(true))}
    >
      <CgMenuLeft style={{ color: "#665F5F" }} />
    </button>
  );
};

export default HeaderIconMenu;
