import { ReactNode } from "react";

export type TypePreset = {
  id: number;
  prompt: string;
  text: string;
};
export type TypePromptNote = {
  title?: string;
  showPromptNote: () => void;
  hidePromptNote: () => void;
};

export type TypePromptNoteComponents = {
  title?: string;
  text?: string;
  children?: ReactNode;
};
