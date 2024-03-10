import { useSelector } from "react-redux";
import { RootState } from "../../../store/types/types";

const BouquetFlowers = () => {
  const { flowers } = useSelector((state: RootState) => state.generator);
  return (
    <span className="cart__product-info-flowers">
      {flowers ? flowers.join(", ") : null}
    </span>
  );
};

export default BouquetFlowers;
