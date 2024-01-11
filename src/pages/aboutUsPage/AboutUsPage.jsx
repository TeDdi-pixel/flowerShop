import React from "react";
import DefaultLayout from "../../layouts/default/DefaultLayout";
import PageTitle from "../../shared/pageTitle/PageTitle";
import AboutUsBlock from "../../shared/aboutUsBlock/AboutUsBlock";
import Path from "../../shared/path/Path";
import BlogsBlock from "../../widgets/blogs/BlogsBlock";
import SubscribeToEmails from "../../widgets/subscribeToEmails/SubscribeToEmails";
import CookiesMessage from "../../entities/cookiesMessage/CookiesMessage";

const AboutUsPage = () => {
  return (
    <DefaultLayout>
      <CookiesMessage/>
      <Path />
      <PageTitle title={"About us"} marginBottom={'32px'}/>
      <AboutUsBlock />
      <BlogsBlock />
      <SubscribeToEmails />
    </DefaultLayout>
  );
};
export default AboutUsPage;
