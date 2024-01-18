import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CookiesText from "../../shared/cookiesText/CookiesText";
import CookiesBtn from "../../shared/cookiesText/CookiesBtn";
import {
  closeCookiesMessage,
  enableCookies,
} from "../../store/slices/cookiesSlice";
import Exit from "../../shared/exit/Exit";
import useWindowResize from "../../hooks/useWindowResize";
import { setUserData } from "../../store/slices/userSlice";

const CookiesMessage = () => {
  const { isFullWidth } = useWindowResize(465);
  const cookiesEnabled = useSelector((state) => state.cookies.cookiesEnabled);
  const cookiesMessage = useSelector((state) => state.cookies.cookiesMessage);
  const storageUserData = useSelector((state) => state.user.storageUserData);
  const dispatch = useDispatch();

  const enableCookiesData = () => {
    dispatch(enableCookies());
    if (storageUserData?.user?.uid) {
      dispatch(setUserData(storageUserData?.user?.uid));
    }
  };

  return cookiesMessage && !cookiesEnabled ? (
    <div className="cookies">
      <CookiesText />
      <CookiesBtn enableCookies={enableCookiesData} />
      <Exit
        onClick={() => dispatch(closeCookiesMessage())}
        top={isFullWidth ? "10px" : "25px"}
        right={isFullWidth ? "10px" : "25px"}
        color={"white"}
      />
    </div>
  ) : null;
};

export default CookiesMessage;
