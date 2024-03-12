import { ReactNode } from "react";
import Header from "../../widgets/header/Header";
import Footer from "../../widgets/footer/Footer";
import CookiesMessage from "../../entities/cookies/cookiesMessage/CookiesMessage";
import Path from "../../shared/path/Path";
import { ToastContainer } from "react-toastify";

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main>
        <ToastContainer  style={{zIndex:'2000'}}/>
        <CookiesMessage />
        <Path />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
