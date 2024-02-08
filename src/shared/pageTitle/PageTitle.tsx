import { TypePageTitle } from "./types/types";

const PageTitle = ({ title, marginBottom, display }: TypePageTitle) => {
  return (
    <h1
      className="page-title"
      style={{ marginBottom: marginBottom, display: display }}
    >
      {title}
    </h1>
  );
};

export default PageTitle;
