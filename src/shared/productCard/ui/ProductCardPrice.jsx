import React from 'react';

const ProductCardPrice = ({price}) => {
    return (
        <div className='product-card__price'>
            {`$${price}.00`}
        </div>
    );
}

export default ProductCardPrice;
