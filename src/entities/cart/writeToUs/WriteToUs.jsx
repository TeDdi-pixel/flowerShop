import React from "react";
import TextArea from "../../../shared/cart/ui/TextArea";
import { textAreas } from "./textArea-config";

const WriteToUs = () => {
  return (
    <div className="cart__text-areas">
      {textAreas.map((item, index) => {
        return (
          <TextArea
            key={index}
            title={item.title}
            placeholder={item.placeholder}
          />
        );
      })}
    </div>
  );
};

export default WriteToUs;
