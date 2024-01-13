import React from "react";
import DefaultLayout from "../../layouts/default/DefaultLayout";
import PageTitle from "../../shared/pageTitle/PageTitle";
import Collections from "../../entities/collections/Collections";

const CollectionsPage = () => {
  return (
    <DefaultLayout>
      <PageTitle title={"Our collections"} marginBottom={'60px'}/>
      <Collections />
    </DefaultLayout>
  );
};

export default CollectionsPage;
