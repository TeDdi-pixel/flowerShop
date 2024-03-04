import { useSelector } from "react-redux";
import { RootState } from "../../../store/types/types";
import FlipMove from "react-flip-move";
import { TypePromptNoteComponents } from "../../../entities/generator/types/types";

const PromptNoteText = ({ children }: TypePromptNoteComponents) => {
  const { promptNoteHidden } = useSelector(
    (state: RootState) => state.generator
  );

  return (
    <FlipMove
      className={`generator__prompt-note-text ${
        promptNoteHidden ? "generator__prompt-note-text_hidden" : ""
      }`}
      duration={200}
    >
      {children}
    </FlipMove>
  );
};

export default PromptNoteText;
