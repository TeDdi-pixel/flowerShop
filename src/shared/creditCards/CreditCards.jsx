import React from "react";
import { cards } from "./config/creditCards";
import { Link } from "react-router-dom";

const CreditCards = () => {
  return (
    <div className="footer__credit-cards">
      {cards.map((card, index) => {
        return <Link key={index}>{card}</Link>;
      })}
    </div>
  );
};

export default CreditCards;
