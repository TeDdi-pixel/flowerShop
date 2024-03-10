import usePath from "../../hooks/usePath";
import { RootState } from "../../store/types/types";
import ShopingButtonUnderlined from "../cart/shoppingBtn/ShoppingButtonUnderlined";
import { useSelector } from "react-redux";

const Path = () => {
  const { currentPath } = usePath();
  const { emptyCart } = useSelector((state: RootState) => state.cart);

  return (
    <>
      {currentPath !== "/" && currentPath !== "/Home/Cart" && (
        <div className="current-path">
          <div className="current-path__text">{currentPath}</div>
          {!emptyCart ? <ShopingButtonUnderlined /> : null}
        </div>
      )}
    </>
  );
};

export default Path;
