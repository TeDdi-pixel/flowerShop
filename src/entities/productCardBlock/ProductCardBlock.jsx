import React, { useState } from "react";
import ProductCard from "./ProductCard";
import useCollections from "../../hooks/useCollections";

const ProductCardBlock = () => {
  const { collectionsData } = useCollections("products", "productsImg");
  return (
    <div className="top-rated__cards">
      {collectionsData.map((card) => {
        return (
          <ProductCard
            key={card.id}
            id={card.id}
            img={card.imageUrl}
            title={card.title}
            price={card.price}
            text={card.text}
          />
        );
      })}
    </div>
  );
};

export default ProductCardBlock;
