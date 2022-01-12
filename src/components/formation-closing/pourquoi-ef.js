import React from "react";
import Fade from "react-reveal/Fade";

import { CheckIcon } from "@heroicons/react/outline";

const WhyEf = () => {
  return (
    <main className="bg-ef-blue -mt-8 py-36">
      <div className="max-w-3xl mx-auto text-center pt-8 pb-0 px-4 || sm:px-6 lg:pb-0 lg:px-8">
        <Fade top>
          <h2 className="text-4xl font-extrabold uppercase font-title text-white tracking-tight pb-10 || sm:text-5xl">
            <span className="block">
              Pourquoi choisir l'Entrepreneuriat Français ?
            </span>
          </h2>
        </Fade>
        <p className="mt-3 mb-8 max-w-md mx-auto text-base text-white text-justify || sm:text-lg md:mt-5 md:text-xl md:max-w-2xl">
          Chez l’Entreprenariat Français, nous sommes convaincus que tout le
          monde peut devenir entrepreneur, que vous vouliez simplement vous
          créer un job sur mesure ou devenir un chef d’entreprise accompli.
          <br />
          <br />
          Voilà pourquoi, pour vous accompagner dans votre réussite, nous vous
          proposons des formations : <br />
          <br />
        </p>
        <div className="flex">
          <CheckIcon
            className="h-10 w-10 text-white mr-6 "
            aria-hidden="true"
          />
          <p className="mt-0 mb-8 max-w-md mx-auto text-base text-white text-justify || sm:text-lg md:mt-0 md:text-xl md:max-w-2xl">
            Avec une pédagogie adaptée à vos besoins… (nous vous apprenons les
            bases jusqu’au niveau avancée).
          </p>
        </div>
        <div className="flex">
          <CheckIcon
            className="h-10 w-10 text-white mr-6 "
            aria-hidden="true"
          />
          <p className="mt-0 mb-8 max-w-md mx-auto text-base text-white text-justify || sm:text-lg md:mt-0 md:text-xl md:max-w-2xl">
            À suivre à votre rythme… (il n’y a pas de durée précise, c’est vous
            qui décidez).
          </p>
        </div>
        <div className="flex">
          <CheckIcon
            className="h-10 w-10 text-white mr-6 "
            aria-hidden="true"
          />
          <p className="mt-0 mb-8 max-w-md mx-auto text-base text-white text-justify || sm:text-lg md:mt-0 md:text-xl md:max-w-2xl">
            Depuis chez vous… (pas besoin de vous déplacer dans un centre de
            formation).
          </p>
        </div>
        <p className="mt-3 mb-8 max-w-md mx-auto text-base text-white text-justify || sm:text-lg md:mt-5 md:text-xl md:max-w-2xl">
            Chaque coach qui vous accompagne est un entrepreneur - qui a réussi
            dans son domaine d’activité - et utilise une pédagogie bien précise
            pour que vous appreniez facilement de nouvelles compétences tout en
            prenant du plaisir.
          </p>
      </div>
    </main>
  );
};

export default WhyEf;
