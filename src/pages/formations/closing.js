import React from "react";
import { Helmet } from "react-helmet";

import Navbar from "../../components/navbar";
import PreFooter from "../../components/prefooter";
import CentralFooter from "../../components/footer-central";

import HeaderClosing from "../../components/formation-closing/header-formation-closing";
import ComparaisonClosing from "../../components/formation-closing/comparaison-formation-closing";
import VideoTestimonialClosing from "../../components/formation-closing/testimonial-video-closing";
import DescriptionClosing from "../../components/formation-closing/description-formation-closing";
import InfoClosing from "../../components/formation-closing/info-closing";
import TargetClosing from "../../components/formation-closing/cibles-closing";
import StepsClosing from "../../components/formation-closing/steps-closing";
import ProgramClosing from "../../components/formation-closing/program-closing";
import PourquoiEf from "../../components/formation-closing/pourquoi-ef";
import NumbersClosing from "../../components/formation-closing/numbers-closing";
import FAQClosing from "../../components/formation-closing/faq-closing";

const ClosingPage = () => {
  if (typeof window !== "undefined") {
    if (window.fbq != null) {
      window.fbq("track", "PageView");
    }
  }
  return (
    <body>
      <Helmet>
        <html lang="fr" amp />
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://lentrepreneuriatfrancais.fr/formations/closing" />
        <title>Formation closing : votre ticket pour la liberté</title>
        <meta
          name="title"
          content="Formation closing : votre ticket pour la liberté"
        />
        <meta
          name="description"
          content="Vous souhaitez être un précurseur d'un marché qui a de très beaux jours devant lui ? Découvrez le closing ou la vente éthique."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://lentrepreneuriatfrancais.fr/formations/closing"
        />
        <meta
          property="og:title"
          content="Formation closing : votre ticket pour la liberté"
        />
        <meta
          property="og:description"
          content="Vous souhaitez être un précurseur d'un marché qui a de très beaux jours devant lui ? Découvrez le closing ou la vente éthique."
        />
        <meta
          property="og:image"
          content="https://images.ctfassets.net/e705sr8nkyoz/6aDSO7RC19760OR4yXpwP9/d256662ebfcd4e3e02d7ded33af68d53/ef-article-closing.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://lentrepreneuriatfrancais.fr/formations/closing"
        />
        <meta
          property="twitter:title"
          content="Formation closing : votre ticket pour la liberté"
        />
        <meta
          property="twitter:description"
          content="Vous souhaitez être un précurseur d'un marché qui a de très beaux jours devant lui ? Découvrez le closing ou la vente éthique."
        />
        <meta
          property="twitter:image"
          content="https://images.ctfassets.net/e705sr8nkyoz/6aDSO7RC19760OR4yXpwP9/d256662ebfcd4e3e02d7ded33af68d53/ef-article-closing.png"
        />
      </Helmet>
      <Navbar />
      <HeaderClosing />
      <ComparaisonClosing />
      <VideoTestimonialClosing />
      <DescriptionClosing />
      <TargetClosing />
      <StepsClosing />
      <InfoClosing />
      <ProgramClosing />
      <PourquoiEf />
      <NumbersClosing />
      <FAQClosing />
      <PreFooter
        subtitle="Il est temps de changer de vie"
        title="L’entrepreneuriat Français, votre ticket vers la liberté"
        buttonTitle="Réservez votre appel avec un coach"
        link="/contact"
      />
      <CentralFooter />
    </body>
  );
};

export default ClosingPage;
