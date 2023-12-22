import React from "react";
import MainTitle from "../../shared/mainTitle/MainTitle";
import ChooseUsCard from "../../entities/chooseUsCard/ChooseUsCard";
import useCollections from "../../hooks/useCollections";

const ChooseUs = () => {
  const { collectionsData } = useCollections("whyChooseUs", "chooseUsImg");

  return (
    <div className="choose-us">
      <MainTitle title={"Why choose us"} />
      <div className="choose-us__wrapper">
        {collectionsData.map((item) => (
          <ChooseUsCard
            key={item.id}
            text={item.text}
            title={item.title}
            img={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
