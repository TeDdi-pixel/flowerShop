import React from "react";
import Header from "../../widgets/header/Header";
import Footer from "../../widgets/footer/Footer";
import CookiesMessage from "../../entities/cookiesMessage/CookiesMessage";
import Path from "../../shared/path/Path";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <CookiesMessage />
        <Path />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
