import { createSlice } from "@reduxjs/toolkit";

export const productInfoSlice = createSlice({
  name: "sliderProduct",
  initialState: {
    selectedSize: null,
    soledOutStatuses: [],
    isSliderOpened: false,
    showMore: false,
    selectedItem: null,
  },
  reducers: {
    setSelectedSize: (state, action) => {
      state.selectedSize = action.payload;
    },
    setSoledOutStatuses: (state, action) => {
      state.soledOutStatuses = action.payload.map(
        (item: { text: string }) => item.text.toLowerCase() === "sold out"
      );
    },
    setIsSliderOpened: (state) => {
      state.isSliderOpened = !state.isSliderOpened;
    },
    handleShowMore: (state) => {
      state.showMore = !state.showMore;
    },
    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload;
    },
  },
});

export const {
  setSelectedSize,
  setSoledOutStatuses,
  setIsSliderOpened,
  handleShowMore,
  setSelectedItem,
} = productInfoSlice.actions;

export default productInfoSlice.reducer;
