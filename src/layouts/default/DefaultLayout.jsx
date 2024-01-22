import React from "react";
import Header from "../../widgets/header/Header";
import Footer from "../../widgets/footer/Footer";
import CookiesMessage from "../../entities/cookies/cookiesMessage/CookiesMessage";
import Path from "../../shared/path/Path";
import CookiesError from "../../entities/cookies/cookiesError/CookiesError";
import { useDispatch, useSelector } from "react-redux";
import { setError } from "../../store/slices/cookiesSlice";

const DefaultLayout = ({ children }) => {
  const cookiesErrorMessage = useSelector(
    (state) => state.cookies.cookiesErrorMessage
  );
  const cookiesError = useSelector((state) => state.cookies.cookiesError);
  const dispatch = useDispatch();

  const handleExit = () => {
    if (cookiesError) dispatch(setError(false));
  };
  return (
    <>
      <Header />
      <main onClick={handleExit}>
        <CookiesMessage />
        <Path />
        <CookiesError
          error={cookiesError}
          errorMessage={cookiesErrorMessage}
          handleExit={handleExit}
        />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
