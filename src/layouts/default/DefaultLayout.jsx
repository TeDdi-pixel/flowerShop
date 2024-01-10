import React from "react";
import Header from "../../widgets/header/Header";
import Footer from "../../widgets/footer/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
