import { useEffect } from "react";
import SliderBtnMain from "../../shared/sliderBtnMain/SliderBntMain";
import FlowerImgPlaceholder from "../../shared/generator/FlowerImgPlaceholder";
import FlowerImage from "../../shared/generator/FlowerImage";
import spinner from "../../assets/img/spinner.svg";
import axios from "axios";
import GeneratorPrompts from "../../entities/generator/GeneratorPrompts";
import { useDispatch, useSelector } from "react-redux";
import { TypeGenerator } from "../../store/types/types";
import GeneratorMainInput from "../../entities/generator/GeneratorMainInput";
import Presets from "../../entities/generator/presets/Presets";
import {
  setGenLoading,
  setGeneratedImage,
  setPrompt,
} from "../../store/slices/generator";

const Generator = () => {
  const dispatch = useDispatch();

  const { flower, flowersCount, prompt, generatedImage, genLoading } =
    useSelector((state: TypeGenerator) => state.generator);

  const options = {
    method: "POST",
    url: "https://api.edenai.run/v2/image/generation",
    headers: {
      authorization: `Bearer ${import.meta.env.VITE_EDEN_API_KEY}`,
    },
    data: {
      providers: "replicate",
      text: `${
        prompt != ""
          ? prompt
          : `draw me a realistic image of bouquet of ${flowersCount} ${flower} on the pink to white gradient behind on the background`
      }`,
      resolution: "512x512",
      fallback_providers: "",
    },
  };

  const generateBouquet = async () => {
    dispatch(setGenLoading(true));

    axios
      .request(options)
      .then((response) => {
        dispatch(
          setGeneratedImage(response.data.replicate.items[0].image_resource_url)
        );
        dispatch(setGenLoading(false));
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
        dispatch(setGenLoading(false));
        dispatch(setPrompt(""));
      });
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
          onClick={generateBouquet}
        />
      ) : (
        <FlowerImgPlaceholder />
      )}
      <GeneratorMainInput />
      <GeneratorPrompts />
      <Presets />
      <SliderBtnMain onClick={generateBouquet} text={"Generate"} />
    </div>
  );
};

export default Generator;
