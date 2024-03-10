import { LuSearch } from "react-icons/lu";
import { Link } from "react-router-dom";

const HeaderIconSearch = () => {
  return (
    <Link to="/Home/Search" className={"header__icon-search"}>
      <LuSearch style={{ color: "#665F5F", fontSize: "17px" }} />
    </Link>
  );
};

export default HeaderIconSearch;
