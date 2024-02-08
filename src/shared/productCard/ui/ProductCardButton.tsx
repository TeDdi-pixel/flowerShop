import { TypeCardButtonProps } from "../types/types";

const ProductCardButton = ({
  text,
  status,
  addToCart,
  handlePreset,
  active,
}: TypeCardButtonProps & { active: boolean }) => {
  return (
    <button
      className={
        status
          ? "product-card__button_soledOut"
          : active
          ? "product-card__button product-card__button_active"
          : "product-card__button"
      }
      onClick={() => {
        if (addToCart) {
          addToCart();
        }
        if (handlePreset) {
          handlePreset();
        }
      }}
    >
      <div className="product-card__button-text">{text}</div>
      <span></span>
    </button>
  );
};

export default ProductCardButton;
