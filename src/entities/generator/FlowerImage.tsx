import { TypeFlowerImageProps } from "../../shared/generator/types/types";
import { useSelector } from "react-redux";
import { RootState } from "../../store/types/types";
import FlowerImgButton from "../../shared/generator/FlowerImgButton";
import { buttonStyle, buttons } from "./buttons/config";

const FlowerImage = ({ image, onClick }: TypeFlowerImageProps) => {
  const { genLoading } = useSelector((state: RootState) => state.generator);
  const buttonCondition = buttonStyle(genLoading);
  const buttonConfig = buttons(onClick);
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
          onClick={button.onClick}
          icon={button.icon}
        />
      ))}
    </div>
  );
};

export default FlowerImage;
