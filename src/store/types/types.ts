import { AsyncThunkAction } from "@reduxjs/toolkit";

export type TypeGenerator = {
  flowers: string[];
  flowersCount: string;
  prompt: string;
  generatedImage: string;
  genLoading: boolean;
  presetPrompt: number | null;
  promptNote: boolean;
  promptNoteHidden: boolean;
  bouquetFlowers: string[]
};

export type TypeBouquetThunk = {
  generateBouquet: () => AsyncThunkAction<string[], void, {}>;
};

export type RootState = {
  generator: TypeGenerator;
};