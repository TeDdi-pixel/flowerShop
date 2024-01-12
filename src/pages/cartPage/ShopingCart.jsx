import React from "react";
import DefaultLayout from "../../layouts/default/DefaultLayout";
import Path from "../../shared/path/Path";
import CartBlock from "../../widgets/cartBlock/CartBlock";

const ShopingCart = () => {
  return (
    <DefaultLayout>
      <Path />
      <CartBlock />
    </DefaultLayout>
  );
};

export default ShopingCart;
