import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FcGoogle } from "react-icons/fc";
import ProfileImg from "../../../shared/profileImg/ProfileImg";
import useCart from "../../../hooks/useCart";
import { signInWithGoogle } from "../../../services/signInWithGoogle";
import {
  initializeCart,
  setTotalPrice,
  updateCart,
} from "../../../store/slices/cartSlice";
import {
  setUserData,
  setUserIsSignedIn,
} from "../../../store/slices/userSlice";
import {
  getFromCookies,
  getFromLocalStorage,
} from "../../../helpers/browserActions";

const GoogleLogin = () => {
  const uid = useSelector((state) => state.user.userData);
  const [userPhoto, setUserPhoto] = useState(null);
  const cookiesEnabled = useSelector((state) => state.cookies.cookiesEnabled);
  const dispatch = useDispatch();
  const storageUserData = useSelector((state) => state.user.storageUserData);
  const { cartData } = useCart("userCarts", uid, cookiesEnabled);

  const loginWithGoogle = async () => {
    await signInWithGoogle(dispatch).then(({ uid }) => {
      if (uid) {
        dispatch(setUserIsSignedIn(uid));
        if (cookiesEnabled) {
          dispatch(setUserData(uid));
          if (cartData) {
            dispatch(initializeCart({ cartData, cookiesEnabled }));
            dispatch(setTotalPrice(cartData));
          }
        }
      } else
        console.wart("Unable to set cookies user due to missing user data");
    });
  };

  useEffect(() => {
    const storageUserData = getFromLocalStorage("user");
    setUserPhoto(storageUserData?.user?.photoURL);
    const totalPrice = getFromCookies("totalPrice");
    if (totalPrice) {
      const savedTotalPrice = totalPrice;
      if (cartData) {
        dispatch(setTotalPrice(savedTotalPrice));
        dispatch(updateCart(cartData));
      }
    }
  }, [uid, cookiesEnabled, cartData, storageUserData]);

  return userPhoto ? (
    <ProfileImg img={userPhoto} />
  ) : (
    <div onClick={loginWithGoogle} className="header__login">
      <div className="header__login-text">Login with</div>
      <FcGoogle />
    </div>
  );
};

export default GoogleLogin;
