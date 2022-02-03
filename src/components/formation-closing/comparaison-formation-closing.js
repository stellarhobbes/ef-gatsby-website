import React from "react";
import { Link } from "gatsby";
import { CheckIcon } from "@heroicons/react/outline";

import Fade from "react-reveal/Fade";
import HeadShake from "react-reveal/HeadShake";

import BlueLine from "../../images/ef-line-blue.png";
import RedLine from "../../images/ef-line-red.png";

const negatives = [
  {
    title: "Le closing c’est quoi ?",
  },
];

const positives = [
  {
    title: "C’est également l’opportunité :",
  },
];

const negativeFeatures = [
  {
    id: 1,
    featureName:
      "C’est une nouvelle façon de vendre de façon éthique en utilisant uniquement un téléphone et sans bouger de chez vous.",
  },
  {
    id: 2,
    featureName:
      "Dans le closing, pas de techniques douteuses de manipulation pour pousser les gens à acheter à n’importe quoi…",
  },
  {
    id: 3,
    featureName:
      "En tant que closer, vous aidez les gens à prendre la meilleure décision pour eux, avec éthique et bienveillance.",
  },
];

const positiveFeatures = [
  {
    id: 1,
    featureName:
      "D’être libre de travailler depuis chez vous et de gérer votre emploi du temps comme vous le désirez, afin d’avoir plus de temps pour profiter de vos proches.",
  },
  {
    id: 2,
    featureName:
      "D’écouter et aider les autres à prendre la meilleure décision pour eux, sans chercher à vendre à tout prix une solution dont ils n’ont pas besoin.",
  },
  {
    id: 3,
    featureName:
      "De vivre confortablement et sereinement en apprenant un métier en pleine expansion et que les entreprises s’arrachent.",
  },
];

const ComparaisonFormation = () => {
  return (
    <div className="px-10 mt-8 pb-12 || sm:px-0 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
      <div
        id="blueline"
        className="flex justify-center z-10 || md:mb-20 sm:mt-6"
      >
        <img
          className="flex align-item-center w-4/4"
          src={BlueLine}
          alt="ligne séparation bleue"
        />
      </div>

      <div className="max-w-5xl mx-auto text-center pt-8 pb-0 px-4 || sm:px-6 lg:pb-0 lg:px-8">
        <Fade top>
          <h2 className="text-4xl font-extrabold uppercase font-title text-ef-blue tracking-tight text-gray-900 || sm:text-4xl">
            <span className="block">
              Apprenez le closing ou la vente éthique
            </span>
          </h2>
        </Fade>
        <p className="mt-3 mb-8 max-w-md mx-auto text-base text-ef-blue || sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Découvrez la formation Closing de l’Entreprenariat Français pour
          devenir closer professionnel sans aucune compétence particulière.
        </p>
      </div>

      <div className="relative || md:-mt-2 sm:mt-2">
        <div className="relative z-10 max-w-7xl mx-auto px-4 || sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto space-y-4 || lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
            {negatives.map((negative) => (
              <Fade left delay={200}>
                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="px-6 py-8 bg-white || sm:p-10 sm:pb-6">
                    <h3 className="mt-4 items-baseline justify-center text-center text-3xl font-extrabold font-title uppercase text-ef-blue">
                      {negative.title}
                    </h3>
                  </div>
                  <div className="flex-1 flex flex-row justify-between px-6 pt-6 pb-8 bg-white space-y-6 || sm:p-10 sm:pt-6">
                    <ul className="space-y-4">
                      {negativeFeatures.map((negativeFeature) => (
                        <li
                          key={negativeFeature.id}
                          className="flex items-start"
                        >
                          <div className="flex-shrink-0">
                            <CheckIcon
                              className="h-6 w-6 text-blue-ef"
                              aria-hidden="true"
                            />
                          </div>
                          <div>
                            <p className="ml-3 text-base font-normal mb-2 text-ef-blue">
                              {negativeFeature.featureName}
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
                    <h3 className="mt-4 items-baseline justify-center text-center text-3xl font-extrabold font-title uppercase text-ef-blue">
                      {positive.title}
                    </h3>
                  </div>
                  <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-white space-y-6 || sm:p-10 sm:pt-6">
                    <ul className="space-y-4">
                      {positiveFeatures.map((positiveFeature) => (
                        <li
                          key={positiveFeature.id}
                          className="flex items-start"
                        >
                          <div className="flex-shrink-0">
                            <CheckIcon
                              className="h-6 w-6 text-blue-ef"
                              aria-hidden="true"
                            />
                          </div>
                          <div>
                            <p className="ml-3 text-base font-normal mb-2 text-ef-blue">
                              {positiveFeature.featureName}
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
          <div className="hidden max-w-5xl mx-auto text-center pt-8 pb-0 px-4 || sm:block sm:px-6 lg:pb-0 lg:px-8">
            <p className="mt-3 mb-8 max-w-md mx-auto text-base text-ef-blue || sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Aujourd’hui, grâce à l’Entreprenariat Français vous pouvez
              apprendre ce métier d’avenir sans débourser un euro même si vous
              n’avez aucune compétence en vente.
            </p>
          </div>

          <HeadShake appear={true} delay={1000}>
            <Link
              to="/contact"
              className="w-3/4 m-auto mt-6 mb-10 flex text-center items-center justify-center px-8 py-3 text-sm uppercase font-medium rounded-md bg-ef-blue text-white border-2 border-ef-blue || sm:w-1/3 hover:text-ef-blue hover:bg-white transition duration-500 || md:py-4 md:px-10"
            >
              Devenez entrepreneur dès aujourd'hui
            </Link>
          </HeadShake>
        </div>
      </div>
      <div
        id="redline"
        className="flex justify-center z-10 || md:mt-20 sm:mt-6"
      >
        <img
          className="flex align-item-center w-4/4"
          src={RedLine}
          alt="ligne séparation rouge"
        />
      </div>
    </div>
  );
};

export default ComparaisonFormation;
