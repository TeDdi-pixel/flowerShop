import React from "react";
import { Link } from "react-router-dom";

const CreditCard = ({ icon, fontSize }) => {
  return (
    <Link style={{ fontSize }}>{icon}</Link>
  );
};

export default CreditCard;