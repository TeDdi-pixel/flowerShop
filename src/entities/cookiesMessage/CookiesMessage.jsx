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
import useWindowResize from "../../hooks/useWindowResize";

const CookiesMessage = () => {
  const { isFullWidth } = useWindowResize(465);
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
        top={isFullWidth ? "10px" : "25px"}
        right={isFullWidth ? "10px" : "25px"}
        color={"white"}
      />
    </div>
  ) : null;
};

export default CookiesMessage;
