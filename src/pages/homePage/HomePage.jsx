import React from "react";
import Header from "../../widgets/header/Header";
import Footer from "../../widgets/footer/Footer";
import TopRated from "../../widgets/topRated/TopRated";
import EntranceBlock from "../../widgets/entranceBlock/EntranceBlock";
import DeliveryOptionsBlock from "../../shared/deliveryOption/DeliveryOptionsBlock";
import Collections from "../../widgets/collections/Collections";
import ChooseUs from "../../widgets/chooseUs/ChooseUs";
import SubscribeToEmails from "../../widgets/subscribeToEmails/SubscribeToEmails";
import FAQ from "../../widgets/FAQ/FAQ";
import AddressBlock from "../../widgets/AddressSection/AddressSection";
import DefaultLayout from "../../layouts/default/DefaultLayout";
import BlogsBlock from "../../widgets/blogs/Blogsblock";

const HomePage = () => {
  return (
    <DefaultLayout>
      <main>
        <EntranceBlock />
        <DeliveryOptionsBlock />
        <TopRated />
        <Collections />
        <ChooseUs />
        <SubscribeToEmails />
        <FAQ />
        <BlogsBlock/>
        <AddressBlock />
      </main>
    </DefaultLayout>
  );
};

export default HomePage;
