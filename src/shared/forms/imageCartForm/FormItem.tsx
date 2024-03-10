import { TypeFormItem } from "../types/types";

const FormItem = ({ text, value, additional }: TypeFormItem) => {
  return (
    <div className="img-cart-form__item">
      {text}
      <span className="img-cart-form__item-text">{value}</span>
      {additional}
    </div>
  );
};

export default FormItem;
