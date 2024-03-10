import { TypeProduct } from "../store/types/types";

export const calculateTotalPrice = (cartData: TypeProduct[]) => {
  const totalPrice = cartData.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return totalPrice;
};
