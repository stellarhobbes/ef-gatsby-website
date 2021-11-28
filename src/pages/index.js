import * as React from "react";

import Comparaison from "../components/comparaison";
import NavbarHeader from "../components/navbar-header";
import CallToAction from "../components/calltoaction";
import Testimonial from "../components/testimonial";
import SixSteps from "../components/sixsteps";
import TestimonialCta from "../components/testimonial-cta";
import CallToActionSimple from "../components/calltoaction-simple";
import Formation from "../components/formations";

import DancingEf from "../images/ef-dancing.png";

const IndexPage = () => {
  return (
    <main class>
      <NavbarHeader />
      {/* JSX comment
      <div class="fixed z-100 bottom-5 right-5 w-full">
        <Link class="inline-flex float-right items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-ef-blue hover:bg-ef-red" to="#">
          Faire le quiz
        </Link>
      </div>
      */}
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
    </main>
  );
};

export default IndexPage;
