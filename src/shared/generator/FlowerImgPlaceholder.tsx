import barLoader from "../../assets/img/Bar Loader.json";
import { MdError } from "react-icons/md";
import { RootState } from "../../store/types/types";
import { useSelector } from "react-redux";
import Lottie from "lottie-react";

const FlowerImgPlaceholder = () => {
  const { genLoading } = useSelector((state: RootState) => state.generator);
  return (
    <div className="generator__img">
      {genLoading ? (
        <Lottie
          autoPlay
          loop
          animationData={barLoader}
          className="loading-spinner"
        />
      ) : (
        <div className="generator__img-placeholder">
          <span className="generator__img-placeholder-text">
            Generate your bouquet
          </span>
          <div className="generator__img-placeholder-warning">
            <MdError />
            <span>
              Images may not match your prompt due to AI misunderstanding
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlowerImgPlaceholder;
