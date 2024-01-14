import React, { useEffect } from "react";
import ProductInCart from "../../../entities/cart/productInCart/ProductInCart";
import ProductBorder from "../../../shared/cart/ui/ProductBorder";
import { useSelector } from "react-redux";
import useCart from "../../../hooks/useCart";

const Products = () => {
  const uid = useSelector((state) => state.user.userData);
  const { data } = uid ? useCart("userCarts", uid) : { data: null };
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="cart__products-wrapper">
      <ProductBorder />
      {data &&
        data.cartData.map((product) => {
          return (
            <ProductInCart
              key={product.id}
              id={product.id}
              img={product.img}
              title={product.title}
              price={product.price}
              initialQuantity={product.quantity}
            />
          );
        })}
      <ProductBorder />
    </div>
  );
};

export default Products;
