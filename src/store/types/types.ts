import { AsyncThunkAction } from "@reduxjs/toolkit";

export type TypeGenerator = {
  flower: string;
  selectedFlower: number | null;
  flowersCount: string;
  prompt: string;
  generatedImage: string;
  genLoading: boolean;
  presetPrompt: number | null;
};

export type TypeBouquetThunk = {
  generateBouquet: () => AsyncThunkAction<string, void, {}>;
};

export type RootState = {
  generator: TypeGenerator;
};
