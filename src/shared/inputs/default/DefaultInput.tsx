import { TypeDefaultInput } from "./types/types";

const DefaultInput = ({
  text,
  icon,
  type,
  onChange,
  id,
  value,
}: TypeDefaultInput) => {
  return (
    <div className="default-input">
      <input
        type={type}
        placeholder={text}
        onChange={onChange}
        id={id}
        value={value}
      />
      <button>{icon}</button>
    </div>
  );
};

export default DefaultInput;
