import FormItem from "../../../shared/forms/imageCartForm/FormItem";
import BouquetTitle from "../../../shared/forms/imageCartForm/BouquetTitle";
import GenerateTitleBtn from "../../../shared/forms/imageCartForm/GenerateTitleBtn";
import { RootState } from "../../../store/types/types";
import LockIcon from "../../../shared/icons/imageCartForm/LockIcon";
import { useSelector } from "react-redux";

const FromInfo = ({
  generateAnswer,
}: {
  generateAnswer: (event: React.MouseEvent) => void;
}) => {
  const { flowers } = useSelector((state: RootState) => state.generator);
  return (
    <div>
      <FormItem
        text="Bouquet title:"
        value={<BouquetTitle />}
        additional={<GenerateTitleBtn generateAnswer={generateAnswer} />}
      />

      <FormItem
        text="Bouquet price: "
        value={"299.00$"}
        additional={<LockIcon />}
      />

      {flowers && flowers.length > 0 ? (
        <FormItem text="Bouquet flowers: " value={flowers.join(", ")} />
      ) : null}
    </div>
  );
};

export default FromInfo;
