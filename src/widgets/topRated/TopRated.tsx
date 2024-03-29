import ProductCardBlock from "../../features/topRated/ProductCardBlock";
import MainBtn from "../../shared/mainBtn/MainBtn";
import MainTitle from "../../shared/mainTitle/MainTitle";
import useWindowResize from "../../hooks/useWindowResize";

const TopRated = () => {
  const { isFullWidth } = useWindowResize(525);
  return (
    <div className="top-rated">
      <MainTitle title={"Top rated"} />
      <ProductCardBlock />
      <MainBtn
        link="/"
        text={"Show more"}
        bgColor={"#665F5F"}
        fontColor={"white"}
        marginBottom={isFullWidth ? "30px" : "90px"}
      />
    </div>
  );
};

export default TopRated;
