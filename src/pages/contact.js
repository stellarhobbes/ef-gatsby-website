import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import Navbar from "../components/navbar";
import PreFooter from "../components/prefooter";
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
      <PreFooter
        subtitle="Il est temps de changer de vie"
        title="Entreprenez et rejoignez l'excellence à la française"
        buttonTitle="Parlez à un coach"
        link="/contact"
      />
      <CentralFooter />
    </main>
  );
};

export default ContactPage;
