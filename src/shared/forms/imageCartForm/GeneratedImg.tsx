import { useSelector } from "react-redux";
import { RootState } from "../../../store/types/types";

const GeneratedImg = () => {
  const { generatedImage } = useSelector((state: RootState) => state.generator);

  return (
    <div className="img-cart-form__generated-img">
      <img src={generatedImage} alt="Bouquet" />
    </div>
  );
};

export default GeneratedImg;
