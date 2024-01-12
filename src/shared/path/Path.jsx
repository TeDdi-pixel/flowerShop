import React from "react";
import usePath from "../../hooks/usePath";
import ShopingButtonUnderlined from "../cart/shoppingBtn/ShopingButtonUnderlined";
import { useSelector } from "react-redux";

const Path = () => {
  const { currentPath } = usePath();
  const emptyCart = useSelector((state) => state.cart.emptyCart);

  return (
    <div className="current-path">
      <div className="current-path__text">{currentPath}</div>
      {!emptyCart ? <ShopingButtonUnderlined /> : null}
    </div>
  );
};

export default Path;
