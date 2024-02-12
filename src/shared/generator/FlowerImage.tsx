import { TypeFlowerImageProps } from "./types/types";
import { IoMdRefreshCircle } from "react-icons/io";
import { useSelector } from "react-redux";
import { RootState } from "../../store/types/types";

const FlowerImage = ({ image, onClick }: TypeFlowerImageProps) => {
  const { genLoading } = useSelector((state: RootState) => state.generator);
  return (
    <div className="generator__img">
      <img src={image} alt="Flower" />
      <button
        onClick={onClick}
        className="generator__img-regenerate-btn"
        style={{ display: `${genLoading ? "none" : "block"} ` }}
      >
        <IoMdRefreshCircle />
      </button>
    </div>
  );
};

export default FlowerImage;
