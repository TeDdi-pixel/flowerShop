import { TypeAdditionalTitle } from "./types/types";

const AditionalTitle = ({ title, marginBottom }: TypeAdditionalTitle) => {
  return (
    <h4 className="additional-title" style={{ marginBottom: marginBottom }}>
      {title}
    </h4>
  );
};

export default AditionalTitle;
