import { useEffect } from "react";
import SliderBtnMain from "../../shared/sliderBtnMain/SliderBntMain";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/types/types";
import Presets from "../../entities/generator/presets/Presets";
import {
  setFlowers,
  setPresetPrompt,
  setPrompt,
  setPromptNote,
  setPromptNoteHidden,
} from "../../store/slices/generatorSlice";
import { generateBouquet } from "../../store/asyncThunks/generateBouquet";
import { ThunkDispatch } from "redux-thunk";
import PromptNote from "../../entities/generator/promptNote/PromptNote";
import { RiAiGenerate } from "react-icons/ri";
import { scrollTo } from "../../helpers/scrollTo";
import FlowerPromptList from "../../entities/generator/FlowerPromptList";
import GeneratedFlowerImage from "../../entities/generator/GeneratedFlowerImage";
import {
  resetGeneratedTitle,
  setProductId,
} from "../../store/slices/imageCartFormSlice";
import { generateNumber } from "../../helpers/generateNumber";

const Generator = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const { flowers, promptNote } = useSelector(
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
    dispatch(setProductId(generateNumber(0, 12576594233)));
    dispatch(resetGeneratedTitle(""));
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

  const promptFlowers = flowers.map((flower, index) => (
    <span key={index}>
      {flower}
      {index < flowers.length - 1 ? ", " : ""}
    </span>
  ));

  useEffect(() => {
    if (flowers.length === 0) dispatch(setPromptNote(false));
  }, [flowers]);

  return (
    <div className="generator">
      <GeneratedFlowerImage regenerate={handleGenerateBouquet} />
      <PromptNote
        showPromptNote={showPromptNote}
        hidePromptNote={hidePromptNote}
        text={promptFlowers}
      />
      <FlowerPromptList handlePrompt={handlePrompt} />
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
