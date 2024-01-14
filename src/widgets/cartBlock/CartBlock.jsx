import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "../../entities/cart/emptyCart/EmptyCart";
import Products from "../../features/cart/products/Products";
import ProductKeys from "../../entities/cart/productKeys/ProductKeys";
import WriteToUs from "../../entities/cart/writeToUs/WriteToUs";
import { setCart } from "../../store/slices/cartSlice";
import TotalPrice from "../../entities/cart/total/TotalPrice";

const CartBlock = () => {
  const emptyCart = useSelector((state) => state.cart.emptyCart);
  const cartData = useSelector((state) => state.cart.cartData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cartData.length > 0) {
      dispatch(setCart());
    }
  }, [cartData]);
  return (
    <div className="cart">
      {emptyCart ? (
        <EmptyCart />
      ) : (
        <>
          <ProductKeys />
          <Products />
          <div className="cart__end-block">
            <WriteToUs />
            <TotalPrice />
          </div>
        </>
      )}
    </div>
  );
};

export default CartBlock;
