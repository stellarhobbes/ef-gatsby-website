import React from "react";
import { CheckIcon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/outline";
import MountainsAnimation from "../images/gifs/P210001_1redversion2.gif";

import Fade from "react-reveal/Fade";

const negatives = [
  {
    title: "Si vous en avez assez de :",
  },
];

const positives = [
  {
    title: "Et que vous voulez…",
  },
];

const negativeFeatures = [
  {
    id: 1,
    featureName:
      "De vous lever chaque matin pour faire un job que vous n’aimez pas.",
    featureDescription:
      "Et subir une routine métro-boulot-dodo et un manque de reconnaissance qui vous empêche de vous épanouir pleinement.",
  },
  {
    id: 2,
    featureName: "Être angoissé chaque fin de mois en regardant votre compte",
    featureDescription:
      "Et de vous serrer la ceinture pour payer vos factures, en ayant la frustration de ne pas pouvoir faire plaisir à vos proches.",
  },
  {
    id: 3,
    featureName: "Travailler toute l’année pour avoir 5 semaines de congés.",
    featureDescription:
      "Et être constamment stressé face à une charge de travail toujours plus importante et des horaires qui vous empêchent de voir grandir vos enfants.",
  },
];

const positiveFeatures = [
  {
    id: 1,
    featureName:
      "Être libre de faire ce que vous désirez",
    featureDescription:
      "Imaginez… Plus besoin de courir pour aller au boulot ni de demander l’autorisation à votre patron pour partir en vacances. C’est vous qui décidez.",
  },
  {
    id: 2,
    featureName: "Donner du sens à votre vie",
    featureDescription:
      "Entrepreneur, c’est avoir la possibilité de vous créer une activité sur mesure, avec laquelle vous êtes aligné(e), tout en ayant le temps de profiter de vos proches.",
  },
  {
    id: 3,
    featureName: "Construire un futur meilleur pour vous et votre famille",
    featureDescription:
      "Fini de dépendre d’un patron ou de l’Etat pour gagner votre vie, vous avez l’opportunité de mettre votre à famille à l’abri en ne comptant sur personne.",
  },
];

const Comparaison = () => {
  return (
    <div className="mt-8 pb-12 || sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
      <div className="relative || md:-mt-28 sm:mt-2">
        <div className="flex justify-center || sm:mb-2 md:-mb-60">
          <img
            className="flex align-item-center w-3/4 hidden || sm:block"
            src={MountainsAnimation}
            alt="illustration montagnes entrepreuneuriat français"
          />
        </div>
        <div className="absolute inset-0 h-3/4" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 || sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto space-y-4 || lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
            {negatives.map((negative) => (
              <Fade left delay={200}>
                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="px-6 py-8 bg-white || sm:p-10 sm:pb-6">
                    <div className="mt-4 flex items-baseline text-3xl font-extrabold font-title uppercase text-ef-blue">
                      {negative.title}
                    </div>
                  </div>
                  <div className="flex-1 flex flex-row justify-between px-6 pt-6 pb-8 bg-white space-y-6 || sm:p-10 sm:pt-6">
                    <ul className="space-y-4">
                      {negativeFeatures.map((negativeFeature) => (
                        <li
                          key={negativeFeature.id}
                          className="flex items-start"
                        >
                          <div className="flex-shrink-0">
                            <XIcon
                              className="h-6 w-6 text-ef-red"
                              aria-hidden="true"
                            />
                          </div>
                          <div>
                            <p className="ml-3 text-lg font-medium mb-2 text-ef-blue">
                              {negativeFeature.featureName}
                            </p>
                            <p className="ml-3 text-sm font-light text-ef-blue">
                              {negativeFeature.featureDescription}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Fade>
            ))}

            {positives.map((positive) => (
              <Fade right delay={200}>
                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="px-6 py-8 bg-white || sm:p-10 sm:pb-6">
                    <div className="mt-4 flex items-baseline text-3xl font-extrabold font-title uppercase text-ef-blue">
                      {positive.title}
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-white space-y-6 || sm:p-10 sm:pt-6">
                    <ul className="space-y-4">
                      {positiveFeatures.map((positiveFeature) => (
                        <li key={positiveFeature.id} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon
                              className="h-6 w-6 text-green-500"
                              aria-hidden="true"
                            />
                          </div>
                          <div>
                            <p className="ml-3 text-lg font-medium mb-2 text-ef-blue">
                              {positiveFeature.featureName}
                            </p>
                            <p className="ml-3 text-sm font-light text-ef-blue">
                              {positiveFeature.featureDescription}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparaison;
