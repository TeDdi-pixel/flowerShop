import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "../../entities/cart/emptyCart/EmptyCart";
import Products from "../../shared/cart/products/Products";
import ProductKeys from "../../entities/cart/productKeys/ProductKeys";
import WriteToUs from "../../entities/cart/writeToUs/WriteToUs";
import { setEmptyCart } from "../../store/slices/cartSlice";
import TotalPrice from "../../entities/cart/total/TotalPrice";
import ProductInCart from "../../features/cart/productInCart/ProductInCart";

const CartBlock = () => {
  const emptyCart = useSelector((state) => state.cart.emptyCart);
  const cartData = useSelector((state) => state.cart.cartData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cartData.length > 0) {
      dispatch(setEmptyCart(false));
    }
  }, [cartData]);
  return (
    <div className="cart">
      {emptyCart ? (
        <EmptyCart />
      ) : (
        <>
          <ProductKeys />
          <Products>
            {cartData &&
              cartData.map((product) => {
                return (
                  <ProductInCart
                    key={product.id}
                    id={product.id}
                    img={product.imageUrl}
                    title={product.title}
                    price={product.price}
                    initialQuantity={product.quantity}
                  />
                );
              })}
          </Products>
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
