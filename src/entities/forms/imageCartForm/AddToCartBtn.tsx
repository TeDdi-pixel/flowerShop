import { Button } from "@mui/material";
import { TypeFormButtons } from "../types/types";

const AddToCartBtn = ({ addToCart }: TypeFormButtons) => {
  return (
    <div className="img-cart-form__main-btn">
      <div className="img-cart-form__main-btn">
        <Button
          size="large"
          onClick={addToCart}
          variant="contained"
          color="secondary"
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default AddToCartBtn;
