import React from "react";
import ChooseUsTitle from "../../shared/chooseUs/ui/ChooseUsTitle";
import ChooseUsText from "../../shared/chooseUs/ui/ChooseUsText";

const ChooseUsCard = ({ text, title, img }) => {
  return (
    <div className="choose-us__card">
      <ChooseUsTitle title={title} img={img} />
      <ChooseUsText text={text} />
    </div>
  );
};

export default ChooseUsCard;
