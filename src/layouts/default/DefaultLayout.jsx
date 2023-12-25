import React from "react";
import Header from "../../widgets/header/Header";
import Footer from "../../widgets/footer/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
