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
  return (
    <div
      className={`generator__prompt-note ${
        promptNote ? "generator__prompt-note_active" : ""
      } ${promptNoteHidden ? "generator__prompt-note_hidden" : ""}`}
    >
      <h3
        className={`generator__prompt-note-title ${
          promptNoteHidden ? "generator__prompt-note-title_hidden" : false
        }`}
      >
        Chosen flowers:{" "}
        <TbLayoutSidebarRightCollapseFilled
          onClick={(e) => {
            e.stopPropagation();
            hidePromptNote();
          }}
        />
      </h3>
      <span
        className={`generator__prompt-note-text ${
          promptNote ? "generator__prompt-note-text_active" : ""
        } ${promptNoteHidden ? "generator__prompt-note-text_hidden" : ""}`}
      >
        {promptNote ? (
          flowers.join(", ")
        ) : (
          <TbLayoutSidebarLeftCollapseFilled onClick={showPromptNote} />
        )}
      </span>
    </div>
  );
};

export default PromptNote;
