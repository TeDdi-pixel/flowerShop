import { TypeFlowerPrompt } from "./types/types";

const FlowerPrompt = ({
  children,
  isActive,
  handlePrompt,
  flowerValue,
}: TypeFlowerPrompt) => {
  return (
    <button
      className={`generator__flowers-prompt ${
        isActive ? "generator__flowers-prompt_active" : ""
      }`}
      onClick={() => handlePrompt(flowerValue)}
    >
      {children}
    </button>
  );
};

export default FlowerPrompt;
