import { Link } from "react-router-dom";
import { TypeCategoryLink } from "./types/types";

const CategoryLink = ({ location, icon }: TypeCategoryLink) => {
  return (
    <Link className="generator__flower-link" to={location}>
      {icon}
    </Link>
  );
};

export default CategoryLink;
