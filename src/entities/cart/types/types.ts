import { TypeVoidFunc } from "../../../shared/generator/types/types";

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
