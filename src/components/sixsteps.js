import React from "react";
import OneStepLeft from "./onestepleft";
import OneStepRight from "./onestepright";

import BigArrowOne from "../images/gifs/big-animation/gif-ef-part01.gif";
import BigArrowTwo from "../images/gifs/big-animation/gif-ef-part02.gif";
import BigArrowThree from "../images/gifs/big-animation/gif-ef-part03.gif";
import BigArrowFour from "../images/gifs/big-animation/gif-ef-part04.gif";
import BigArrowFive from "../images/gifs/big-animation/gif-ef-part05.gif";
import BigArrowSix from "../images/gifs/big-animation/gif-ef-part06.gif";

import AnimationOne from "../images/gifs/step-01.gif";
import AnimationTwo from "../images/gifs/step-02.gif";
import AnimationThree from "../images/gifs/step-03.gif";
import AnimationFour from "../images/gifs/step-04.gif";
import AnimationFive from "../images/gifs/step-05.gif";
import AnimationSix from "../images/gifs/step-06.gif";

const SixSteps = () => {
  return (
    <div className="py-32">
      <OneStepLeft
        illustration={AnimationOne}
        title="Nous définissons votre projet ensemble."
        content="Et nous vous proposons la solution la plus adaptée à vos besoins avec des formations sur mesure et 100% pris en charge par le CPF."
        image={BigArrowOne}
      />
      <OneStepRight
      illustration={AnimationTwo}
        title="Vous avez une feuille de route précise."
        content="Avec toutes les étapes à suivre pour avoir une vision claire et atteindre sereinement vos différents objectifs."
        image={BigArrowTwo}
      />
      <OneStepLeft
      illustration={AnimationThree}
        title="Vous êtes guidé de A à Z."
        content="Vous n’êtes plus seul… De la création de votre activité à vos premiers clients, nous sommes à vos côtés pour construire votre nouvelle vie."
        image={BigArrowThree}
      />
      <OneStepRight
      illustration={AnimationFour}
        title="Nous vous donnons les clés de votre réussite."
        content="À la fin de votre formation, vous saurez tout faire : trouver des clients, gérer une entreprise, etc.. En bref, vous n’aurez plus besoin de personne pour réussir !"
        image={BigArrowFour}
      />
      <OneStepLeft
      illustration={AnimationFive}
        title="Vous développez des compétences qui font la différence."
        content="Et qui vous permettent de construire une activité qui fait sens pour vous tout en gagnant confortablement et durablement votre vie."
        image={BigArrowFive}
      />
      <OneStepRight
      illustration={AnimationSix}
        title="Vous devenez un entrepreneur accompli."
        content="Et vous vivez enfin la vie que vous désirez, celle dans laquelle vous êtes aligné avec ce que vous faites et vous profitez pleinement de vos proches."
        image={BigArrowSix}
      />
    </div>
  );
};

export default SixSteps;
