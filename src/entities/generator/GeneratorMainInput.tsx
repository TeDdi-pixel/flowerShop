import { GoNumber } from "react-icons/go";
import DefaultInput from "../../shared/inputs/default/DefaultInput";
import { useDispatch, useSelector } from "react-redux";
import { setFlowersCount, setPresetPrompt } from "../../store/slices/generator";
import { TypeGenerator } from "../../store/types/types";

const GeneratorMainInput = () => {
  const dispatch = useDispatch();
  const { flowersCount } = useSelector(
    (state: TypeGenerator) => state.generator
  );

  const handlePromptNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFlowersCount(e.target.value));
    dispatch(setPresetPrompt(null))
  };

  return (
    <div className="generator__input">
      <label htmlFor="generator__input">Type a count of flowers:</label>
      <DefaultInput
        text="#"
        id={"generator__input"}
        type={"number"}
        onChange={handlePromptNumber}
        value={flowersCount}
        icon={<GoNumber style={{ color: "#665f5f", opacity: "0.5" }} />}
      />
    </div>
  );
};

export default GeneratorMainInput;
