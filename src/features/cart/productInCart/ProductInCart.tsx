import { useEffect, useState } from "react";
import ProductImg from "../../../shared/cart/ui/ProductImg";
import ProductTitle from "../../../shared/cart/ui/ProductTitle";
import ProductPrice from "../../../shared/cart/ui/ProductPrice";
import useWindowResize from "../../../hooks/useWindowResize";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  setTotalPrice,
  totalAdd,
  totalRemove,
  updateCart,
} from "../../../store/slices/cartSlice";
import { removeProductFromCart } from "../../../services/removeProductFromCart";
import { setUserCart } from "../../../services/setters/setUserCart";
import useCart from "../../../hooks/useCart";
import { calculateTotalPrice } from "../../../helpers/calculateTotalPrice";
import { saveToCookies } from "../../../helpers/storageUtils";
import Fancybox from "../../fancybox/Fancybox";
import { RootState, TypeProduct } from "../../../store/types/types";
import { TypeProductInCart } from "./types/types";
import QuantityBlock from "../../../entities/cart/quantityBlock/QuantityBlock";
import BouquetFlowers from "../../../entities/cart/bouquetFlowers/BouquetFlowers";

const ProductInCart = ({
  img,
  title,
  price,
  id,
  initialQuantity,
}: TypeProductInCart) => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const [productTotalPrice, setProductTotalPrice] = useState(
    price * initialQuantity
  );
  const { totalPrice } = useSelector((state: RootState) => state.cart);
  const { isFullWidth } = useWindowResize(695);
  const { uid } = useSelector((state: RootState) => state.user);
  const { cartData } = useCart();
  const dispatch = useDispatch();

  const setCookies = (updatedCartData: TypeProduct) => {
    saveToCookies("cart", updatedCartData);
    saveToCookies("totalPrice", totalPrice);
  };

  useEffect(() => {
    if (cartData && cartData.length > 0) {
      const updatedCartData = cartData.map((item: TypeProduct) => {
        if (item.id === id && quantity > 0) {
          return { ...item, quantity: quantity };
        } else {
          return item;
        }
      });
      dispatch(updateCart(updatedCartData));
      setUserCart(uid, updatedCartData);
      setCookies(updatedCartData);
      dispatch(setTotalPrice(calculateTotalPrice(updatedCartData)));
    }
  }, [quantity, cartData]);

  const minus = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      dispatch(totalRemove(price));
      setProductTotalPrice((prev) => prev - price);
    }
  };
  const plus = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    dispatch(totalAdd(price));
    setProductTotalPrice((prev) => prev + price);
  };

  const handleRemoveFromCart = () => {
    const removedPrice = price * quantity;
    dispatch(totalRemove(removedPrice));
    dispatch(removeFromCart({ id }));
    removeProductFromCart(uid, id);

    if (cartData.length === 1) {
      dispatch(setTotalPrice(0));
    }
  };

  const quantityBlock = (
    <QuantityBlock
      quantity={quantity}
      minus={minus}
      plus={plus}
      handleRemoveFromCart={handleRemoveFromCart}
    />
  );

  return (
    <div className="cart__product">
      <div className="cart__product_left">
        <Fancybox>
          <ProductImg img={img} />
        </Fancybox>
        <div className="cart__product-info">
          <ProductTitle title={title} />
          <ProductPrice
            price={price}
            marginBottom={isFullWidth ? "4px" : "11px"}
          />
          <BouquetFlowers />
          {isFullWidth ? quantityBlock : null}
        </div>
      </div>
      {isFullWidth ? null : (
        <div className="cart__product_right">
          {quantityBlock}
          <ProductPrice price={productTotalPrice} />
        </div>
      )}
    </div>
  );
};

export default ProductInCart;
