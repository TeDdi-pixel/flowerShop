import React from 'react';
import backgroundImg from '../../assets/img/backgroundImg.jpg';
import AddressBlock from '../../entities/addressBlock/addressBlock';

const AddressSection = () => {
    return (
        <div className='address' style={{backgroundImage: `url(${backgroundImg})`}}>
            <AddressBlock/>
        </div>
    );
}

export default AddressSection;
