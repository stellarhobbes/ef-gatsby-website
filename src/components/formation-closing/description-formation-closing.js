import React from "react";
import Fade from "react-reveal/Fade";
import { CheckIcon } from "@heroicons/react/outline";

const DescriptionClosing = () => {
  return (
    <main className="bg-ef-blue py-36">
      <div className="max-w-3xl mx-auto text-center pt-8 pb-0 px-4 || sm:px-6 lg:pb-0 lg:px-8">
        <Fade top>
          <h2 className="text-4xl font-extrabold uppercase font-title text-white tracking-tight pb-10 || sm:text-5xl">
            <span className="block">
              Le closing : des perspectives d’avenir infinies…
            </span>
          </h2>
        </Fade>
        <p className="mt-3 mb-8 max-w-md mx-auto text-base text-white text-justify || sm:text-lg md:mt-5 md:text-xl md:max-w-2xl">
          Le closing n’en est qu’au début de son ascension. <br />
          <br />
          En effet, d’après le journaldunet.com, 95% des entreprises françaises
          déclarent qu’elles continueront à investir dans la transformation
          digitale en 2021. <br />
          <br />
          Et qui dit digitalisation dit développement du closing. Vous avez donc
          l’opportunité d’être précurseur d’un marché qui a de très beaux jours
          devant lui. <br />
          <br />
          Parce que tant qu’il y aura des entreprises, il y aura besoin de
          closers, peu importe leur domaine d’activité. Si vous ajoutez à cela
          la pénurie de closers dans le marché, c’est clairement le meilleur
          moment pour se lancer. <br />
          <br />
          En choisissant le closing, c’est la garantie pour vous d’avoir une
          activité dans laquelle vous : 
        </p>
        <div className="flex">
          <CheckIcon
            className="h-10 w-10 text-white mr-6 "
            aria-hidden="true"
          />
          <p className="mt-0 mb-8 max-w-md mx-auto text-base text-white text-justify || sm:text-lg md:mt-0 md:text-xl md:max-w-2xl">
            Choisissez vos horaires et votre lieu de travail car vous pouvez
            travailler d’où vous voulez.
          </p>
        </div>
        <div className="flex">
          <CheckIcon
            className="h-10 w-10 text-white mr-6 "
            aria-hidden="true"
          />
          <p className="mt-0 mb-8 max-w-md mx-auto text-base text-white text-justify || sm:text-lg md:mt-0 md:text-xl md:max-w-2xl">
            Gagnez très confortablement votre vie car vous maîtrisez une
            compétence très recherchée par de nombreuses entreprises.
          </p>
        </div>
        <div className="flex">
          <CheckIcon
            className="h-10 w-10 text-white mr-6 "
            aria-hidden="true"
          />
          <p className="mt-0 mb-8 max-w-md mx-auto text-base text-white text-justify || sm:text-lg md:mt-0 md:text-xl md:max-w-2xl">
            Choisissez les clients avec qui vous voulez travailler car vous êtes
            en position de force face à la demande importante.
          </p>
        </div>
        <p className="mt-3 mb-8 max-w-md mx-auto text-base text-white text-justify || sm:text-lg md:mt-5 md:text-xl md:max-w-2xl">
          Tout ça en respectant vos valeurs et vos besoins.
        </p>
      </div>
    </main>
  );
};

export default DescriptionClosing;
