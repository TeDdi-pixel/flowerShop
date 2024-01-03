import React from "react";
import { Link } from "react-router-dom";

const FooterTab = ({ title, links, logo, path }) => {
  return (
    <ul className="footer__tab">
      {!logo ? (
        <h2 className="footer__tab-title">{title}</h2>
      ) : (
        <img src={logo} alt="logo" className="footer__logo" />
      )}
      {links.map((link, index) => {
        return (
          <li key={index} className="footer__tab-link">
            <Link to={link.path}>{link.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default FooterTab;
