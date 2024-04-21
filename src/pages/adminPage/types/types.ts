import { TypeProduct } from "../../../store/types/types";

export type TypeOrder = {
  uid: string;
  cartData: TypeProduct[];
  displayName: string;
  id: string;
  createdAt: string;
  totalPrice: number;
};
