import React from 'react';
import CollectionItemTitle from './CollectionItemTitle';
import { Link } from 'react-router-dom';

const CollectionItem = ({title,bgImg}) => {
    return (
        <Link to="/" className='collections__item' style={{backgroundImage: `url(${bgImg})`}}>
            <CollectionItemTitle title={title}/>
        </Link>
    );
}

export default CollectionItem;
