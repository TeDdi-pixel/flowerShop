import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { getFromCookies, saveToCookies } from "../../helpers/storageUtils";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userIsSignIn: !!getFromCookies("user"),
    uid: getFromCookies("user")?.uid,
    profilePhoto: null,
    isAdmin: getFromCookies("user")?.isAdmin,
    displayName: getFromCookies("user")?.displayName,
  },
  reducers: {
    setUid: (state, actions: PayloadAction<string | null>) => {
      if (actions.payload) state.uid = actions.payload;
    },
    setIsAdmin: (state, actions: PayloadAction<boolean>) => {
      state.isAdmin = actions.payload;
    },
    setUserIsSignedIn: (state, actions) => {
      if (actions.payload) state.userIsSignIn = actions.payload;
      else state.userIsSignIn = false;
    },
    setDisplayName: (state, actions) => {
      state.displayName = actions.payload;
    },
    logOutUser: (state) => {
      state.uid = null;
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
  logOutUser,
  setUserIsSignedIn,
  setProfilePhoto,
  setUid,
  setIsAdmin,
  setDisplayName,
} = userSlice.actions;

export default userSlice.reducer;
