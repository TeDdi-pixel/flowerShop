import { useSelector } from "react-redux";
import { RootState } from "../../../store/types/types";
import { Button, Tooltip } from "@mui/material";
import { TypeFormButtons } from "../../../entities/forms/types/types";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { pink } from "@mui/material/colors";

const GenerateTitleBtn = ({ generateAnswer }: TypeFormButtons) => {
  const { genLoading, generatedTitle } = useSelector(
    (state: RootState) => state.imageCartForm
  );
  return generatedTitle || genLoading ? null : (
    <Tooltip title="Generator will try to find the best name for your bouquet according to count and type of your flowers">
      <Button
      size="small"
      onClick={generateAnswer}
      variant="contained"
      style={{ backgroundColor: pink[100] }}
      color="secondary"
      endIcon={<AutoAwesomeIcon />}
    >
      Create title
    </Button>
    </Tooltip>
  );
};

export default GenerateTitleBtn;
