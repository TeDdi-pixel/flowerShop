import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/types/types";
import { generateAnswer } from "../../../store/asyncThunks/generateAnswer";
import { useAddToCart } from "../../../hooks/useAddToCart";
import Exit from "../../../shared/exit/Exit";
import { setUserCart } from "../../../services/setters/setUserCart";
import {
  setIsFormOpen,
  setSharedFormOpen,
} from "../../../store/slices/imageCartFormSlice";
import { ThunkDispatch } from "redux-thunk";
import FormInfo from "../../../entities/forms/imageCartForm/FromInfo";
import { TbPhotoShare } from "react-icons/tb";
import FormButton from "../../../shared/forms/imageCartForm/FormButton";
import { setCatalog } from "../../../services/setters/setCatalog";
import { RiShoppingCartLine } from "react-icons/ri";
import useWindowResize from "../../../hooks/useWindowResize";
import { warn } from "../../../helpers/notify";

const FormBlock = () => {
  const handleGenerateAnswer = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(generateAnswer());
  };
  const { isFullWidth } = useWindowResize(377);
  const { generatedTitle } = useSelector(
    (state: RootState) => state.imageCartForm
  );
  const { storageUserData, uid } = useSelector(
    (state: RootState) => state.user
  );
  const { productId } = useSelector((state: RootState) => state.imageCartForm);
  const { cookiesEnabled } = useSelector((state: RootState) => state.cookies);
  const { cartData } = useSelector((state: RootState) => state.cart);
  const { generatedImage, flowers } = useSelector(
    (state: RootState) => state.generator
  );
  const { handleAddToCart } = useAddToCart();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const handleExit = () => {
    dispatch(setIsFormOpen(false));
    dispatch(setSharedFormOpen(false));
  };

  const setProduct = () => {
    return {
      imageUrl: generatedImage,
      price: 299,
      quantity: 1,
      title: generatedTitle,
      flowers: flowers,
    };
  };
  const addToCart = () => {
    const product = {
      id: productId,
      imageUrl: generatedImage,
      price: 299,
      quantity: 1,
      title: generatedTitle,
      flowers: flowers,
    };
    if (generatedTitle) handleAddToCart(product);
    else warn("Generator: Title must to be set");
  };
  const sharePhoto = () => {
    if (generatedTitle) setCatalog("sharedCatalog", setProduct());
    else warn("Generator: Title must to be set");
  };

  useEffect(() => {
    if (storageUserData && cartData.length > 0 && uid && cookiesEnabled) {
      setUserCart(uid, cartData);
    }
  }, [cartData, uid, storageUserData, cookiesEnabled]);

  return (
    <div className="img-cart-form__info">
      <FormInfo generateAnswer={handleGenerateAnswer} />
      <div className="img-cart-form__buttons">
        <FormButton
          endIcon={<TbPhotoShare fontSize="24px" />}
          func={sharePhoto}
          variant="text"
          text="Share"
          size={isFullWidth ? "medium" : "large"}
          tooltip="Share with people"
          placement="top"
          color={true}
        />
        <FormButton
          func={addToCart}
          text="Add to cart"
          startIcon={<RiShoppingCartLine />}
          size={isFullWidth ? "medium" : "large"}
        />
      </div>
      <Exit top="20px" right="20px" onClick={handleExit} color="#665f5f" />
    </div>
  );
};

export default FormBlock;
