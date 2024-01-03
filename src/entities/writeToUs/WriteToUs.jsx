import React from "react";
import Input from "../../shared/inputs/writeToUs/Input";
import TextArea from "../../shared/inputs/writeToUs/TextArea";

const WriteToUs = () => {
  return (
    <div className="write-to-us">
      <div className="write-to-us__container">
        <div className="write-to-us__inputs-wrapper">
          <Input text={"Name"} type={"text"} />
          <Input text={"E-mail"} type={"email"} />
          <Input text={"Phone number"} type={"tel"} />
        </div>
        <TextArea text={"Enter your text..."} />
      </div>
    </div>
  );
};

export default WriteToUs;
