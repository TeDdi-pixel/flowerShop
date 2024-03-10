import { useSelector } from "react-redux";
import { RootState } from "../../../store/types/types";
import { Button } from "@mui/material";
import { TypeFormButtons } from "../types/types";

const GenerateTitleBtn = ({ generateAnswer }: TypeFormButtons) => {
  const { genLoading, generatedTitle } = useSelector(
    (state: RootState) => state.imageCartForm
  );
  return generatedTitle || genLoading ? null : (
    <Button
      size="small"
      onClick={generateAnswer}
      variant="contained"
      color="secondary"
    >
      Create title
    </Button>
  );
};

export default GenerateTitleBtn;
