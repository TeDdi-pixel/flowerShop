import React from "react";
import { signInWithGoogle } from "../../services/signInWithGoogle";
import { useSelector } from "react-redux";
import { FcGoogle } from "react-icons/fc";
import ProfileImg from "../../shared/profileImg/ProfileImg";

const GoogleLogin = () => {
  const cookiesEnabled = useSelector((state) => state.cookies.cookiesEnabled);
  const userData = useSelector((state) => state.user.userLocalStorageData);
  const cartData = useSelector((state) => state.cart.cartData);

  return userData && userData.user ? (
    <ProfileImg img={userData.user.photoURL} />
  ) : (
    <div
      onClick={() => signInWithGoogle(cookiesEnabled, cartData)}
      className="header__login"
    >
      <div className="header__login-text">Login with</div>
      <FcGoogle />
    </div>
  );
};

export default GoogleLogin;
