import { Link } from "react-router-dom";
import { RiAiGenerate } from "react-icons/ri";

const HeaderGeneratorIcon = () => {
  return (
    <Link to='/Home/Generator' className="header__icon-generator">
      <RiAiGenerate style={{ color: "#665F5F" }} />
    </Link>
  );
};

export default HeaderGeneratorIcon;
