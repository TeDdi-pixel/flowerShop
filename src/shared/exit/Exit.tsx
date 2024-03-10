import { RxCross1 } from "react-icons/rx";
import { TypeExit } from "./types/types";

const Exit = ({ onClick, top, right, color }: TypeExit) => {
  return (
    <RxCross1
      onClick={onClick}
      className="exit"
      style={{
        top: top,
        right: right,
        color: color,
      }}
    />
  );
};

export default Exit;
