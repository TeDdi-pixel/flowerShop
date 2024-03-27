import { useSelector } from "react-redux";
import { RootState } from "../../../store/types/types";
import { Button } from "@mui/material";
import { TypeFormButtons } from "../../../entities/forms/types/types";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { pink } from "@mui/material/colors";

const GenerateTitleBtn = ({ generateAnswer }: TypeFormButtons) => {
  const { genLoading, generatedTitle } = useSelector(
    (state: RootState) => state.imageCartForm
  );
  return generatedTitle || genLoading ? null : (
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
  );
};

export default GenerateTitleBtn;
