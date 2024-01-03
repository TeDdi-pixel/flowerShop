import React from "react";
import backgroundImg from "../../assets/img/backgroundImg.webp";
import AddressBlock from "../../entities/addressBlock/addressBlock";

const AddressSection = ({ marginBottom }) => {
  return (
    <div
      className="address"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        marginBottom: marginBottom,
      }}
    >
      <AddressBlock />
    </div>
  );
};

export default AddressSection;
