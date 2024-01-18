export const calculateTotalPrice = (cartData) => {
  const totalPrice = cartData.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return totalPrice;
};
