import React from "react";

import Navbar from "../components/navbar";
import PreFooter from "../components/prefooter";
import CentralFooter from "../components/footer-central";

import HeaderClosing from "../components/formation-closing/header-formation-closing";
import ComparaisonClosing from "../components/formation-closing/comparaison-formation-closing";
import VideoTestimonialClosing from "../components/formation-closing/testimonial-video-closing";
import DescriptionClosing from "../components/formation-closing/description-formation-closing"
import InfoClosing from "../components/formation-closing/info-closing";
import TargetClosing from "../components/formation-closing/cibles-closing";
import StepsClosing from "../components/formation-closing/steps-closing"
import ProgramClosing from "../components/formation-closing/program-closing"
import PourquoiEf from "../components/formation-closing/pourquoi-ef";
import NumbersClosing from "../components/formation-closing/numbers-closing"
import FAQClosing from "../components/formation-closing/faq-closing"

const ClosingPage = () => {
  return (
    <body>
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
        title="L’entreprenariat Français, votre ticket vers la liberté"
        buttonTitle="Réservez votre appel avec un coach"
        link="/contact"
      />
      <CentralFooter />
    </body>
  );
};

export default ClosingPage;
