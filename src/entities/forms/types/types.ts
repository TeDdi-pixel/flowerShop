import { TypeVoidFunc } from "../../../shared/generator/types/types";

export type TypeFormButtons = {
  addToCart?: TypeVoidFunc;
  generateAnswer?: (event: React.MouseEvent) => void;
};
