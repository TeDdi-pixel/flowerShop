import { MouseEventHandler } from "react";
import { IoMdRefreshCircle } from "react-icons/io";
import { IoBagHandle } from "react-icons/io5";
import { TbPhotoShare } from "react-icons/tb";

export const buttons = (onClick?: MouseEventHandler<HTMLButtonElement>) => [
  { tooltip: "Regenerate", icon: <IoMdRefreshCircle />, onClick },
  { tooltip: "Add to cart", icon: <IoBagHandle /> },
  { tooltip: "Share with people", icon: <TbPhotoShare /> },
];

export const buttonStyle = (genLoading: boolean) =>
  genLoading ? "generator__img-button-hidden" : "generator__img-button-visible";
