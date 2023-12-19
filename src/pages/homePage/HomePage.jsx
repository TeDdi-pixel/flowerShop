import React from "react";
import Header from "../../widgets/header/Header";
import Footer from "../../widgets/footer/Footer";
import TopRated from "../../widgets/topRated/TopRated";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <TopRated />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
