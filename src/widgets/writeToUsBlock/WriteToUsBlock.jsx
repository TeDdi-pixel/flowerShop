import React from "react";
import PageTitle from "../../shared/pageTitle/PageTitle";
import WriteToUs from "../../entities/writeToUs/WriteToUs";

const WriteToUsBlock = ({ marginTop }) => {
  return (
    <div style={{ marginTop: marginTop }} >
      <PageTitle title={"WRITE TO US"} marginBottom={"20px"} display={'block'}/>
      <WriteToUs/>
    </div>
  );
};

export default WriteToUsBlock;
