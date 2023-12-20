import React from "react";
import Header from "../../widgets/header/Header";
import Footer from "../../widgets/footer/Footer";
import TopRated from "../../widgets/topRated/TopRated";
import EntranceBlock from "../../widgets/entranceBlock/EntranceBlock";
import DeliveryOptionsBlock from "../../shared/deliveryOption/DeliveryOptionsBlock";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <EntranceBlock />
        <DeliveryOptionsBlock />
        <TopRated />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
