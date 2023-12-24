import React from "react";
import addressBlockIcon from "../../assets/icons/addressBlockIcon.svg";
import AditionalTitle from "../../shared/aditionalTitle/AditionalTitle";
const AddressBlock = () => {
  return (
    <div className="address-block">
      <img src={addressBlockIcon} alt="" className="address-block__icon"/>
      <AditionalTitle title={"Сherry Blossom Address"} marginBottom={"20px"} />
      <p className="address-block__address">
        6201 Hollywood blvd <br /> Los Angeles, California 90028
      </p>
      <p className="address-block__work-time">
        Monday - Friday 9:00 am - 8:00 pm <br />
        Saturday 10:00 am - 5:00 pm <br />
        Sunday 10:00 am - 5:00 pm <br />
      </p>
    </div>
  );
};

export default AddressBlock;
