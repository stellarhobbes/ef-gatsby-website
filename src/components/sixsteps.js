import React from "react";
import OneStepLeft from "./onestepleft";
import OneStepRight from "./onestepright";

import ArrowOne from "../images/arrow/arrow-ef-one.png";
import ArrowTwo from "../images/arrow/arrow-ef-two.png";
import ArrowThree from "../images/arrow/arrow-ef-three.png";
import ArrowFour from "../images/arrow/arrow-ef-four.png";
import ArrowFive from "../images/arrow/arrow-ef-five.png";
import ArrowSix from "../images/arrow/arrow-ef-six.png";

import IllustrationOne from "../images/illustrations/illustration-ef-01.png";
import IllustrationTwo from "../images/illustrations/illustration-ef-02.png";
import IllustrationThree from "../images/illustrations/illustration-ef-03.png";
import IllustrationFour from "../images/illustrations/illustration-ef-04.png";
import IllustrationFive from "../images/illustrations/illustration-ef-05.png";
import IllustrationSix from "../images/illustrations/illustration-ef-06.png";

const SixSteps = () => {
  return (
    <div className="py-32">
      <OneStepLeft
        illustration={IllustrationOne}
        title="Nous définissons votre projet ensemble."
        content="Et nous vous proposons la solution la plus adaptée à vos besoins avec des formations sur mesure et 100% pris en charge par le CPF."
        image={ArrowOne}
      />
      <OneStepRight
      illustration={IllustrationTwo}
        title="Vous avez une feuille de route précise."
        content="Avec toutes les étapes à suivre pour avoir une vision claire et atteindre sereinement vos différents objectifs."
        image={ArrowTwo}
      />
      <OneStepLeft
      illustration={IllustrationThree}
        title="Vous êtes guidé de A à Z."
        content="Vous n’êtes plus seul… De la création de votre activité à vos premiers clients, nous sommes à vos côtés pour construire votre nouvelle vie."
        image={ArrowThree}
      />
      <OneStepRight
      illustration={IllustrationFour}
        title="Nous vous donnons les clés de votre réussite."
        content="À la fin de votre formation, vous saurez tout faire : trouver des clients, gérer une entreprise, etc.. En bref, vous n’aurez plus besoin de personne pour réussir !"
        image={ArrowFour}
      />
      <OneStepLeft
      illustration={IllustrationFive}
        title="Vous développez des compétences qui font la différence."
        content="Et qui vous permettent de construire une activité qui fait sens pour vous tout en gagnant confortablement et durablement votre vie."
        image={ArrowFive}
      />
      <OneStepRight
      illustration={IllustrationSix}
        title="Vous devenez un entrepreneur accompli."
        content="Et vous vivez enfin la vie que vous désirez, celle dans laquelle vous êtes aligné avec ce que vous faites et vous profitez pleinement de vos proches."
        image={ArrowSix}
      />
    </div>
  );
};

export default SixSteps;
