import React from "react";
import FooterTab from "../../shared/footerTab/FooterTab";
import logo from "../../assets/icons/footer_logo.svg";

const FooterTabs = () => {
  return (
    <div className="footer__tabs">
      <FooterTab
        title={"Menu"}
        links={[
          "Search",
          "Home",
          "About us",
          "Catalog",
          "Collections",
          "Contacts",
        ]}
      />
      <FooterTab
        logo={logo}
        links={[
          "6201 Hollywood blvd Los Angeles, California 90028",
          "Monday - Friday 9:00 am - 8:00 pm Saturday 10:00 am - 5:00 pm Sunday 10:00 am - 5:00 pm",
          "+214 772 56 74 cherryblossom@gmail.com",
        ]}
      />
      <FooterTab
        title={"Legal Notice"}
        links={[
          "Privacy Policy",
          "Terms of Service",
          "Refund Policy",
          "Shipping police",
          "Billing and payment",
        ]}
      />
    </div>
  );
};

export default FooterTabs;
