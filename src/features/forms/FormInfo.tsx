import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/types/types";
import { generateAnswer } from "../../store/asyncThunks/generateAnswer";
import { useAddToCart } from "../../hooks/useAddToCart";
import Exit from "../../shared/exit/Exit";
import FormItem from "../../shared/forms/imageCartForm/FormItem";
import LockIcon from "../../shared/icons/imageCartForm/LockIcon";
import { setUserCart } from "../../services/setters/setUserCart";
import { setIsFormOpen } from "../../store/slices/imageCartFormSlice";
import { ThunkDispatch } from "redux-thunk";
import BouquetTitle from "../../entities/forms/imageCartForm/BouquetTitle";
import GenerateTitleBtn from "../../entities/forms/imageCartForm/GenerateTitleBtn";
import AddToCartBtn from "../../entities/forms/imageCartForm/AddToCartBtn";

const FormInfo = () => {
  const handleGenerateAnswer = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(generateAnswer());
  };
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
    handleAddToCart(product);
    handleExit();
  };

  useEffect(() => {
    if (storageUserData && cartData.length > 0 && uid && cookiesEnabled) {
      setUserCart(uid, cartData);
    }
  }, [cartData, uid, storageUserData, cookiesEnabled]);

  return (
    <div className="img-cart-form__info">
      <div>
        <FormItem
          text="Bouquet title:"
          value={<BouquetTitle />}
          additional={
            <GenerateTitleBtn generateAnswer={handleGenerateAnswer} />
          }
        />

        <FormItem
          text="Bouquet price: "
          value={"299.00$"}
          additional={<LockIcon />}
        />

        {flowers && flowers.length > 0 ? (
          <FormItem text="Bouquet flowers: " value={flowers.join(", ")} />
        ) : null}
      </div>

      <AddToCartBtn addToCart={addToCart} />
      <Exit top="20px" right="20px" onClick={handleExit} color="#665f5f" />
    </div>
  );
};

export default FormInfo;
