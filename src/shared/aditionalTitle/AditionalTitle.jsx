import React from "react";

const AditionalTitle = ({ title, marginBottom }) => {
  return (
    <h4 className="additional-title" style={{ marginBottom: marginBottom }}>
      {title}
    </h4>
  );
};

export default AditionalTitle;
