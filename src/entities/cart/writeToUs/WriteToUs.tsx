import TextArea from "../../../shared/cart/ui/TextArea";
import { TypeTextArea } from "../types/types";
import { textAreas } from "./textArea-config";

const WriteToUs = () => {
  return (
    <div className="cart__text-areas">
      {textAreas.map((item: TypeTextArea, index: number) => {
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
