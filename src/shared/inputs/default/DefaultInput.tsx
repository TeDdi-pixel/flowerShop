import { TypeDefaultInput } from "./types/types";

const DefaultInput = ({ text, icon, type, onChange, id }: TypeDefaultInput) => {
  return (
    <div className="default-input">
      <input type={type} placeholder={text} onChange={onChange} id={id} />
      <button>{icon}</button>
    </div>
  );
};

export default DefaultInput;
