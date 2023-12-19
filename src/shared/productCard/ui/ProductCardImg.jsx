import React from 'react';

const ProductCardImg = ({img}) => {
    return (
        <img src={img} alt={img} className="product-card__img"/>
    );
}

export default ProductCardImg;
