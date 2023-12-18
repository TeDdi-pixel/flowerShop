import React from "react";
import FooterTab from "../../shared/footerTab/FooterTab";
import { footerData, footerDataMobile } from "./config/footerData";
import useWindowResize from "../../hooks/useWindowResize";

const FooterTabs = () => {
  const { isFullWidth } = useWindowResize(767);

  const footerTab = (data) =>
    data.map((tab, index) => (
      <FooterTab
        key={index}
        title={tab.title}
        logo={tab.logo}
        links={tab.links}
      />
    ));
  return (
    <div className="footer__tabs">
      {isFullWidth ? footerTab(footerDataMobile) : footerTab(footerData)}
    </div>
  );
};

export default FooterTabs;
