import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { generateAnswer } from "../asyncThunks/generateAnswer";

export const imageCartFormSlice = createSlice({
  name: "imageCartForm",
  initialState: {
    isFormOpen: false,
    generatedTitle: "",
    genLoading: false,
    productId: "",
  },
  reducers: {
    setIsFormOpen: (state, actions: PayloadAction<boolean>) => {
      state.isFormOpen = actions.payload;
    },
    resetGeneratedTitle: (state, actions: PayloadAction<string>) => {
      state.generatedTitle = actions.payload;
    },
    setProductId: (state, actions: PayloadAction<string>) => {
      state.productId = actions.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(generateAnswer.pending, (state) => {
        state.genLoading = true;
      })
      .addCase(
        generateAnswer.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.generatedTitle = action.payload;
          state.genLoading = false;
        }
      )
      .addCase(generateAnswer.rejected, (state) => {
        state.genLoading = false;
        console.log("error");
      }),
});

export const { setIsFormOpen, resetGeneratedTitle, setProductId } =
  imageCartFormSlice.actions;
export default imageCartFormSlice.reducer;
