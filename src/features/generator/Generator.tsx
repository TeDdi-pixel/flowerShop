import { useEffect } from "react";
import SliderBtnMain from "../../shared/sliderBtnMain/SliderBntMain";
import FlowerImgPlaceholder from "../../shared/generator/FlowerImgPlaceholder";
import FlowerImage from "../../shared/generator/FlowerImage";
import spinner from "../../assets/img/spinner.svg";
import GeneratorPrompts from "../../entities/generator/GeneratorPrompts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/types/types";
import GeneratorMainInput from "../../entities/generator/GeneratorMainInput";
import Presets from "../../entities/generator/presets/Presets";
import { setPrompt } from "../../store/slices/generator";
import { generateBouquet } from "../../store/asyncThunks/generateBouquet";
import { ThunkDispatch } from "redux-thunk";

const Generator = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const { flower, flowersCount, prompt, generatedImage, genLoading } =
    useSelector((state: RootState) => state.generator);

  const handleGenerateBouquet = () => {
    dispatch(generateBouquet()); // изменить значения в ThunkDispatch
  };

  useEffect(() => {
    if (prompt !== "") {
      dispatch(setPrompt(""));
    }
  }, [flower, flowersCount]);

  return (
    <div className="generator">
      {generatedImage ? (
        <FlowerImage
          image={genLoading ? spinner : generatedImage}
          onClick={handleGenerateBouquet}
        />
      ) : (
        <FlowerImgPlaceholder />
      )}

      <GeneratorMainInput />
      <GeneratorPrompts />
      <Presets />
      <SliderBtnMain onClick={handleGenerateBouquet} text={"Generate"} />
    </div>
  );
};

export default Generator;
