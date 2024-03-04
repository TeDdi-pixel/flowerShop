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
import {
  setFlowers,
  setPresetPrompt,
  setPrompt,
  setPromptNote,
  setPromptNoteHidden,
} from "../../store/slices/generator";
import { generateBouquet } from "../../store/asyncThunks/generateBouquet";
import { ThunkDispatch } from "redux-thunk";
import { scrollTo } from "../../helpers/scrollTo";
import PromptNote from "../../entities/generator/promptNote/PromptNote";
import { RiAiGenerate } from "react-icons/ri";

const Generator = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const { flowers, generatedImage, genLoading, promptNote } = useSelector(
    (state: RootState) => state.generator
  );

  const handlePrompt = (flowerValue: string) => {
    if (flowers.includes(flowerValue)) {
      const newFlowers = flowers.filter((flower) => flower !== flowerValue);
      dispatch(setFlowers(newFlowers));
    } else {
      const updatedFlowers = [...flowers, flowerValue];
      dispatch(setFlowers(updatedFlowers));
    }
    dispatch(setPresetPrompt(null));
    dispatch(setPrompt(""));
    dispatch(setPromptNote(true));
    dispatch(setPromptNoteHidden(false));
  };

  const handleGenerateBouquet = () => {
    dispatch(generateBouquet()); // изменить значения в ThunkDispatch
    scrollTo(75);
    if (promptNote) dispatch(setPromptNoteHidden(true));
  };
  const showPromptNote = () => {
    dispatch(setPromptNoteHidden(false));
    dispatch(setPromptNote(true));
  };
  const hidePromptNote = () => {
    dispatch(setPromptNoteHidden(true));
    dispatch(setPromptNote(false));
  };

  useEffect(() => {
    if (flowers.length === 0) dispatch(setPromptNote(false));
  }, [flowers]);

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
      <PromptNote
        showPromptNote={showPromptNote}
        hidePromptNote={hidePromptNote}
      />
      <GeneratorMainInput />
      <GeneratorPrompts handlePrompt={handlePrompt} />
      <Presets />
      <SliderBtnMain
        onClick={handleGenerateBouquet}
        text={"Generate"}
        icon={<RiAiGenerate />}
        width={"223px"}
      />
    </div>
  );
};

export default Generator;
