import { ReactNode } from "react";

export type TypeFlowerPrompt = {
  children: ReactNode;
  isActive: boolean;
  handlePrompt: (flowerValue: string) => void;
  flowerValue: string;
};

export type TypeCategoryLink = {
  location: string;
  icon: ReactNode;
};

export type TypeFlowerImgButton = {
  tooltip: string;
  onClick?: TypeVoidFunc;
  className: string;
  icon: ReactNode;
  placement: string;
};

export type TypeVoidFunc = () => void;

export type TypeFlowerImageProps = {
  image: string;
  regenerate: TypeVoidFunc;
};

export type TypeButton = {
  tooltip: string;
  icon: ReactNode;
  func?: TypeVoidFunc;
  placement: string;
};

