import EmptyCartMessage from "../../../shared/cart/emptyCartMessage/EmptyCartMessage";
import { useDispatch, useSelector } from "react-redux";
import CookiesMessage from "../../../shared/cart/cookiesMassage/CookiesMessage";
import ShoppingBtn from "../../../shared/cart/shoppingBtn/ShoppingBtn";
import { enableCookies } from "../../../store/slices/cookiesSlice";
import CookiesBtn from "../../../shared/cookiesText/CookiesBtn";
import { setUid } from "../../../store/slices/userSlice";
import { updateCart } from "../../../store/slices/cartSlice";
import { RootState } from "../../../store/types/types";

const EmptyCart = () => {
  const { cookiesEnabled } = useSelector((state: RootState) => state.cookies);
  const { storageUserData } = useSelector((state: RootState) => state.user);
  const { cartData } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const enableCookiesData = () => {
    dispatch(enableCookies());
    if (storageUserData) {
      dispatch(setUid(storageUserData?.user?.uid));
      dispatch(updateCart(cartData));
    }
  };

  return (
    <div className="cart__empty">
      <EmptyCartMessage />
      {!cookiesEnabled ? (
        <div className="cart__empty-cookies-wrapper">
          <CookiesMessage />
          <CookiesBtn
            enableCookies={enableCookiesData}
            backgroundColor={"#665f5f"}
            color={"white"}
          />
        </div>
      ) : null}
      <ShoppingBtn />
    </div>
  );
};

export default EmptyCart;
