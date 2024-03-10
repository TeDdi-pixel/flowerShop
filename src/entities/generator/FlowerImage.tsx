import { TypeFlowerImageProps } from "../../shared/generator/types/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/types/types";
import FlowerImgButton from "../../shared/generator/FlowerImgButton";
import { buttonStyle, buttons } from "./config/buttons";
import { setIsFormOpen } from "../../store/slices/imageCartFormSlice";

const FlowerImage = ({ image, regenerate }: TypeFlowerImageProps) => {
  const { genLoading } = useSelector((state: RootState) => state.generator);
  const dispatch = useDispatch();
  const openForm = () => {
    dispatch(setIsFormOpen(true));
  };
  const buttonCondition = buttonStyle(genLoading);
  const buttonConfig = buttons(regenerate, openForm);
  return (
    <div className="generator__img">
      <img src={image} alt="Flower" />
      {buttonConfig.map((button, index) => (
        <FlowerImgButton
          key={index}
          tooltip={button.tooltip}
          className={`generator__img-${button.tooltip
            .toLowerCase()
            .replace(/ /g, "-")}-btn ${buttonCondition}`}
          onClick={button.func}
          icon={button.icon}
        />
      ))}
    </div>
  );
};

export default FlowerImage;
