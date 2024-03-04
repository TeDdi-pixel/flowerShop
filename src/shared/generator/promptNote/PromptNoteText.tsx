import { useSelector } from "react-redux";
import { TypePromptNoteComponents } from "../../../entities/generator/types/types";
import { RootState } from "../../../store/types/types";

const PromptNoteText = ({ text }: TypePromptNoteComponents) => {
  const { promptNoteHidden } = useSelector(
    (state: RootState) => state.generator
  );
  return (
    <span
      className={`generator__prompt-note-text ${
        promptNoteHidden ? "generator__prompt-note-text_hidden" : ""
      }`}
    >
      {text}
    </span>
  );
};

export default PromptNoteText;
