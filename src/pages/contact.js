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
        <html lang="fr" amp />
        <meta charSet="utf-8" />
        <link
          rel="canonical"
          href="https://lentrepreneuriatfrancais.fr/contact"
        />
        <title>Contact | L'Entrepreneuriat Français</title>
        <meta name="title" content="Blog | L'Entrepreneuriat Français" />
        <meta
          name="description"
          content="Vous souhaitez créer et développer votre entreprise ? L’entrepreneuriat français vous accompagne pas à pas pour vous lancer. Contactez-nous !"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://lentrepreneuriatfrancais.fr/contact"
        />
        <meta
          property="og:title"
          content="Contact | L'Entrepreneuriat Français"
        />
        <meta
          property="og:description"
          content="Vous souhaitez créer et développer votre entreprise ? L’entrepreneuriat français vous accompagne pas à pas pour vous lancer. Contactez-nous !"
        />
        <meta
          property="og:image"
          content="https://images.ctfassets.net/e705sr8nkyoz/6aDSO7RC19760OR4yXpwP9/d256662ebfcd4e3e02d7ded33af68d53/ef-article-closing.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://lentrepreneuriatfrancais.fr/contact"
        />
        <meta
          property="twitter:title"
          content="Contact | L'Entrepreneuriat Français"
        />
        <meta
          property="twitter:description"
          content="Vous souhaitez créer et développer votre entreprise ? L’entrepreneuriat français vous accompagne pas à pas pour vous lancer. Contactez-nous !"
        />
        <meta
          property="twitter:image"
          content="https://images.ctfassets.net/e705sr8nkyoz/6aDSO7RC19760OR4yXpwP9/d256662ebfcd4e3e02d7ded33af68d53/ef-article-closing.png"
        />
      </Helmet>
      <Navbar />
      <div className="mb-48"></div>
      <div className="mx-auto mt-40 mb-24 w-2/4 text-center">
        <h1 className="font-title text-ef-blue block text-4xl font-extrabold uppercase tracking-tight text-gray-900 sm:text-5xl md:text-6xl xl:inline">
          Formation Créer et développer votre entreprise de closing
        </h1>
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
