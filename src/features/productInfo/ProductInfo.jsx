import React, { useEffect, useState } from "react";
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
import { useAddToCart } from "../../hooks/useAddToCart";
import ProductCardMessage from "../../shared/productCard/ui/ProductCardMessage";

const ProductInfo = () => {
  const { collectionsData } = useCollections("products", "productsImg");
  const { data } = useData("products");
  const showMore = useSelector((state) => state.productInfo.showMore);
  const selectedItem = useSelector((state) => state.productInfo.selectedItem);
  const soledOutStatuses = useSelector(
    (stete) => stete.productInfo.soledOutStatuses
  );
  const cookiesError = useSelector((state) => state.cookies.cookiesError);
  const { handleAddToCart, addedProducts } = useAddToCart();

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
        <Exit onClick={handleExit} color={"#665f5f"} />
        <div className="product-info__slider">
          <Slider selectedItem={selectedItem}>
            {collectionsData.map((item, index) => {
              return (
                <SliderSlide key={item.id}>
                  <ProductSlideImg image={item.imageUrl} />
                  {!cookiesError && addedProducts[item.id] ? (
                    <ProductCardMessage
                      isAddedMessage={addedProducts[item.id]}
                      width={"175px"}
                      height={"50px"}
                      top={"40%"}
                    />
                  ) : null}
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
      </div>
    </div>
  );
};

export default ProductInfo;
