import React from "react";
import MainBtn from "../../shared/mainBtn/MainBtn";
import backgroundImg from '../../assets/img/backgroundImg.jpg';

const EntranceBlock = () => {
  return (
    <div className="entrance-block" style={{backgroundImage: `url(${backgroundImg})`}}>
      <h1 className="entrance-block__title">
        Choose flowers <br />
        for any occasion
      </h1>
      <h4 className="entrance-block__descriprion">
        Our goal is to provide the highest quality
        <br />
        and fresh flower delivery in <span>Los Angeles</span>.
      </h4>
      <MainBtn text={"View now"} fontColor={"#665F5F"} bgColor={"white"} />
    </div>
  );
};

export default EntranceBlock;
