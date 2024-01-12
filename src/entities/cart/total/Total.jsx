import React, { useEffect } from "react";
import ProductPrice from "../../../shared/cart/ui/ProductPrice";
import useData from "../../../hooks/useData";
import ProductKey from "../../../shared/cart/productKey/ProductKey";
import Shiping from "../../../shared/cart/ui/Shiping";
import SliderBtnMain from "../../../shared/sliderBtnMain/SliderBntMain";
import useWindowResize from "../../../hooks/useWindowResize";
import ProductBorder from "../../../shared/cart/ui/ProductBorder";
import { useDispatch, useSelector } from "react-redux";
import { setTotalPrice } from "../../../store/slices/cartSlice";
import Cookies from "js-cookie";

const Total = () => {
  const { isFullWidth } = useWindowResize(695);
  const { data } = useData("products");
  const product = data[0];
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedTotalPrice = Cookies.get('totalPrice');
    if (savedTotalPrice) {
      dispatch(setTotalPrice(JSON.parse(savedTotalPrice)));
    }
  }, []);
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
          <SliderBtnMain text={"Check out"} marginRight={"0"} />
        </div>
      </div>
    )
  );
};

export default Total;
