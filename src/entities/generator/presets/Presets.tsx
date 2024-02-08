import { useState } from "react";
import { useDispatch } from "react-redux";
import { TypePreset } from "../types/types";
import { presets } from "./config/presets";
import {
  setFlowersCount,
  setPrompt,
  setSelectedFlower,
} from "../../../store/slices/generator";
import ProductCardButton from "../../../shared/productCard/ui/ProductCardButton";

const Presets = () => {
  const dispatch = useDispatch();
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const handlePreset = (prompt: string, id: number) => {
    dispatch(setPrompt(prompt));
    setActiveButton(id);
    dispatch(setSelectedFlower(null));
    dispatch(setFlowersCount(""));
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
            active={preset.id === activeButton}
          />
        ))}
      </div>
    </>
  );
};

export default Presets;
