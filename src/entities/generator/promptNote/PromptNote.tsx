import {  useSelector } from "react-redux";
import { RootState } from "../../../store/types/types";
import {
  TbLayoutSidebarRightCollapseFilled,
  TbLayoutSidebarLeftCollapseFilled,
} from "react-icons/tb";
import { TypePromptNote } from "../types/types";
import PromptNoteTitle from "../../../shared/generator/promptNote/PromptNoteTitle";
import PromptNoteText from "../../../shared/generator/promptNote/PromptNoteText";
import PromptNoteTitleWrapper from "../../../shared/generator/promptNote/PromptNoteTitleWrapper";
// import { generateBouquet } from "../../../store/asyncThunks/generateBouquet";
// import { ThunkDispatch } from "redux-thunk";
// import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
// import { Button } from "@mui/material";
// import { grey } from "@mui/material/colors";
// import { generateNumber } from "../../../helpers/generateNumber";
// import {
//   resetGeneratedTitle,
//   setProductId,
// } from "../../../store/slices/imageCartFormSlice";
// import { setPromptNoteHidden } from "../../../store/slices/generatorSlice";
// import { scrollTo } from "../../../helpers/scrollTo";

const PromptNote = ({
  showPromptNote,
  hidePromptNote,
  text,
}: TypePromptNote) => {
  const { promptNote, promptNoteHidden } = useSelector(
    (state: RootState) => state.generator
  );
  // const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const { burgerMenuOpened } = useSelector(
    (state: RootState) => state.burgerMenu
  );

  let zIndexValue;
  if (burgerMenuOpened) {
    zIndexValue = "1";
  } else if (promptNote || promptNoteHidden) {
    zIndexValue = "1000";
  } else {
    zIndexValue = "-5";
  }

  // const handleGenerateBouquet = () => {
  //   dispatch(setProductId(generateNumber(0, 12576594233)));
  //   dispatch(resetGeneratedTitle(""));
  //   dispatch(generateBouquet());
  //   scrollTo(75);
  //   if (promptNote) dispatch(setPromptNoteHidden(true));
  // };
  return (
    <div
      className={`generator__prompt-note ${
        promptNote ? "generator__prompt-note_active" : ""
      } ${promptNoteHidden ? "generator__prompt-note_hidden" : ""}`}
      style={{ zIndex: zIndexValue }}
    >
      <PromptNoteTitleWrapper>
        <PromptNoteTitle title={"Chosen flowers:"} />
        <TbLayoutSidebarRightCollapseFilled
          className={`generator__prompt-note-collapse ${
            promptNoteHidden ? "generator__prompt-note-collapse_hidden" : ""
          }`}
          onClick={hidePromptNote}
        />
      </PromptNoteTitleWrapper>
      <PromptNoteText>{promptNote ? text : <span>empty</span>}</PromptNoteText>
      <TbLayoutSidebarLeftCollapseFilled
        className={`generator__prompt-note-expand ${
          promptNoteHidden ? "generator__prompt-note-expand_active" : ""
        }`}
        onClick={showPromptNote}
      />
        {/* <Button
          endIcon={<AutoAwesomeRoundedIcon />}
          variant="text"
          className={`generator__prompt-note-generate-btn ${
            promptNoteHidden ? "generator__prompt-note-generate-btn_hidden" : ""
          }`}
          style={{ color: grey[700]}}
          onClick={handleGenerateBouquet}
        >
          Generate
        </Button> */}
    </div>
  );
};

export default PromptNote;
