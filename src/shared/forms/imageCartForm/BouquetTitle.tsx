import { useSelector } from "react-redux";
import { RootState } from "../../../store/types/types";
import barLoader2 from "../../../assets/img/barLoader2.json";
import Lottie from "lottie-react";

const BouquetTitle = () => {
  const { genLoading, generatedTitle } = useSelector(
    (state: RootState) => state.imageCartForm
  );

  return genLoading ? (
    <Lottie animationData={barLoader2} loop autoPlay className="loader-bar" />
  ) : generatedTitle ? (
    `"${generatedTitle}"`
  ) : null;
};

export default BouquetTitle;
