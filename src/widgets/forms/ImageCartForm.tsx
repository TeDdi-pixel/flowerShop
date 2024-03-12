import { useSelector } from "react-redux";
import { RootState } from "../../store/types/types";
import GeneratedImg from "../../shared/forms/imageCartForm/GeneratedImg";
import FormBlock from "../../features/forms/imageCartForm/FormBlock";

const ImageCartForm = () => {
  const { isFormOpen } = useSelector((state: RootState) => state.imageCartForm);

  return (
    <div className={`img-cart-form ${isFormOpen ? "img-cart-form_open" : ""}`}>
      <div className="img-cart-form__form">
        <GeneratedImg />
        <FormBlock />
      </div>
    </div>
  );
};

export default ImageCartForm;
