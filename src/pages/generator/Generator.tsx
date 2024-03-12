import BouquetsGenerator from "../../widgets/generator/BouquetsGenerator";
import DefaultLayout from "../../layouts/default/DefaultLayout";
import PageTitle from "../../shared/pageTitle/PageTitle";
import ImageCartForm from "../../widgets/forms/ImageCartForm";

const Generator = () => {
  return (
    <DefaultLayout>
      <PageTitle title={"Bouquet generator"} marginBottom={"30px"} />
      <ImageCartForm />
      <BouquetsGenerator />
    </DefaultLayout>
  );
};

export default Generator;
