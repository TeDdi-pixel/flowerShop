import { useSelector } from "react-redux";
import spinner4 from "../../../assets/img/spinner4.svg";
import { RootState } from "../../../store/types/types";
import barLoader2 from '../../../assets/img/barLoader2.json'
import Lottie from "lottie-react";

const BouquetTitle = () => {
  const { genLoading, generatedTitle } = useSelector(
    (state: RootState) => state.imageCartForm
  );

  return genLoading ? (
    <Lottie animationData={barLoader2} loop autoPlay className="loader-bar"/>
    // <img src={spinner4} alt="loading" width="32.5px" />
  ) : generatedTitle ? (
    `"${generatedTitle}"`
  ) : null;
};

export default BouquetTitle;
