import React from "react";
import Navbar from "../components/navbar";

import HeaderFormationClosing from "../components/formation-closing/header-formation-closing";
import ComparaisonFormationClosing from "../components/formation-closing/comparaison-formation-closing";
import TestimonialVideoClosing from "../components/formation-closing/testimonial-video-closing";
import DescriptionClosing from "../components/formation-closing/description-formation-closing";
import CiblesClosing from "../components/formation-closing/cibles-closing";
import StepsClosing from "../components/formation-closing/steps-closing";
import InfoClosing from "../components/formation-closing/info-closing";
import ProgramClosing from "../components/formation-closing/program-closing";
import WhyEf from "../components/formation-closing/pourquoi-ef";
import NumbersClosing from "../components/formation-closing/numbers-closing";
import FaqClosing from "../components/formation-closing/faq-closing";

import PreFooter from "../components/prefooter";
import Footer from "../components/footer";

const PageFormation = () => {
  return (
    <main>
      <Navbar />
      <HeaderFormationClosing />
      <ComparaisonFormationClosing />
      <TestimonialVideoClosing />
      <DescriptionClosing />
      <CiblesClosing />
      <StepsClosing />
      <InfoClosing />
      <ProgramClosing />
      <WhyEf />
      <NumbersClosing />
      <FaqClosing />
      <PreFooter
        subtitle="Il est temps de changer de vie"
        title="L’entreprenariat Français, votre ticket vers la liberté"
        buttonTitle="Parlez à un coach"
        link=""
      />
      <Footer />
    </main>
  );
};

export default PageFormation;
