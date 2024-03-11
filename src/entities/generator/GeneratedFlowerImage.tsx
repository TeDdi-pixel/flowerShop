import { useSelector } from "react-redux";
import { RootState } from "../../store/types/types";
import FlowerImage from "./FlowerImage";
import FlowerImgPlaceholder from "../../shared/generator/FlowerImgPlaceholder";
import barLoader from "../../assets/img/Bar Loader.json";
import { TypeOutputImage } from "../../features/generator/types/types";
import Lottie from "lottie-react";

export default function GeneratedFlowerImage({ regenerate }: TypeOutputImage) {
  const { generatedImage, genLoading } = useSelector(
    (state: RootState) => state.generator
  );

  return generatedImage ? (
    <FlowerImage
      image={
        genLoading ? (
          <Lottie
            animationData={barLoader}
            loop
            autoplay
            className="loading-spinner"
          />
        ) : (
          generatedImage
        )
      }
      regenerate={regenerate}
    />
  ) : (
    <FlowerImgPlaceholder />
  );
}
