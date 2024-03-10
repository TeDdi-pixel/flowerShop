import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import {
  getFromCookies,
  getFromLocalStorage,
  saveToCookies,
  saveToLocalStorage,
} from "../../helpers/storageUtils";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userIsSignIn: !!getFromLocalStorage("user"),
    uid: getFromCookies("user") || getFromLocalStorage("user")?.user?.uid,
    storageUserData: getFromLocalStorage("user"),
    profilePhoto: "",
  },
  reducers: {
    setUid: (state, actions: PayloadAction<string>) => {
      if (actions.payload) {
        state.uid = actions.payload;
        state.storageUserData = getFromLocalStorage("user");
        if (state.storageUserData) saveToCookies("user", actions.payload);
      }
    },
    setUserIsSignedIn: (state, action) => {
      if (action.payload) state.userIsSignIn = action.payload;
      else state.userIsSignIn = false;
    },
    setStorageUserData: (state, action) => {
      state.storageUserData = action.payload;
      saveToLocalStorage("user", action.payload);
    },
    logOutUser: (state) => {
      state.uid = null;
      localStorage.removeItem("user");
      const user = getFromCookies("user");
      if (user) saveToCookies("user", {});
      else Cookies.remove("user");
      Cookies.remove("cart");
      Cookies.remove("totalPrice");
    },
    setProfilePhoto: (state, action) => {
      state.profilePhoto = action.payload;
    },
  },
});

export const {
  setStorageUserData,
  logOutUser,
  setUserIsSignedIn,
  setProfilePhoto,
  setUid,
} = userSlice.actions;

export default userSlice.reducer;
