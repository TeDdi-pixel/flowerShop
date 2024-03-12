import { TypeFlowerImageProps } from "../../shared/generator/types/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/types/types";
import { setIsFormOpen } from "../../store/slices/imageCartFormSlice";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import DownloadingRoundedIcon from "@mui/icons-material/DownloadingRounded";
import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import { saveAs } from "file-saver";

const FlowerImage = ({ image, regenerate }: TypeFlowerImageProps) => {
  const { genLoading, generatedImage } = useSelector(
    (state: RootState) => state.generator
  );
  const { isFormOpen } = useSelector((state: RootState) => state.imageCartForm);
  const dispatch = useDispatch();
  const openForm = () => {
    dispatch(setIsFormOpen(true));
  };

  const saveImg = async () => {
    const response = await fetch(generatedImage);
    const blob = await response.blob();
    saveAs(blob, "ai.png");
  };

  const actions = [
    { icon: <AutoModeIcon />, name: "Regenerate", func: regenerate },
    {
      icon: <ShoppingBasketRoundedIcon />,
      name: "Add to cart",
      func: openForm,
    },
    { icon: <DownloadingRoundedIcon />, name: "Download", func: saveImg },
  ];
  return (
    <div className="generator__img">
      {generatedImage && !genLoading ? (
        <>
          <img src={image} alt="Flower" height="512" />
          {isFormOpen ? null : (
            <SpeedDial
              ariaLabel="SpeedDial basic example"
              sx={{
                position: "absolute",
                bottom: 25,
                right: 15,
                "& .MuiFab-primary": {
                  backgroundColor: "#f5deb3",
                  color: "#665F5F",
                  width: 45,
                  height: 45,
                },
                "& .MuiSpeedDialIcon-icon": { fontSize: 24 },
                "& .MuiFab-primary:hover": { backgroundColor: "#FFEBC7" },
              }}
              icon={<SpeedDialIcon />}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  onClick={action.func}
                  sx={{ width: 35, height: 35 }}
                />
              ))}
            </SpeedDial>
          )}
        </>
      ) : null}
      {genLoading ? image : null}
    </div>
  );
};

export default FlowerImage;
