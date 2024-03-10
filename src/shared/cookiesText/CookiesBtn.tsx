import { TypeCookiesBtn } from "./types/types";

const CookiesBtn = ({ enableCookies, backgroundColor, color }:TypeCookiesBtn) => {
  return (
    <button
      className="cookies-btn"
      onClick={enableCookies}
      style={{ backgroundColor: backgroundColor }}
    >
      <p className="cookies-btn__text" style={{ color: color }}>
        Enable cookies
      </p>
      <span></span>
    </button>
  );
};

export default CookiesBtn;
