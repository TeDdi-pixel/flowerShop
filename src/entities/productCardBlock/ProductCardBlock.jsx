import React from 'react';
import ProductCard from '../../shared/productCard/ProductCard';

const ProductCardBlock = () => {
    return (
        <div className='top-rated__cards'>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    );
}

export default ProductCardBlock;
