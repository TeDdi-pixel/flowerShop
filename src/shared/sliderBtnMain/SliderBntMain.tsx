import { TypeProps } from "./types/types";

const SliderBtnMain = ({
  text,
  status,
  marginRight,
  onClick,
  icon,
  width,
}: TypeProps) => {
  const styles = {
    marginRight: marginRight,
    display: icon ? "flex" : "block",
    gap: icon ? "10px" : "",
    alignItems: icon ? "center" : "",
    width: width,
  };
  return (
    <button
      className={
        status ? "slider-btn_main slider-btn_main_soledOut" : "slider-btn_main"
      }
      style={styles}
      onClick={onClick}
    >
      <div className="slider-btn_main__text">{text}</div>
      <span></span>
      {icon}
    </button>
  );
};

export default SliderBtnMain;