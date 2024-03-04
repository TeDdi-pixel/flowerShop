import { TypeFlowerImgButton } from "./types/types";

const FlowerImgButton = ({
  tooltip,
  onClick,
  className,
  icon,
}: TypeFlowerImgButton) => {
  return (
    <button onClick={onClick} className={className} title={tooltip}>
      {icon}
    </button>
  );
};

export default FlowerImgButton;
