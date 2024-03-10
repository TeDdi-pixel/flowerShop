import { createSlice } from "@reduxjs/toolkit";
import { loginWithGoogle } from "../asyncThunks/loginWithGoogle";

export const servicesSlice = createSlice({
  name: "services",
  initialState: {
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginWithGoogle.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginWithGoogle.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(loginWithGoogle.rejected, (state, actions) => {
        state.error = actions.error.message || "Unknown error";
        console.error(state.error);
        state.loading = false;
      });
  },
});

export const {} = servicesSlice.actions;

export default servicesSlice.reducer;
