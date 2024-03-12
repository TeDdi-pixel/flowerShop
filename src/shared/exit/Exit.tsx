import { TypeExit } from "./types/types";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
const Exit = ({ onClick, top, right, color }: TypeExit) => {
  return (
    <CloseRoundedIcon
      fontSize="large"
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
