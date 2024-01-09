import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/counterSlice";
import showMoreSlice from "../slices/showMoreSlice";

export default configureStore({
  reducer: {
    counter: counterSlice,
    showMore: showMoreSlice,
  },
});
