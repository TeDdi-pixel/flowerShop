import React from "react";

const PageTitle = ({ title, marginBottom }) => {
  return (
    <h1 className="page-title" style={{ marginBottom: marginBottom }}>
      {title}
    </h1>
  );
};

export default PageTitle;
