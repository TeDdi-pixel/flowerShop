import React from "react";
import FooterTab from "../../shared/footerTab/FooterTab";
import { footerData } from "./config/footerData";

const FooterTabs = () => {
  return (
    <div className="footer__tabs">
      {footerData.map((tab, index) => (
        <FooterTab
          key={index}
          title={tab.title}
          logo={tab.logo}
          links={tab.links}
        />
      ))}
    </div>
  );
};

export default FooterTabs;
