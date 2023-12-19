import React from 'react';
import ProductCardBlock from '../../entities/productCardBlock/ProductCardBlock';
import ShowMoreBtn from '../../shared/showMoreBtn/ShowMoreBtn';

const TopRated = () => {
    return (
        <div className='top-rated'>
            <h2 className='top-rated__title'>Top Rated</h2>
            <ProductCardBlock/>
            <ShowMoreBtn/>
        </div>
    );
}

export default TopRated;
