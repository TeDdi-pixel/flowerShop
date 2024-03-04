import { useSelector } from "react-redux";
import { RootState } from "../../../store/types/types";
import { TypePromptNoteComponents } from "../../../entities/generator/types/types";

const PromptNoteTitle = ({ title }: TypePromptNoteComponents) => {
  const { promptNoteHidden } = useSelector(
    (state: RootState) => state.generator
  );
  return (
    <h3
      className={`generator__prompt-note-title ${
        promptNoteHidden ? "generator__prompt-note-title_hidden" : false
      }`}
    >
      {title}
    </h3>
  );
};

export default PromptNoteTitle;
