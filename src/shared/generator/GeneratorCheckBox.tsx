import { Checkbox } from "@mui/material";
import { green, grey } from "@mui/material/colors";

const GeneratorCheckBox = ({ isActive }: { isActive: boolean }) => {
  return (
    <div
      className="generator__random-flower-checkbox"
      style={{ opacity: isActive ? "1" : "0" }}
    >
      <Checkbox
        checked={isActive}
        color="success"
        sx={{
          color: grey[600],
          "&.Mui-checked": {
            color: "wheat",
          },
        }}
      />
    </div>
  );
};

export default GeneratorCheckBox;
