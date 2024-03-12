import FooterTabs from "../../entities/footerTabs/FooterTabs";
import SocialLinks from "../../shared/socialLinks/SocialLinks";
import CreditCards from "../../shared/creditCards/CreditCards";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <FooterTabs />
        <SocialLinks />
        <CreditCards />
        <Link to='/' className="footer__rights">© 2022, Los Angeles Florist - Cherry Blossom</Link>
      </div>
    </footer>
  );
};

export default Footer;
