import { Link } from "react-router-dom";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

const HeaderGeneratorIcon = () => {
  return (
    <Link to="/Home/Generator" className="header__icon-generator">
      <AutoAwesomeRoundedIcon sx={{ color: "#665F5F" }} />
    </Link>
  );
};

export default HeaderGeneratorIcon;
