import { flowers as configFlowers } from "../../features/generator/config/flowers";
import { TypeFlower } from "../../features/generator/types/types";
import { useSelector } from "react-redux";
import { RootState } from "../../store/types/types";
import GeneratorCheckBox from "../../shared/generator/GeneratorCheckBox";
import FlowerPrompt from "../../shared/generator/FlowerPrompt";
import { TypeFlowerPromptList } from "./types/types";

const FlowerPromptList = ({ handlePrompt }: TypeFlowerPromptList) => {
  const { flowers, moreFlowersOpen } = useSelector(
    (state: RootState) => state.generator
  );

  return (
    <div
      className={`generator__flowers ${
        moreFlowersOpen ? "generator__flowers_extended" : ""
      }`}
    >
      {configFlowers.map((flower: TypeFlower) => {
        const isActive = flowers.includes(flower.value);
        return (
          <FlowerPrompt
            key={flower.id}
            isActive={isActive}
            flowerValue={flower.value}
            handlePrompt={handlePrompt}
          >
            <img src={flower.img} alt={flower.value} />
            <GeneratorCheckBox isActive={isActive} />
            <span className="generator__flowers-prompt-text">
              {flower.text}
            </span>
          </FlowerPrompt>
        );
      })}
    </div>
  );
};

export default FlowerPromptList;
