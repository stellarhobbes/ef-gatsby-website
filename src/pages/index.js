import * as React from "react";
import { Helmet } from "react-helmet"

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
  return (
    <main className="pt-28">
       <Helmet>
          <meta charSet="utf-8" />
          <title>L'Entrepreneuriat Français</title>
        </Helmet>
      <Navbar />
      <Header 
        title="Créez-vous une vie sur-mesure en devenant entrepreneur"
        subtitle="Grâce aux formations de l’Entrepreneuriat Français, développez vos compétences pour lancer une activité rentable - et qui fait sens pour vous - à votre rythme."
        sentence=""
        buttonTitle="Je veux entrependre et changer de vie"
      />
      <Comparaison />
      <div className="flex justify-center z-10 || md:-mt-52 sm:mt-2">
        <img
          className="flex align-item-center w-4/4 -mb-3 || sm:w-3/4 sm:-mb-0"
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
