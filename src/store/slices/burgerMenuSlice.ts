import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const burgerMenuSlice = createSlice({
  name: "burgerMenu",
  initialState: {
    burgerMenuOpened: false,
  },
  reducers: {
    setBurgerMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.burgerMenuOpened = action.payload;
    },
  },
});

export const { setBurgerMenuOpen } = burgerMenuSlice.actions;

export default burgerMenuSlice.reducer;