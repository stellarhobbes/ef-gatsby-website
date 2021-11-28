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
        title="Vous avez un projet, on en parle ensemble"
        content="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur"
        image={ArrowOne}
      />
      <OneStepRight
      illustration={IllustrationTwo}
        title="Vous êtes guidés de la création à l’obtention de vos premiers clients"
        content="Quisquam est qui dolorem ipsum quia dolor sit amet"
        image={ArrowTwo}
      />
      <OneStepLeft
      illustration={IllustrationThree}
        title="Vous avez un cap précis et personnalisé"
        content="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur"
        image={ArrowThree}
      />
      <OneStepRight
      illustration={IllustrationFour}
        title="Vous saurez comment trouver et signer vos premiers clients"
        content="Quisquam est qui dolorem ipsum quia dolor sit amet"
        image={ArrowFour}
      />
      <OneStepLeft
      illustration={IllustrationFive}
        title="Vous apprenez les compétences qui font la différence"
        content="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur"
        image={ArrowFive}
      />
      <OneStepRight
      illustration={IllustrationSix}
        title="Vous avez le job de vos rêves et en plus, C’est 100% pris en charge par votre CPF !"
        content="Quisquam est qui dolorem ipsum quia dolor sit amet"
        image={ArrowSix}
      />
    </div>
  );
};

export default SixSteps;
