import { Link } from "react-router-dom";
import { TypeMainButton } from "./types/types";

const MainBtn = ({
  text,
  bgColor,
  fontColor,
  marginBottom,
  link,
  onClick
}: TypeMainButton) => {
  return (
    <Link
      to={link}
      style={{
        backgroundColor: bgColor,
        color: fontColor,
        marginBottom: marginBottom,
      }}
      className="button_main"
      onClick={onClick}
    >
      {text}
    </Link>
  );
};

export default MainBtn;
