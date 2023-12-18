import React from "react";
import CreditCard from "./CreditCard";
import { cards } from "./config/creditCards";
import useWindowResize from "../../hooks/useWindowResize";

const CreditCards = () => {
  const { isFullWidth } = useWindowResize(767);

  return (
    <div className="footer__credit-cards">
      {cards.map((card, index) => (
        <CreditCard
          key={index}
          icon={card.icon}
          fontSize={isFullWidth ? card.fontSize : '55px'}
        />
      ))}
    </div>
  );
};

export default CreditCards;