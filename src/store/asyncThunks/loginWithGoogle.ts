import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithGoogle } from "../../services/signInWithGoogle";
import { RootState } from "../types/types";
import { setDisplayName, setIsAdmin, setUid, setUserIsSignedIn } from "../slices/userSlice";
import { initializeCart, setTotalPrice } from "../slices/cartSlice";

export const loginWithGoogle = createAsyncThunk(
  "services/loginWithGoogle",
  async (_, { getState, dispatch }) => {
    const state = getState() as RootState;
    const { cartData } = state.cart;
    const { cookiesEnabled } = state.cookies;

    const user = await signInWithGoogle();
    if (!user) {
      throw new Error("User data is not set");
    }
    dispatch(setUserIsSignedIn(user));

    if (!cookiesEnabled) throw new Error("Cookies is disabled");

    dispatch(setUid(user.uid));
    dispatch(setIsAdmin(user.isAdmin));
    dispatch(setDisplayName(user.displayName));

    if (!cartData) throw new Error("Cart data is not set");

    dispatch(initializeCart({ cartData, cookiesEnabled }));
    dispatch(setTotalPrice(cartData));
  }
);
