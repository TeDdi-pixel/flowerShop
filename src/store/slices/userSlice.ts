import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { getFromCookies, saveToCookies } from "../../helpers/storageUtils";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userIsSignIn: !!getFromCookies("user"),
    uid: getFromCookies("user").uid,
    profilePhoto: "",
  },
  reducers: {
    setUid: (state, actions: PayloadAction<string | null>) => {
      if (actions.payload) state.uid = actions.payload;
    },
    setUserIsSignedIn: (state, action) => {
      if (action.payload) state.userIsSignIn = action.payload;
      else state.userIsSignIn = false;
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

export const { logOutUser, setUserIsSignedIn, setProfilePhoto, setUid } =
  userSlice.actions;

export default userSlice.reducer;
