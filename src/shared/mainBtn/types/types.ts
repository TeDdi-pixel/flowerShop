import { TypeVoidFunc } from "../../generator/types/types";

export type TypeMainButton = {
  text: string;
  bgColor: string;
  fontColor: string;
  marginBottom: string;
  link?: string;
  onClick?: TypeVoidFunc;
};
