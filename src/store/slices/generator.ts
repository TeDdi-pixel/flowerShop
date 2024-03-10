import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { generateBouquet } from "../asyncThunks/generateBouquet";

export const bouquetGeneratorSlice = createSlice({
  name: "bouquetGenerator",
  initialState: {
    flowers: [] as string[],
    // flowersCount: "1",
    prompt: "",
    generatedImage: "" as string | string[],
    genLoading: false,
    presetPrompt: null as number | null,
    promptNote: false,
    promptNoteHidden: false,
  },
  reducers: {
    setFlowers: (state, action: PayloadAction<string[]>) => {
      state.flowers = action.payload;
    },
    // setFlowersCount: (state, action: PayloadAction<string>) => {
    //   state.flowersCount = action.payload;
    // },
    setPrompt: (state, action: PayloadAction<string>) => {
      state.prompt = action.payload;
    },
    setGeneratedImage: (state, action: PayloadAction<string[]>) => {
      state.generatedImage = action.payload;
    },
    setGenLoading: (state, action: PayloadAction<boolean>) => {
      state.genLoading = action.payload;
    },
    setPresetPrompt: (state, action: PayloadAction<number | null>) => {
      state.presetPrompt = action.payload;
    },
    setPromptNote: (state, action: PayloadAction<boolean>) => {
      state.promptNote = action.payload;
    },
    setPromptNoteHidden: (state, action: PayloadAction<boolean>) => {
      state.promptNoteHidden = action.payload;
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
        (state, action: PayloadAction<string>) => {
          state.generatedImage = action.payload;
          state.genLoading = false;
        }
      )
      .addCase(generateBouquet.rejected, (state) => {
        state.prompt = "";
        state.genLoading = false;
      }),
});

export const {
  setFlowers,
  // setFlowersCount,
  setPrompt,
  setGeneratedImage,
  setGenLoading,
  setPresetPrompt,
  setPromptNote,
  setPromptNoteHidden,
} = bouquetGeneratorSlice.actions;

export default bouquetGeneratorSlice.reducer;
