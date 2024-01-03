import React from "react";
import DefaultLayout from "../../layouts/default/DefaultLayout";
import PageTitle from "../../shared/pageTitle/PageTitle";
import Path from "../../shared/path/Path";
import AddressSection from "../../widgets/AddressSection/AddressSection";
import SubscribeToEmails from "../../widgets/subscribeToEmails/SubscribeToEmails";
import LocationPlayer from "../../shared/location/LocationPlayer";
import useWindowResize from "../../hooks/useWindowResize";
import WriteToUsBlock from "../../widgets/writeToUsBlock/WriteToUsBlock";

const ContactsPage = () => {
  const { isFullWidth } = useWindowResize(1000);
  return (
    <DefaultLayout>
      <Path />
      <PageTitle title={"Contacts"} marginBottom={"40px"} />
      <AddressSection marginBottom={isFullWidth ? "50px" : "72px"} />
      <PageTitle title={"How to get to us?"} marginBottom={"40px"} display={"block"}/>
      <LocationPlayer />
      <WriteToUsBlock marginTop={isFullWidth ? "50px" : "0"} />
      <SubscribeToEmails marginTop={isFullWidth ? "50px" : "92px"} />
    </DefaultLayout>
  );
};

export default ContactsPage;
