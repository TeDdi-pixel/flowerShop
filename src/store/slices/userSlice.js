import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const userCookie = Cookies.get("user");
const userLocalStorage = localStorage.getItem("user");
const photoURL = JSON.parse(localStorage.getItem("user"))?.user?.photoURL;
export const userSlice = createSlice({
  name: "user",
  initialState: {
    userIsSignIn: false,
    photoURL: userLocalStorage ? photoURL : false,
    userData: userCookie
      ? JSON.parse(userCookie)
      : localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : {},

    userLocalStorageData: userLocalStorage ? JSON.parse(userLocalStorage) : {},
  },
  reducers: {
    setUserData: (state, actions) => {
        state.userData = actions.payload;
        state.userIsSignIn = true;
      },
    
    logOutUser: (state) => {
      localStorage.setItem("user", JSON.stringify({}));
      Cookies.set("user", JSON.stringify({}), { expires: 7 });
      state.userData = {};
      state.userLocalStorageData = {};
      state.userIsSignIn = false;
    },
  },
});

export const { setUserData, logOutUser } = userSlice.actions;

export default userSlice.reducer;
