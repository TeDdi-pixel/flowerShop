import { Button, Tooltip, Typography, Zoom } from "@mui/material";
import { TypeFormButtons } from "../../../entities/forms/types/types";
import { pink } from "@mui/material/colors";

const FormButton = ({
  text,
  func,
  startIcon,
  endIcon,
  variant = "contained",
  size = "medium",
  tooltip,
  placement = "top",
  color,
}: TypeFormButtons) => {
  return (
    <div className="img-cart-form__main-btn">
      <Tooltip
        TransitionComponent={Zoom}
        enterDelay={750}
        title={
          tooltip ? (
            <Typography variant="caption" fontSize={12} fontFamily="Montserrat">
              {tooltip}
            </Typography>
          ) : null
        }
        placement={placement as "top" | "bottom"}
      >
        <Button
          size={size as "small" | "medium" | "large"}
          onClick={func}
          variant={variant as "text" | "contained" | "outlined"}
          style={color ? { color: pink[100] } : { backgroundColor: pink[100] }}
          endIcon={endIcon}
          startIcon={startIcon}
        >
          {text}
        </Button>
      </Tooltip>
    </div>
  );
};

export default FormButton;
