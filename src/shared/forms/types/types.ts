import { ReactElement, ReactNode } from "react";

export type TypeFormItem = {
  text: string;
  value: ReactNode;
  additional?: ReactElement | null;
};
