import { useDispatch, useSelector } from "react-redux";
import { TypePreset } from "../types/types";
import { presets } from "./config/presets";
import {
  setFlowers,
  setPresetPrompt,
  setPrompt,
  setPromptNote,
  setPromptNoteHidden,
} from "../../../store/slices/generator";
import ProductCardButton from "../../../shared/productCard/ui/ProductCardButton";
import { RootState } from "../../../store/types/types";

const Presets = () => {
  const dispatch = useDispatch();
  const { presetPrompt } = useSelector((state: RootState) => state.generator);

  const handlePreset = (prompt: string, id: number) => {
    dispatch(setPrompt(prompt));
    dispatch(setPresetPrompt(id));
    dispatch(setPromptNote(false));
    dispatch(setPromptNoteHidden(false));
    dispatch(setFlowers([]));
  };

  return (
    <>
      <h2 className="generator__title">Presets</h2>
      <div className="generator__presets">
        {presets.map((preset: TypePreset) => (
          <ProductCardButton
            key={preset.id}
            handlePreset={() => handlePreset(preset.prompt, preset.id)}
            text={preset.text}
            active={preset.id === presetPrompt}
          />
        ))}
      </div>
    </>
  );
};

export default Presets;
