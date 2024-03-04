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
  text?: ReactNode[];
};

export type TypePromptNoteComponents = {
  title?: string;
  flowers?: string;
  children?: ReactNode;
  text?: ReactNode[];
};
