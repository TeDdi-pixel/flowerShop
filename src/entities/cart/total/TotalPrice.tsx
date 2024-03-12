import React from "react";
import ProductPrice from "../../../shared/cart/ui/ProductPrice";
import useData from "../../../hooks/useData";
import ProductKey from "../../../shared/cart/productKey/ProductKey";
import Shiping from "../../../shared/cart/ui/Shiping";
import SliderBtnMain from "../../../shared/sliderBtnMain/SliderBntMain";
import useWindowResize from "../../../hooks/useWindowResize";
import ProductBorder from "../../../shared/cart/ui/ProductBorder";
import { useSelector } from "react-redux";

const TotalPrice = () => {
  const { isFullWidth } = useWindowResize(695);
  const { data } = useData(true, "products");
  const product = data[0];
  const totalPrice = useSelector((state) => state.cart.totalPrice);

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

export default TotalPrice;
