import { TypePromptNoteComponents } from "../../../entities/generator/types/types";

const PromptNoteTitleWrapper = ({ children }: TypePromptNoteComponents) => {
  return <div className="generator__prompt-note-title-wrapper">{children}</div>;
};

export default PromptNoteTitleWrapper;
