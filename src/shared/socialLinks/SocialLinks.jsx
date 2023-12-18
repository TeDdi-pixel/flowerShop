import React from "react";
import { links } from "./config/socialLinks";
import { Link } from "react-router-dom";

const SocialLinks = () => {
  return (
    <div className="footer__socials">
      {links.map((link, index) => {
        return <Link key={index}>{link}</Link>;
      })}
    </div>
  );
};

export default SocialLinks;
