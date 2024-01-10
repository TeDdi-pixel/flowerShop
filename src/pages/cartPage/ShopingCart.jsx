import React from "react";
import DefaultLayout from "../../layouts/default/DefaultLayout";
import Path from "../../shared/path/Path";
import EmptyCart from "../../entities/cart/emptyCart/EmptyCart";
import { useSelector } from "react-redux";

const ShopingCart = () => {
  const emptyCart = useSelector((state) => state.cart.emptyCart);

  return (
    <DefaultLayout>
      <Path />
      {emptyCart ? <EmptyCart /> : null}
    </DefaultLayout>
  );
};

export default ShopingCart;
