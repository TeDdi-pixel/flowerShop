import { useEffect } from "react";
import ProductSlideTitle from "../../shared/productSlide/ui/ProductSlideTitle";
import ProductSlideImg from "../../shared/productSlide/ui/ProductSlideImg";
import ProductSlidePrice from "../../shared/productSlide/ui/ProductSlidePrice";
import SliderSlide from "../slider/SliderSlide";
import SliderBtnMain from "../../shared/sliderBtnMain/SliderBntMain";
import Exit from "../../shared/exit/Exit";
import Slider from "../slider/Slider";
import { useDispatch, useSelector } from "react-redux";
import useCollections from "../../hooks/useCollections";
import useData from "../../hooks/useData";
import Quantity from "../../entities/productSlide/Quantity";
import Sizes from "../../entities/productSlide/Sizes";
import Shiping from "../../shared/shiping/Shiping";
import {
  handleShowMore,
  setIsSliderOpened,
  setSoledOutStatuses,
} from "../../store/slices/productInfoSlice";
import PickAddress from "../../shared/pickAddress/PickAddress";
import { useAddToCart } from "../../hooks/useAddToCart";
import { RootState, TypeProduct } from "../../store/types/types";

const ProductInfo = () => {
  const { collectionsData } = useCollections("products", "productsImg");
  const { data } = useData(true, "products");
  const { showMore, selectedItem, soledOutStatuses } = useSelector(
    (state: RootState) => state.productInfo
  );

  const { handleAddToCart } = useAddToCart();
  const dispatch = useDispatch();
  const handleExit = () => {
    dispatch(setIsSliderOpened());
    dispatch(handleShowMore());
  };

  useEffect(() => {
    dispatch(setSoledOutStatuses(data));
  }, [data]);
  return (
    <div
      className={showMore ? "product-info product-info_open" : "product-info"}
    >
      <aside className="product-info__wrapper">
        <Exit onClick={handleExit} color={"#665f5f"} />
        <div className="product-info__slider">
          <Slider selectedItem={selectedItem}>
            {collectionsData.map((item: TypeProduct, index) => {
              return (
                <SliderSlide key={item.id}>
                  <ProductSlideImg image={item.imageUrl} />
                  <div className="product-info__data-wrapper">
                    <ProductSlideTitle title={item.title} />
                    <ProductSlidePrice price={item.price} />
                    <Shiping />
                    <Sizes sizes={item.size} />
                    <div
                      className="product-info__manage"
                      style={{ marginBottom: "30px" }}
                    >
                      <Quantity
                        title={"Quantity"}
                        titleMargin={"10px"}
                        height={"30px"}
                        maxWidth={"90px"}
                      />
                      <SliderBtnMain
                        text={item.text}
                        status={soledOutStatuses[index]}
                        onClick={() => handleAddToCart(item)}
                      />
                    </div>
                    <PickAddress />
                  </div>
                </SliderSlide>
              );
            })}
          </Slider>
        </div>
      </aside>
    </div>
  );
};

export default ProductInfo;
