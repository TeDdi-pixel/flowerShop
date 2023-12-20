import React from 'react';
import DeliveryOption from "../../shared/deliveryOption/DeliveryOption";
import deliveryIcon1 from "../../assets/icons/deliveryIcon1.svg";
import deliveryIcon2 from "../../assets/icons/deliveryIcon2.svg";

const DeliveryOptionsBlock = () => {
    return (
        <div className='delivery-option__wrapper'>
                  <DeliveryOption
        title={"Need flowers delivered today?"}
        text={"Call or chat us"}
        icon={deliveryIcon1}
      />
      <DeliveryOption
        title={"Free delivery within 4 miles"}
        text={"No minimum order"}
        icon={deliveryIcon2}
      />
        </div>
    );
}

export default DeliveryOptionsBlock;
