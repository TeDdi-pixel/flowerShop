import React from "react";
import DefaultLayout from "../../layouts/default/DefaultLayout";
import PageTitle from "../../shared/pageTitle/PageTitle";
import AboutUsBlock from "../../shared/aboutUsBlock/AboutUsBlock";
import BlogsBlock from "../../widgets/blogs/BlogsBlock";
import SubscribeToEmails from "../../widgets/subscribeToEmails/SubscribeToEmails";

const AboutUsPage = () => {
  return (
    <DefaultLayout>
      <PageTitle title={"About us"} marginBottom={'32px'}/>
      <AboutUsBlock />
      <BlogsBlock />
      <SubscribeToEmails />
    </DefaultLayout>
  );
};
export default AboutUsPage;
