import { ReactNode } from "react";

export type TypeProps = {
  text: string;
  status?: string;
  marginRight?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: ReactNode;
  width?: string
};