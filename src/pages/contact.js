import React from "react";
import { Helmet } from "react-helmet";

import RedLine from "../images/ef-line-red.png";
import LogoQualiopi from "../images/logo-qualiopi.png";
import LogoCompteFormation from "../images/logo-moncompteformation.png";
import HubspotContactForm from "../components/hubspot";

import Navbar from "../components/navbar";
import CentralFooter from "../components/footer-central";

const ContactPage = () => {
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
      <div className="w-2/4 mx-auto text-center mt-40 mb-24">
        <h1 className="text-4xl tracking-tight block font-title uppercase text-ef-blue xl:inline font-extrabold text-gray-900 sm:text-5xl md:text-6xl">Formation Créer et développer votre entreprise de closing</h1>
      </div>
      <HubspotContactForm />
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
