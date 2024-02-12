import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { generateBouquet } from "../asyncThunks/generateBouquet";

export const generatorSlice = createSlice({
  name: "generator",
  initialState: {
    flower: "",
    selectedFlower: null as number | null,
    flowersCount: "1",
    prompt: "",
    generatedImage: "" as string | string[],
    genLoading: false,
    presetPrompt: null as number | null,
  },
  reducers: {
    setFlower: (state, action: PayloadAction<string>) => {
      state.flower = action.payload;
    },
    setSelectedFlower: (state, action: PayloadAction<number | null>) => {
      state.selectedFlower = action.payload;
    },
    setFlowersCount: (state, action: PayloadAction<string>) => {
      state.flowersCount = action.payload;
    },
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
  setFlower,
  setSelectedFlower,
  setFlowersCount,
  setPrompt,
  setGeneratedImage,
  setGenLoading,
  setPresetPrompt,
} = generatorSlice.actions;

export default generatorSlice.reducer;
