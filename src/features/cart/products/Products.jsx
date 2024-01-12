import React from "react";
import ProductInCart from "../../../entities/cart/productInCart/ProductInCart";
import useData from "../../../hooks/useData";
import ProductBorder from "../../../shared/cart/ui/ProductBorder";
import { useSelector } from "react-redux";

const Products = () => {
  const uid = useSelector((state) => state.user.useData);
  const { data } = useData("userCarts", uid);

  return (
    <div className="cart__products-wrapper">
      <ProductBorder />
      {data &&
        data[0]?.cartData.map((product) => {
          return (
            <ProductInCart
              key={product.id}
              id={product.id}
              img={product.img}
              title={product.title}
              price={product.price}
            />
          );
        })}
      <ProductBorder />
    </div>
  );
};

export default Products;
