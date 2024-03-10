import { useSelector } from "react-redux";
import { RootState } from "../../store/types/types";
import FormInfo from "../../features/forms/FormInfo";
import GeneratedImg from "../../shared/forms/imageCartForm/GeneratedImg";

const ImageCartForm = () => {
  const { isFormOpen } = useSelector((state: RootState) => state.imageCartForm);

  return (
    <div className={`img-cart-form ${isFormOpen ? "img-cart-form_open" : ""}`}>
      <div className="img-cart-form__form">
        <GeneratedImg />
        <FormInfo />
      </div>
    </div>
  );
};

export default ImageCartForm;
