import { TypeVoidFunc } from "../../../shared/generator/types/types";
import { TypeProduct } from "../../../store/types/types";

export type TypeTextArea = {
  title: string;
  placeholder: string;
};
export type TypeQuantityBlock = {
  quantity: number;
  minus: TypeVoidFunc;
  plus: TypeVoidFunc;
  handleRemoveFromCart: TypeVoidFunc;
};

export type TypeOrder = {
  uid: string|null;
  displayName: string|null; 
  cartData: TypeProduct[] | [];
};
