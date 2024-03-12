import { Tooltip, Zoom } from "@mui/material";
import { TypeFlowerImgButton } from "./types/types";

const FlowerImgButton = ({
  tooltip,
  onClick,
  className,
  icon,
  placement,
}: TypeFlowerImgButton) => {
  return (
    <Tooltip
      title={tooltip}
      placement={placement}
      arrow
      TransitionComponent={Zoom}
    >
      <button onClick={onClick} className={className}>
        {icon}
      </button>
    </Tooltip>
  );
};

export default FlowerImgButton;
