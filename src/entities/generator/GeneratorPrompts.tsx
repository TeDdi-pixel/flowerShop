import { flowers } from "../../features/generator/config/flowers";
import { TypeFlower } from "../../features/generator/types/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/types/types";
import {
  setFlower,
  setPresetPrompt,
  setPrompt,
  setSelectedFlower,
} from "../../store/slices/generator";
import { Link } from "react-router-dom";
import { TbExternalLink } from "react-icons/tb";

const GeneratorPrompts = () => {
  const dispatch = useDispatch();

  const { selectedFlower } = useSelector((state: RootState) => state.generator);

  const handlePrompt = (promptValue: string, id: number) => {
    dispatch(setFlower(promptValue));
    dispatch(setSelectedFlower(id));
    dispatch(setPresetPrompt(null));
    dispatch(setPrompt(""));
  };

  return (
    <div className="generator__flowers">
      {flowers.map((flower: TypeFlower) => (
        <button
          key={flower.id}
          className={`generator__flowers-prompt ${
            selectedFlower === flower.id
              ? "generator__flowers-prompt_active"
              : ""
          }`}
          onClick={() => handlePrompt(flower.value, flower.id)}
        >
          <img src={flower.img} alt={flower.value} />
          <span className="generator__flowers-prompt-text">{flower.text}</span>
          <Link
            className="generator__flower-link"
            to={`/Home/Product/${flower.id}`}
          >
            <TbExternalLink />
          </Link>
        </button>
      ))}
    </div>
  );
};

export default GeneratorPrompts;
