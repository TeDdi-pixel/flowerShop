import React, { useContext, useEffect, useState } from "react";
import Slider from "../../features/slider/Slider";
import useCollections from "../../hooks/useCollections";
import ProductSlideTitle from "../../shared/productSlide/ui/ProductSlideTitle";
import ProductSlideImg from "../../shared/productSlide/ui/ProductSlideImg";
import ProductSlidePrice from "../../shared/productSlide/ui/ProductSlidePrice";
import { DataContext } from "../../context/Context";
import SliderSlide from "../../features/slider/SliderSlide";
import SliderBtnMain from "../../shared/sliderBtnMain/SliderBntMain";
import ProductSlideQuantity from "../../entities/productSlide/ProductSlideQuantity";
import Exit from "../../shared/exit/Exit";
import ProductSlideSize from "../../entities/productSlide/ProductSlideSize";

const ProductInfo = () => {
  const { collectionsData } = useCollections("products", "productsImg");
  const context = useContext(DataContext);
  const [soledOutStatuses, setSoledOutStatuses] = useState([]);
  useEffect(() => {
    setSoledOutStatuses(
      collectionsData.map((item) => item.text.toLowerCase() === "sold out")
    );
  }, [collectionsData]);

  return (
    <div
      className={
        context.showMore ? "product-info product-info_open" : "product-info"
      }
    >
      <div className="product-info__wrapper">
        <Exit onClick={context.handleShowMore} />
        <div className="product-info__slider">
          <Slider selectedItem={context.selectedItem}>
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
