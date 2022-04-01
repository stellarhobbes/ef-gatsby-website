import * as React from "react";
import { Helmet } from "react-helmet";

// list of components
import Comparaison from "../components/comparaison";
import Navbar from "../components/navbar";
import Header from "../components/header";
import CallToAction from "../components/calltoaction";
import Testimonial from "../components/testimonial";
import SixSteps from "../components/sixsteps";
import TestimonialCta from "../components/testimonial-cta";
import CallToActionSimple from "../components/calltoaction-simple";
import Video from "../components/video";
import PreFooter from "../components/prefooter";

// list of assets, images ...
import DancingEf from "../images/ef-dancing.png";
import CentralFooter from "../components/footer-central";

const IndexPage = () => {
  if (typeof window !== "undefined") {
    if (window.fbq != null) {
      window.fbq("track", "PageView");
    }
  }
  return (
    <main className="pt-28">
      <Helmet>
        <html lang="fr" amp />
        <meta charSet="utf-8" />
        <link
          rel="canonical"
          href="https://lentrepreneuriatfrancais.fr"
        />
        <title>L'Entrepreneuriat Français</title>
        <meta name="title" content="L'Entrepreneuriat Français" />
        <meta
          name="description"
          content="Grâce aux formations de l’Entrepreneuriat Français, développez vos compétences pour lancer une activité rentable et qui fait sens pour vous."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://lentrepreneuriatfrancais.fr"
        />
        <meta
          property="og:title"
          content="L'Entrepreneuriat Français"
        />
        <meta
          property="og:description"
          content="Grâce aux formations de l’Entrepreneuriat Français, développez vos compétences pour lancer une activité rentable et qui fait sens pour vous."
        />
        <meta
          property="og:image"
          content="https://images.ctfassets.net/e705sr8nkyoz/6aDSO7RC19760OR4yXpwP9/d256662ebfcd4e3e02d7ded33af68d53/ef-article-closing.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://lentrepreneuriatfrancais.fr"
        />
        <meta
          property="twitter:title"
          content="L'Entrepreneuriat Français"
        />
        <meta
          property="twitter:description"
          content="Grâce aux formations de l’Entrepreneuriat Français, développez vos compétences pour lancer une activité rentable et qui fait sens pour vous."
        />
        <meta
          property="twitter:image"
          content="https://images.ctfassets.net/e705sr8nkyoz/6aDSO7RC19760OR4yXpwP9/d256662ebfcd4e3e02d7ded33af68d53/ef-article-closing.png"
        />
      </Helmet>
      <Navbar />
      <Header
        title="Créez-vous une vie sur-mesure en devenant entrepreneur"
        subtitle="Grâce aux formations de l’Entrepreneuriat Français, développez vos compétences pour lancer une activité rentable - et qui fait sens pour vous - à votre rythme."
        sentence=""
        buttonTitle="Je veux entrependre et changer de vie"
      />
      <Comparaison />
      <div className="|| z-10 flex justify-center sm:mt-2 md:-mt-52">
        <img
          className="align-item-center w-4/4 || -mb-3 flex sm:-mb-0 sm:w-3/4"
          src={DancingEf}
          alt="entrepreuneurs dansants"
        />
      </div>
      <CallToAction
        title="Alors l’entrepreneuriat est fait pour vous !"
        link=""
        buttonTitle="Quel entrepreneur se cache en vous ?"
      />
      <Testimonial />
      <SixSteps />
      <TestimonialCta />
      <CallToActionSimple
        title="Retrouvez l’excellence à la française dans des formations prise en charge à 100% par votre CPF"
        link=""
        subtitle="Faites le bon choix pour vous et vos proches :"
        buttonTitle="Trouvez votre formation"
      />
      <Video />
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

export default IndexPage;
