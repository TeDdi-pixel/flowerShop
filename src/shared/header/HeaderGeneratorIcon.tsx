import { Link } from "react-router-dom";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import { Tooltip, Typography, Zoom } from "@mui/material";

const HeaderGeneratorIcon = () => {
  return (
    <Tooltip title="Bouquet generator" TransitionComponent={Zoom} enterDelay={750}>
      <Typography variant="caption" fontSize={12} fontFamily="Montserrat">
        <Link to="/Home/Generator" className="header__icon-generator">
          <AutoAwesomeRoundedIcon sx={{ color: "#665F5F" }} />
        </Link>
      </Typography>
    </Tooltip>
  );
};

export default HeaderGeneratorIcon;
