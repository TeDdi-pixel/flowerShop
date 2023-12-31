import React, { useEffect } from "react";
import ProductSlideTitle from "../../shared/productSlide/ui/ProductSlideTitle";
import ProductSlideImg from "../../shared/productSlide/ui/ProductSlideImg";
import ProductSlidePrice from "../../shared/productSlide/ui/ProductSlidePrice";
import SliderSlide from "../../features/slider/SliderSlide";
import SliderBtnMain from "../../shared/sliderBtnMain/SliderBntMain";
import Exit from "../../shared/exit/Exit";
import Slider from "../../features/slider/Slider";
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

const ProductInfo = () => {
  const { collectionsData } = useCollections("products", "productsImg");
  const { data } = useData("products");
  const showMore = useSelector((state) => state.productInfo.showMore);
  const selectedItem = useSelector((state) => state.productInfo.selectedItem);
  const soledOutStatuses = useSelector(
    (stete) => stete.productInfo.soledOutStatuses
  );
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
      <div className="product-info__wrapper">
        <Exit onClick={handleExit} />
        <div className="product-info__slider">
          <Slider selectedItem={selectedItem}>
            {collectionsData.map((item, index) => {
              return (
                <SliderSlide key={item.id}>
                  <ProductSlideImg image={item.imageUrl} />
                  <div className="product-info__data-wrapper">
                    <ProductSlideTitle title={item.title} />
                    <ProductSlidePrice price={item.price} />
                    <Shiping />
                    <Sizes sizes={item.size} />
                    <div className="product-info__manage">
                      <Quantity />
                      <SliderBtnMain
                        text={item.text}
                        status={soledOutStatuses[index]}
                      />
                    </div>
                    <PickAddress />
                  </div>
                </SliderSlide>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
