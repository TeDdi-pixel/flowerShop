import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CookiesText from "../../shared/cookiesText/CookiesText";
import CookiesBtn from "../../shared/cookiesText/CookiesBtn";
import {
  closeCookiesMessage,
  enableCookies,
} from "../../store/slices/cookiesSlice";
import Exit from "../../shared/exit/Exit";
import { setUserCookies } from "../../services/setUserCookies";

const CookiesMessage = () => {
  const cookiesEnabled = useSelector((state) => state.cookies.cookiesEnabled);
  const cookiesMessage = useSelector((state) => state.cookies.cookiesMessage);
  const userData = useSelector((state) => state.user.userLocalStorageData);
  const dispatch = useDispatch();
  setUserCookies(cookiesEnabled, userData);

  return cookiesMessage && !cookiesEnabled ? (
    <div className="cookies">
      <CookiesText />
      <CookiesBtn enableCookies={() => dispatch(enableCookies())} />
      <Exit
        onClick={() => dispatch(closeCookiesMessage())}
        top={"25px"}
        right={"25px"}
        color={"white"}
      />
    </div>
  ) : null;
};

export default CookiesMessage;
