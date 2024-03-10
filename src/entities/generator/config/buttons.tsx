import { IoMdRefreshCircle } from "react-icons/io";
import { IoBagHandle } from "react-icons/io5";
import { TbPhotoShare } from "react-icons/tb";
import { TypeButton, TypeVoidFunc } from "../../../shared/generator/types/types";


export const buttons = (onClick: TypeVoidFunc, openForm:TypeVoidFunc):TypeButton[] => [
  { tooltip: "Regenerate", icon: <IoMdRefreshCircle />, func: onClick },
  { tooltip: "Add to cart", icon: <IoBagHandle />, func: openForm },
  { tooltip: "Share with people", icon: <TbPhotoShare /> },
];

export const buttonStyle = (genLoading: boolean) =>
  genLoading ? "generator__img-button-hidden" : "generator__img-button-visible";
