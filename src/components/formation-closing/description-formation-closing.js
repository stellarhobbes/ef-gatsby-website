import React from "react";
import Fade from "react-reveal/Fade";
import { CheckIcon } from "@heroicons/react/outline";

const DescriptionClosing = () => {
  return (
    <main className="bg-ef-blue py-36">
      <div className="|| mx-auto max-w-3xl px-4 pt-8 pb-0 text-center sm:px-6 lg:px-8 lg:pb-0">
        <Fade top>
          <h2 className="font-title || pb-10 text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">
            <span className="block">
              Le closing : des perspectives d’avenir infinies…
            </span>
          </h2>
        </Fade>
        <p className="|| mx-auto mt-3 mb-8 max-w-md text-justify text-base text-white sm:text-lg md:mt-5 md:max-w-2xl md:text-xl">
          Avec la digitalisation massive des entreprises, le métier de closer
          est aujourd’hui très recherché. <br />
          <br />
          Vous avez donc l’opportunité d’être précurseur d’un marché qui a de
          très beaux jours devant lui et dans lequel vous :
        </p>
        <div className="flex">
          <CheckIcon
            className="mr-6 h-10 w-10 text-white "
            aria-hidden="true"
          />
          <p className="|| mx-auto mt-0 mb-8 max-w-md text-justify text-base text-white sm:text-lg md:mt-0 md:max-w-2xl md:text-xl">
            Choisissez vos horaires et votre lieu de travail car vous pouvez
            travailler d’où vous voulez.
          </p>
        </div>
        <div className="flex">
          <CheckIcon
            className="mr-6 h-10 w-10 text-white "
            aria-hidden="true"
          />
          <p className="|| mx-auto mt-0 mb-8 max-w-md text-justify text-base text-white sm:text-lg md:mt-0 md:max-w-2xl md:text-xl">
            Gagnez très confortablement votre vie car vous maîtrisez une
            compétence très recherchée par de nombreuses entreprises.
          </p>
        </div>
        <div className="flex">
          <CheckIcon
            className="mr-6 h-10 w-10 text-white "
            aria-hidden="true"
          />
          <p className="|| mx-auto mt-0 mb-8 max-w-md text-justify text-base text-white sm:text-lg md:mt-0 md:max-w-2xl md:text-xl">
            Choisissez les clients avec qui vous voulez travailler car vous êtes
            en position de force face à la demande importante.
          </p>
        </div>
        <p className="|| mx-auto mt-3 mb-8 max-w-md text-justify text-base text-white sm:text-lg md:mt-5 md:max-w-2xl md:text-xl">
          Tout ça en respectant vos valeurs et vos besoins.
        </p>
      </div>
    </main>
  );
};

export default DescriptionClosing;
