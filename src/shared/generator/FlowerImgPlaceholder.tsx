import spinner from "../../assets/img/spinner.svg";
import { MdError } from "react-icons/md";
import { RootState, TypeGenerator } from "../../store/types/types";
import { useSelector } from "react-redux";

const FlowerImgPlaceholder = () => {
  const { genLoading } = useSelector((state: RootState) => state.generator);
  return (
    <div className="generator__img">
      {genLoading ? (
        <img src={spinner} alt="Loading spinner" />
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
