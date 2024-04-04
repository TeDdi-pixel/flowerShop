import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { generateBouquet } from "../asyncThunks/generateBouquet";

export const bouquetGeneratorSlice = createSlice({
  name: "bouquetGenerator",
  initialState: {
    flowers: [] as string[],
    prompt: "",
    generatedImage: "" as string | string[],
    genLoading: false,
    presetPrompt: null as number | null,
    promptNote: false,
    promptNoteHidden: false,
  },
  reducers: {
    setFlowers: (state, actions: PayloadAction<string[]>) => {
      state.flowers = actions.payload;
    },
    setPrompt: (state, actions: PayloadAction<string>) => {
      state.prompt = actions.payload;
    },
    setGeneratedImage: (state, actions: PayloadAction<string | string[]>) => {
      state.generatedImage = actions.payload;
    },
    setGenLoading: (state, actions: PayloadAction<boolean>) => {
      state.genLoading = actions.payload;
    },
    setPresetPrompt: (state, actions: PayloadAction<number | null>) => {
      state.presetPrompt = actions.payload;
    },
    setPromptNote: (state, actions: PayloadAction<boolean>) => {
      state.promptNote = actions.payload;
    },
    setPromptNoteHidden: (state, actions: PayloadAction<boolean>) => {
      state.promptNoteHidden = actions.payload;
      if (state.promptNoteHidden) state.promptNote = false;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(generateBouquet.pending, (state) => {
        state.genLoading = true;
      })
      .addCase(
        generateBouquet.fulfilled,
        (state, actions: PayloadAction<string>) => {
          state.generatedImage = actions.payload;
          state.genLoading = false;
        }
      )
      .addCase(generateBouquet.rejected, (state) => {
        state.prompt = "";
        state.genLoading = false;
      })
});

export const {
  setFlowers,
  setPrompt,
  setGeneratedImage,
  setGenLoading,
  setPresetPrompt,
  setPromptNote,
  setPromptNoteHidden,
} = bouquetGeneratorSlice.actions;

export default bouquetGeneratorSlice.reducer;
