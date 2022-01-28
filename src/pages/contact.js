import React, { useEffect } from "react";

import Navbar from "../components/navbar";
import PreFooter from "../components/prefooter";
import Footer from "../components/footer";

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
        link=""
      />
      <Footer />
    </main>
  );
};

export default ContactPage;
