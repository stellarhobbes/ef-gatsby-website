import * as React from "react";

// list of components
import Comparaison from "../components/comparaison";
import NavbarHeader from "../components/navbar-header";
import CallToAction from "../components/calltoaction";
import Testimonial from "../components/testimonial";
import SixSteps from "../components/sixsteps";
import TestimonialCta from "../components/testimonial-cta";
import CallToActionSimple from "../components/calltoaction-simple";
import Formation from "../components/formations";
import Video from "../components/video";
import PreFooter from "../components/prefooter";

// list of assets, images ...
import DancingEf from "../images/ef-dancing.png";
import Footer from "../components/footer";

const IndexPage = () => {
  return (
    <main class>
      <NavbarHeader />
      <Comparaison className="z-1" />
      <div className="flex justify-center z-10 || md:-mt-52 sm:mt-2">
        <img
          className="flex align-item-center w-4/4 -mb-3 || sm:w-3/4 sm:-mb-0"
          src={DancingEf}
          alt="entrepreuneurs dansants"
        />
      </div>
      <CallToAction
        title="Alors, vous êtes né(e) pour entreprendre !"
        link=""
        buttonTitle="Je fais le test"
      />
      <Testimonial />
      <SixSteps />
      <TestimonialCta />
      <CallToActionSimple
        title="Les formations CPF de l'entrepreuneuriat Français"
        link=""
        subtitle="Voici ce qui va vous permettre de décoller"
        buttonTitle="Parler à un coach"
      />
      <Formation />
      <Video />
      <PreFooter
        subtitle="Il est temps de changer de vie"
        title="Entreprenez et rejoignez l'excellence à la française"
        buttonTitle="Faire mes premiers pas"
        link=""
      />
      <Footer />
    </main>
  );
};

export default IndexPage;
