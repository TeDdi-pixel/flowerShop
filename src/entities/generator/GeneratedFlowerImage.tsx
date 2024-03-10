import { useSelector } from "react-redux";
import { RootState } from "../../store/types/types";
import FlowerImage from "./FlowerImage";
import FlowerImgPlaceholder from "../../shared/generator/FlowerImgPlaceholder";
import spinner3 from "../../assets/img/spinner3.svg";
import { TypeOutputImage } from "../../features/generator/types/types";

export default function GeneratedFlowerImage({ regenerate }: TypeOutputImage) {
  const { generatedImage, genLoading } = useSelector(
    (state: RootState) => state.generator
  );

  return generatedImage ? (
    <FlowerImage
      image={genLoading ? spinner3 : generatedImage}
      regenerate={regenerate}
    />
  ) : (
    <FlowerImgPlaceholder />
  );
}
