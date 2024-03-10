import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "../../entities/cart/emptyCart/EmptyCart";
import Products from "../../shared/cart/products/Products";
import ProductKeys from "../../entities/cart/productKeys/ProductKeys";
import WriteToUs from "../../entities/cart/writeToUs/WriteToUs";
import { setEmptyCart } from "../../store/slices/cartSlice";
import TotalPrice from "../../entities/cart/total/TotalPrice";
import ProductInCart from "../../features/cart/productInCart/ProductInCart";
import { RootState, TypeProduct } from "../../store/types/types";

const CartBlock = () => {
  const { emptyCart, cartData } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    cartData.length > 0
      ? dispatch(setEmptyCart(false))
      : dispatch(setEmptyCart(true));
  }, [cartData]);

  return (
    <div className="cart">
      {emptyCart ? (
        <EmptyCart />
      ) : (
        <>
          <ProductKeys />
          <Products>
            {cartData.map((product: TypeProduct) => {
              return (
                <ProductInCart
                  key={product.id}
                  id={product.id}
                  img={product.imageUrl}
                  title={product.title}
                  price={product.price}
                  initialQuantity={product.quantity}
                  flowers={product.flowers}
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
