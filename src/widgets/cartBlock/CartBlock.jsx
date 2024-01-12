import React from "react";
import { useSelector } from "react-redux";
import EmptyCart from "../../entities/cart/emptyCart/EmptyCart";
import Products from "../../features/cart/products/Products";
import ProductKeys from "../../entities/cart/productKeys/ProductKeys";
import WriteToUs from "../../entities/cart/writeToUs/WriteToUs";
import Total from "../../entities/cart/total/Total";

const CartBlock = () => {
  const emptyCart = useSelector((state) => state.cart.emptyCart);

  return (
    <div className="cart">
      {!emptyCart ? (
        <EmptyCart />
      ) : (
        <>
          <ProductKeys />
          <Products />
          <div className="cart__end-block">
            <WriteToUs />
            <Total />
          </div>
        </>
      )}
    </div>
  );
};

export default CartBlock;
