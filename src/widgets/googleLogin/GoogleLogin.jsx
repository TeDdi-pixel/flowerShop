import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FcGoogle } from "react-icons/fc";
import ProfileImg from "../../shared/profileImg/ProfileImg";
import useCart from "../../hooks/useCart";
import { signInWithGoogle } from "../../services/signInWithGoogle";

const GoogleLogin = () => {
  const uid = useSelector((state) => state.user.userData);
  const cookiesEnabled = useSelector((state) => state.cookies.cookiesEnabled);
  const userData = useSelector((state) => state.user.userLocalStorageData);
  const dispatch = useDispatch();
  const { data } =  useCart("userCarts", uid)

  const signIn = useCallback(async () => {
    await signInWithGoogle(dispatch,cookiesEnabled, data);
  }, [cookiesEnabled, data]);

  
  return userData && userData.user ? (
    <ProfileImg img={userData.user.photoURL} />
  ) : (
    <div onClick={signIn} className="header__login">
      <div className="header__login-text">Login with</div>
      <FcGoogle />
    </div>
  );
};

export default GoogleLogin;
