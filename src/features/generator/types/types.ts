import { TypeVoidFunc } from "../../../shared/generator/types/types";

export type TypeImage = {
  result: {
    output: string[];
  };
};

export type TypeFlower = {
  id: number;
  text: string;
  value: string;
  img: string;
};

export type TypeOutputImage = {
  regenerate: TypeVoidFunc;
};
