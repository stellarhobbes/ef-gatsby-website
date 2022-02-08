import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import RedLine from "../images/ef-line-red.png";
import LogoQualiopi from "../images/logo-qualiopi.png";
import LogoCompteFormation from "../images/logo-moncompteformation.png";

import Navbar from "../components/navbar";
import CentralFooter from "../components/footer-central";

const ContactPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://sebastienratppro32825.activehosted.com/f/embed.php?id=14";
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);
  if (typeof window !== "undefined") {
    if (window.fbq != null) {
      window.fbq("track", "PageView");
    }
  }
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact | L'Entrepreneuriat Français</title>
      </Helmet>
      <Navbar />
      <div className="mb-48"></div>
      <div class="_form_14"></div>
      <script
        src="https://sebastienratppro32825.activehosted.com/f/embed.php?id=14"
        type="text/javascript"
        charset="utf-8"
      ></script>
      <div className="mt-40"></div>
      <div id="double-logo" className="flex justify-center">
        <div className="inline-flex rounded-md">
          <img
            className="h-16 w-auto"
            src={LogoQualiopi}
            alt="logo entrepreneuriat français"
          />
        </div>
        <div className="ml-3 inline-flex">
          <img
            className="h-16 w-auto"
            src={LogoCompteFormation}
            alt="logo entrepreneuriat français"
          />
        </div>
      </div>
      <div id="redline" className="z-10 mt-10 flex justify-center">
        <img
          className="align-item-center w-4/4 flex"
          src={RedLine}
          alt="ligne séparation rouge"
        />
      </div>
      <CentralFooter />
    </main>
  );
};

export default ContactPage;
