import React, { useEffect, useState } from "react";
import Slider from "../../features/slider/Slider";
import useCollections from "../../hooks/useCollections";
import ProductSlideTitle from "../../shared/productSlide/ui/ProductSlideTitle";
import ProductSlideImg from "../../shared/productSlide/ui/ProductSlideImg";
import ProductSlidePrice from "../../shared/productSlide/ui/ProductSlidePrice";
import SliderSlide from "../../features/slider/SliderSlide";
import SliderBtnMain from "../../shared/sliderBtnMain/SliderBntMain";
import ProductSlideQuantity from "../../entities/productSlide/ProductSlideQuantity";
import Exit from "../../shared/exit/Exit";
import ProductSlideSize from "../../entities/productSlide/ProductSlideSize";
import { useDispatch, useSelector } from "react-redux";
import { handleShowMore } from "../../slices/showMoreSlice";
import useData from "../../hooks/useData";

const ProductInfo = () => {
  const { collectionsData } = useCollections("products", "productsImg");
  const { data } = useData("products");
  const showMore = useSelector((state) => state.showMore.value);
  const selectedItem = useSelector((state) => state.showMore.selectedItem);
  const dispatch = useDispatch();

  const [soledOutStatuses, setSoledOutStatuses] = useState([]);
  useEffect(() => {
    setSoledOutStatuses(
      data.map((item) => item.text.toLowerCase() === "sold out")
    );
  }, [collectionsData]);

  return (
    <div
      className={showMore ? "product-info product-info_open" : "product-info"}
    >
      <div className="product-info__wrapper">
        <Exit onClick={() => dispatch(handleShowMore())} />
        <div className="product-info__slider">
          <Slider selectedItem={selectedItem}>
            {collectionsData.map((item, index) => {
              return (
                <SliderSlide key={item.id}>
                  <ProductSlideImg image={item.imageUrl} />
                  <div className="product-info__data-wrapper">
                    <ProductSlideTitle title={item.title} />
                    <ProductSlidePrice price={item.price} />
                    <div className="product-info__shiping">
                      <span className="product-info__shiping product-info__shiping_underline">
                        Shipping
                      </span>
                      &nbsp; calculated at checkout
                    </div>
                    <ProductSlideSize />
                    <div className="product-info__manage">
                      <ProductSlideQuantity />
                      <SliderBtnMain
                        text={item.text}
                        status={soledOutStatuses[index]}
                      />
                    </div>
                    <div className="product-info__pick-address">
                      Pickup available at <span>Hollywood blvd</span>. Usually
                      ready in tomorrow
                    </div>
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
