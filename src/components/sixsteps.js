import React from "react";
import OneStepLeft from "./onestepleft";
import OneStepRight from "./onestepright";

import ArrowOne from "../images/arrow/arrow-ef-one.png";
import ArrowTwo from "../images/arrow/arrow-ef-two.png";
import ArrowThree from "../images/arrow/arrow-ef-three.png";
import ArrowFour from "../images/arrow/arrow-ef-four.png";
import ArrowFive from "../images/arrow/arrow-ef-five.png";
import ArrowSix from "../images/arrow/arrow-ef-six.png";

import AnimationOne from "../images/gifs/step1-animation.gif";
import AnimationTwo from "../images/gifs/step2-animation.gif";
import AnimationThree from "../images/gifs/step3-animation.gif";
import AnimationFour from "../images/gifs/step4-animation.gif";
import AnimationFive from "../images/gifs/step5-animation.gif";
import AnimationSix from "../images/gifs/step6-animation.gif";

const SixSteps = () => {
  return (
    <div className="py-32">
      <OneStepLeft
        illustration={AnimationOne}
        title="Nous définissons votre projet ensemble."
        content="Et nous vous proposons la solution la plus adaptée à vos besoins avec des formations sur mesure et 100% pris en charge par le CPF."
        image={ArrowOne}
      />
      <OneStepRight
      illustration={AnimationTwo}
        title="Vous avez une feuille de route précise."
        content="Avec toutes les étapes à suivre pour avoir une vision claire et atteindre sereinement vos différents objectifs."
        image={ArrowTwo}
      />
      <OneStepLeft
      illustration={AnimationThree}
        title="Vous êtes guidé de A à Z."
        content="Vous n’êtes plus seul… De la création de votre activité à vos premiers clients, nous sommes à vos côtés pour construire votre nouvelle vie."
        image={ArrowThree}
      />
      <OneStepRight
      illustration={AnimationFour}
        title="Nous vous donnons les clés de votre réussite."
        content="À la fin de votre formation, vous saurez tout faire : trouver des clients, gérer une entreprise, etc.. En bref, vous n’aurez plus besoin de personne pour réussir !"
        image={ArrowFour}
      />
      <OneStepLeft
      illustration={AnimationFive}
        title="Vous développez des compétences qui font la différence."
        content="Et qui vous permettent de construire une activité qui fait sens pour vous tout en gagnant confortablement et durablement votre vie."
        image={ArrowFive}
      />
      <OneStepRight
      illustration={AnimationSix}
        title="Vous devenez un entrepreneur accompli."
        content="Et vous vivez enfin la vie que vous désirez, celle dans laquelle vous êtes aligné avec ce que vous faites et vous profitez pleinement de vos proches."
        image={ArrowSix}
      />
    </div>
  );
};

export default SixSteps;
