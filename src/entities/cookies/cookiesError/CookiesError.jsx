import React from "react";
import { MdError } from "react-icons/md";
import Exit from "../../../shared/exit/Exit";

const CookiesError = ({ error, errorMessage, handleExit }) => {
  return (
    <div className={`cookies-error ${error ? "cookies-error_open" : ""}`}>
      <MdError style={{ fontSize: "20px", color: " #ec4c4c" }} />
      <Exit onClick={handleExit} />
      {errorMessage}
    </div>
  );
};

export default CookiesError;
