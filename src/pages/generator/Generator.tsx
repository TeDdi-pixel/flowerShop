import BouquetsGenerator from "../../widgets/generator/BouquetsGenerator";
import DefaultLayout from "../../layouts/default/DefaultLayout";
import PageTitle from "../../shared/pageTitle/PageTitle";

const Generator = () => {
  return (
    <DefaultLayout>
      <PageTitle title={"Bouquet generator"} marginBottom={"30px"} />
      <BouquetsGenerator />
    </DefaultLayout>
  );
};

export default Generator;
