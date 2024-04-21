import ProductPrice from "../../../shared/cart/ui/ProductPrice";
import useData from "../../../hooks/useData";
import ProductKey from "../../../shared/cart/productKey/ProductKey";
import Shiping from "../../../shared/cart/ui/Shiping";
import SliderBtnMain from "../../../shared/sliderBtnMain/SliderBntMain";
import useWindowResize from "../../../hooks/useWindowResize";
import ProductBorder from "../../../shared/cart/ui/ProductBorder";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/types/types";
import { setOrder } from "../../../services/setters/setOrder";
import { setTotalPrice, updateCart } from "../../../store/slices/cartSlice";
import { setUserCart } from "../../../services/setters/setUserCart";

const TotalPrice = () => {
  const { isFullWidth } = useWindowResize(695);
  const { data } = useData(true, "products");
  const product = data[0];
  const { uid, displayName } = useSelector((state: RootState) => state.user);
  const { totalPrice, cartData } = useSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useDispatch();

  function getCurrentDate() {
    const date = new Date();
    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear().toString().slice(-2);
    return day + "." + month + "." + year;
  }

  const placeOrder = async () => {
    const order = {
      uid: uid,
      cartData: cartData,
      displayName: displayName,
      totalPrice: `${"$" + totalPrice + ".00"}`,
      createdAt: getCurrentDate(),
    };
    await setOrder(order);
    dispatch(updateCart([]));
    dispatch(setTotalPrice(0));
    await setUserCart(uid, []);
  };

  return (
    product && (
      <div className="cart__total">
        <div className="cart__total-price">
          <ProductKey
            text={"Subtotal"}
            marginLeft={"22px"}
            isFullWidth={isFullWidth}
          />
          <ProductPrice
            price={totalPrice}
            fontSize={isFullWidth ? "24px" : ""}
            marginBottom={isFullWidth ? "18px" : ""}
          />
          {isFullWidth ? <ProductBorder width={"100%"} bottom={"9px"} /> : null}
        </div>
        <Shiping />
        <div className="cart__total-btn">
          <SliderBtnMain
            text={"Order"}
            marginRight={"0"}
            onClick={placeOrder}
          />
        </div>
      </div>
    )
  );
};

export default TotalPrice;
