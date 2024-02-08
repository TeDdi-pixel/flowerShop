import { GoNumber } from "react-icons/go";
import DefaultInput from "../../shared/inputs/default/DefaultInput";
import { useDispatch } from "react-redux";
import { setFlowersCount } from "../../store/slices/generator";

const GeneratorMainInput = () => {
  const dispatch = useDispatch();

  const handlePromptNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFlowersCount(e.target.value));
  };
  
  return (
    <div className="generator__input">
      <label htmlFor="generator__input">Type a count of flowers:</label>
      <DefaultInput
        text="#"
        id={"generator__input"}
        type={"number"}
        onChange={handlePromptNumber}
        icon={<GoNumber style={{ color: "#665f5f", opacity: "0.5" }} />}
      />
    </div>
  );
};

export default GeneratorMainInput;
