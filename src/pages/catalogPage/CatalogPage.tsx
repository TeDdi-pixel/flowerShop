import DefaultLayout from "../../layouts/default/DefaultLayout";
import PageTitle from "../../shared/pageTitle/PageTitle";
import Catalog from "../../features/catalog/Catalog";

const CatalogPage = () => {
  return (
    <DefaultLayout>
      <PageTitle title={"Catalog of generated pictures"} marginBottom="40px"/>
      <Catalog />
    </DefaultLayout>
  );
};

export default CatalogPage;
