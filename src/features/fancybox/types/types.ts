import { OptionsType } from "@fancyapps/ui";
import { ReactNode } from "react";

export type TypeFancyboxProps = {
  delegate?: string;
  options?: OptionsType;
  children: ReactNode;
};
