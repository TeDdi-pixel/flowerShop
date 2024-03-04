import { useSelector } from "react-redux";
import { RootState } from "../../../store/types/types";
import {
  TbLayoutSidebarRightCollapseFilled,
  TbLayoutSidebarLeftCollapseFilled,
} from "react-icons/tb";

import { TypePromptNote } from "../types/types";

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
      <div className="generator__prompt-note-title-wrapper">
        <h3
          className={`generator__prompt-note-title ${
            promptNoteHidden ? "generator__prompt-note-title_hidden" : false
          }`}
        >
          Chosen flowers:
        </h3>
        <TbLayoutSidebarRightCollapseFilled
          className={`generator__prompt-note-collapse ${
            promptNoteHidden ? "generator__prompt-note-collapse_hidden" : ""
          }`}
          onClick={(e) => {
            e.stopPropagation();
            hidePromptNote();
          }}
        />
      </div>

      <span
        className={`generator__prompt-note-text ${
          promptNoteHidden ? "generator__prompt-note-text_hidden" : ""
        }`}
      >
        {promptNote ? flowers.join(", ") : false}
      </span>
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
