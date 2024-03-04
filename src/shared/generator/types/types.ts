import { ReactNode } from "react";

export type TypeFlowerImageProps = {
  image: string;
  onClick?: React.ReactEventHandler;
};
export type TypeFlowerPrompt = {
  children: ReactNode;
  isActive: boolean;
  handlePrompt: (flowerValue:string) => void;
  flowerValue:string;
};

export type TypeCategoryLink = {
  location: string,
  icon: ReactNode
}
