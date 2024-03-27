import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FcGoogle } from "react-icons/fc";
import ProfileImg from "../../../shared/profileImg/ProfileImg";
import useCart from "../../../hooks/useCart";
import { setTotalPrice, updateCart } from "../../../store/slices/cartSlice";
import { setProfilePhoto } from "../../../store/slices/userSlice";
import { getFromCookies } from "../../../helpers/storageUtils";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../../../store/types/types";
import { loginWithGoogle } from "../../../store/asyncThunks/loginWithGoogle";

const GoogleLogin = () => {
  const { uid, profilePhoto } = useSelector((state: RootState) => state.user);
  const { cookiesEnabled } = useSelector((state: RootState) => state.cookies);
  const { loading } = useSelector((state: RootState) => state.services);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const { cartData } = useCart();

  useEffect(() => {
    const user = getFromCookies("user");
    if (!loading) dispatch(setProfilePhoto(user.profilePhoto));

    const cookiesTotalPrice = getFromCookies("totalPrice");
    if (cookiesTotalPrice && cartData) {
      dispatch(updateCart(cartData));
      dispatch(setTotalPrice(cookiesTotalPrice));
    }
  }, [uid, cookiesEnabled, cartData, loading]);

  return profilePhoto ? (
    <ProfileImg img={profilePhoto} />
  ) : (
    <button
      onClick={() => dispatch(loginWithGoogle())}
      className="header__login"
    >
      <div className="header__login-text">Login with</div>
      <FcGoogle />
    </button>
  );
};

export default GoogleLogin;
