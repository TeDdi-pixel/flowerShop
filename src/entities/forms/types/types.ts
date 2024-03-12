import { ReactElement } from "react";
import { TypeVoidFunc } from "../../../shared/generator/types/types";

export type TypeFormButtons = {
  func?: TypeVoidFunc;
  generateAnswer?: (event: React.MouseEvent) => void;
  text?: string;
  endIcon?: ReactElement;
  variant?: string;
  startIcon?: ReactElement;
  size?: string;
  tooltip?: string;
  placement?: string;
  color?: boolean;
};
