import React from "react";
import Fade from "react-reveal/Fade";

import { CheckIcon } from "@heroicons/react/outline";

const WhyEf = () => {
  return (
    <main className="px-10 bg-ef-blue -mt-8 py-20 sm:px-0">
      <div className="|| mx-auto max-w-3xl px-4 pt-8 pb-0 text-center sm:px-6 lg:px-8 lg:pb-0">
        <Fade top>
          <h2 className="font-title || pb-10 text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">
            <span className="block">
              Pourquoi choisir l'Entrepreneuriat Français ?
            </span>
          </h2>
        </Fade>
        <p className="|| mx-auto mt-3 mb-8 max-w-md text-justify text-base text-white sm:text-lg md:mt-5 md:max-w-2xl md:text-xl">
          Chez l’Entrepreneuriat Français, nous sommes convaincus que tout le
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
            className="mr-6 h-10 w-10 text-white "
            aria-hidden="true"
          />
          <p className="|| mx-auto mt-0 mb-8 max-w-md text-justify text-base text-white sm:text-lg md:mt-0 md:max-w-2xl md:text-xl">
            Avec une pédagogie adaptée à vos besoins… (nous vous apprenons les
            bases jusqu’au niveau avancé).
          </p>
        </div>
        <div className="flex">
          <CheckIcon
            className="mr-6 h-10 w-10 text-white "
            aria-hidden="true"
          />
          <p className="|| mx-auto mt-0 mb-8 max-w-md text-justify text-base text-white sm:text-lg md:mt-0 md:max-w-2xl md:text-xl">
            À suivre à votre rythme… (il n’y a pas de durée précise, c’est vous
            qui décidez).
          </p>
        </div>
        <div className="flex">
          <CheckIcon
            className="mr-6 h-10 w-10 text-white "
            aria-hidden="true"
          />
          <p className="|| mx-auto mt-0 mb-8 max-w-md text-justify text-base text-white sm:text-lg md:mt-0 md:max-w-2xl md:text-xl">
            Depuis chez vous… (pas besoin de vous déplacer dans un centre de
            formation).
          </p>
        </div>
        <p className="|| mx-auto mt-3 mb-8 max-w-md text-justify text-base text-white sm:text-lg md:mt-5 md:max-w-2xl md:text-xl">
          Il est temps pour vous de changer de vie grâce à l’entrepreneuriat "Made in
          France".
        </p>
      </div>
    </main>
  );
};

export default WhyEf;
