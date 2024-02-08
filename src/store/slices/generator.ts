import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const generatorSlice = createSlice({
  name: "generator",
  initialState: {
    flower: "",
    selectedFlower: null as number | null,
    flowersCount: "1",
    prompt: "",
    generatedImage: "" as string | string[],
    genLoading: false,
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
  },
});

export const {
  setFlower,
  setSelectedFlower,
  setFlowersCount,
  setPrompt,
  setGeneratedImage,
  setGenLoading,
} = generatorSlice.actions;

export default generatorSlice.reducer;
