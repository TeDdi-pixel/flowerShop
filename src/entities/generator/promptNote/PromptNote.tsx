import { useSelector } from "react-redux";
import { RootState } from "../../../store/types/types";
import {
  TbLayoutSidebarRightCollapseFilled,
  TbLayoutSidebarLeftCollapseFilled,
} from "react-icons/tb";
import { TypePromptNote } from "../types/types";
import PromptNoteTitle from "../../../shared/generator/promptNote/PromptNoteTitle";
import PromptNoteText from "../../../shared/generator/promptNote/PromptNoteText";
import PromptNoteTitleWrapper from "../../../shared/generator/promptNote/PromptNoteTitleWrapper";

const PromptNote = ({ showPromptNote, hidePromptNote }: TypePromptNote) => {
  const { promptNote, flowers, promptNoteHidden } = useSelector(
    (state: RootState) => state.generator
  );
  const { burgerMenuOpened } = useSelector(
    (state: RootState) => state.burgerMenu
  );
  return (
    <div
      className={`generator__prompt-note ${
        promptNote ? "generator__prompt-note_active" : ""
      } ${promptNoteHidden ? "generator__prompt-note_hidden" : ""}`}
      style={{ zIndex: `${burgerMenuOpened ? "1" : "1000"}` }}
    >
      <PromptNoteTitleWrapper>
        <PromptNoteTitle title={"Chosen flowers:"} />
        <TbLayoutSidebarRightCollapseFilled
          className={`generator__prompt-note-collapse ${
            promptNoteHidden ? "generator__prompt-note-collapse_hidden" : ""
          }`}
          onClick={(e) => {
            e.stopPropagation();
            hidePromptNote();
          }}
        />
      </PromptNoteTitleWrapper>
      <PromptNoteText text={`${promptNote ? flowers.join(", ") : 'empty'}`} />
      <TbLayoutSidebarLeftCollapseFilled
        className={`generator__prompt-note-expand ${
          promptNoteHidden ? "generator__prompt-note-expand_active" : ""
        }`}
        onClick={showPromptNote}
      />
    </div>
  );
};

export default PromptNote;
