import { flowers as configFlowers } from "../../features/generator/config/flowers";
import { TypeFlower } from "../../features/generator/types/types";
import { useSelector } from "react-redux";
import { TbExternalLink } from "react-icons/tb";
import { RootState } from "../../store/types/types";
import GeneratorCheckBox from "../../shared/generator/GeneratorCheckBox";
import FlowerPrompt from "../../shared/generator/FlowerPrompt";
import CategoryLink from "../../shared/generator/CategoryLink";

const GeneratorPrompts = ({
  handlePrompt,
}: {
  handlePrompt: (flowerValue: string) => void;
}) => {
  const { flowers } = useSelector((state: RootState) => state.generator);

  return (
    <div className="generator__flowers">
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
            <CategoryLink
              location={`/Home/Product/${flower.id}`}
              icon={<TbExternalLink />}
            />
          </FlowerPrompt>
        );
      })}
    </div>
  );
};

export default GeneratorPrompts;
