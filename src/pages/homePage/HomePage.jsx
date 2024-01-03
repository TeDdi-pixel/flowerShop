import React from "react";
import TopRated from "../../widgets/topRated/TopRated";
import EntranceBlock from "../../widgets/entranceBlock/EntranceBlock";
import DeliveryOptionsBlock from "../../shared/deliveryOption/DeliveryOptionsBlock";
import ChooseUs from "../../widgets/chooseUs/ChooseUs";
import SubscribeToEmails from "../../widgets/subscribeToEmails/SubscribeToEmails";
import FAQ from "../../widgets/FAQ/FAQ";
import AddressBlock from "../../widgets/AddressSection/AddressSection";
import DefaultLayout from "../../layouts/default/DefaultLayout";
import BlogsBlock from "../../widgets/blogs/Blogsblock";
import CollectionsBlock from "../../widgets/collectionsBlock/CollectionsBlock";

const HomePage = () => {
  return (
    <DefaultLayout>
      <main>
        <EntranceBlock />
        <DeliveryOptionsBlock />
        <TopRated />
        <CollectionsBlock />
        <ChooseUs />
        <SubscribeToEmails />
        <FAQ />
        <BlogsBlock />
        <AddressBlock />
      </main>
    </DefaultLayout>
  );
};

export default HomePage;
