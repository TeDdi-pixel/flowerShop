import { GoTrash } from "react-icons/go";
import { TypeVoidFunc } from "../../generator/types/types";

const TrashCan = ({ onClick }: { onClick: TypeVoidFunc }) => {
  return <GoTrash className="cart__product-trash-can" onClick={onClick} />;
};

export default TrashCan;
