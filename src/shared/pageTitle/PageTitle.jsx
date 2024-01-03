import React from "react";

const PageTitle = ({ title, marginBottom,display }) => {
  return (
    <h1 className="page-title" style={{ marginBottom: marginBottom, display: display }}>
      {title}
    </h1>
  );
};

export default PageTitle;
