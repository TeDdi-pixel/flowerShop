import { useSelector } from "react-redux";
import spinner4 from "../../../assets/img/spinner4.svg";
import { RootState } from "../../../store/types/types";

const BouquetTitle = () => {
  const { genLoading, generatedTitle } = useSelector(
    (state: RootState) => state.imageCartForm
  );

  return genLoading ? (
    <img src={spinner4} alt="loading" width="32.5px" />
  ) : generatedTitle ? (
    `"${generatedTitle}"`
  ) : null;
};

export default BouquetTitle;
