import { createSlice } from "@reduxjs/toolkit";

export const showMoreSlice = createSlice({
  name: "showMore",
  initialState: {
    showMore: false,
    selectedItem: null,
  },
  reducers: {
    handleShowMore: (state) => {
      state.value = !state.value;
    },
    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload;
    },
  },
});

export const { handleShowMore, setSelectedItem } = showMoreSlice.actions;

export default showMoreSlice.reducer;
