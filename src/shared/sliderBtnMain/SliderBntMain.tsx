import { TypeProps } from "./types/types";

const SliderBtnMain = ({
  text,
  status,
  marginRight,
  onClick,
  icon,
  width,
  handleAddToCart,
  collectProductData,
}: TypeProps) => {
  const styles = {
    marginRight: marginRight,
    display: icon ? "flex" : "block",
    gap: icon ? "10px" : "",
    alignItems: icon ? "center" : "",
    width: width,
    justifyContent: icon ? "center" : "",
  };
  return (
    <button
      className={
        status ? "slider-btn_main slider-btn_main_soledOut" : "slider-btn_main"
      }
      style={styles}
      onClick={() => {
        if (collectProductData) handleAddToCart(collectProductData());
        if (onClick) onClick();
      }}
    >
      {text ? <div className="slider-btn_main__text">{text}</div> : null}
      <span></span>
      {icon}
    </button>
  );
};

export default SliderBtnMain;
