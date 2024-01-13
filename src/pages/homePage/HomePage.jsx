import React from "react";
import TopRated from "../../widgets/topRated/TopRated";
import EntranceBlock from "../../widgets/entranceBlock/EntranceBlock";
import DeliveryOptionsBlock from "../../shared/deliveryOption/DeliveryOptionsBlock";
import ChooseUs from "../../widgets/chooseUs/ChooseUs";
import SubscribeToEmails from "../../widgets/subscribeToEmails/SubscribeToEmails";
import FAQ from "../../widgets/FAQ/FAQ";
import AddressBlock from "../../widgets/AddressSection/AddressSection";
import DefaultLayout from "../../layouts/default/DefaultLayout";
import CollectionsBlock from "../../widgets/collectionsBlock/CollectionsBlock";
import BlogsBlock from "../../widgets/blogs/BlogsBlock";
import ProductInfoBlock from "../../widgets/productInfoBlock/ProductInfoBlock";

const HomePage = () => {
  return (
    <DefaultLayout>
      <ProductInfoBlock />
      <EntranceBlock />
      <DeliveryOptionsBlock />
      <TopRated />
      <CollectionsBlock />
      <ChooseUs />
      <SubscribeToEmails />
      <FAQ />
      <BlogsBlock />
      <AddressBlock />
    </DefaultLayout>
  );
};

export default HomePage;
