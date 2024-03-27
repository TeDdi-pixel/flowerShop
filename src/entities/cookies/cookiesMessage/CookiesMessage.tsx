import { useDispatch, useSelector } from "react-redux";
import CookiesText from "../../../shared/cookiesText/CookiesText";
import CookiesBtn from "../../../shared/cookiesText/CookiesBtn";
import {
  closeCookiesMessage,
  enableCookies,
} from "../../../store/slices/cookiesSlice";
import Exit from "../../../shared/exit/Exit";
import useWindowResize from "../../../hooks/useWindowResize";
import { RootState } from "../../../store/types/types";

const CookiesMessage = () => {
  const { isFullWidth } = useWindowResize(465);
  const { cookiesEnabled, cookiesMessage } = useSelector(
    (state: RootState) => state.cookies
  );
  const dispatch = useDispatch();

  const enableCookiesData = () => {
    dispatch(enableCookies());
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
