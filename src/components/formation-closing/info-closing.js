import React from "react";
import { Link } from "gatsby";

import { CheckIcon } from "@heroicons/react/outline";
import DoubleArrow from "../../images/gifs/arrow-animation.gif";
import LogoQualiopi from "../../images/logo-qualiopi.png";
import LogoCompteFormation from "../../images/logo-moncompteformation.png";

import HeadShake from "react-reveal/HeadShake";
import Fade from "react-reveal/Fade";

const informations = [
  {
    id: 1,
    title:
      "Devenir une meilleure version de vous-même en développant des compétences qui changent des vies.",
  },
  {
    id: 2,
    title:
      "Être pleinement épanoui grâce à une activité qui fait sens pour vous et dans laquelle vous participez à rendre le monde meilleur.",
  },
  {
    id: 3,
    title:
      "Mettre votre famille à l’abri en gagnant confortablement votre vie sans dépendre de l’Etat ou d’un patron.",
  },
  {
    id: 4,
    title:
      "Atteindre la liberté géographique et financière qui vous permet de mener à bien tous vos projets.",
  },
  {
    id: 5,
    title:
      "Créer une vie sur mesure dans laquelle vous avez le temps de profiter de vos proches et de voir grandir vos enfants.",
  },
];

const InfoClosing = () => {
  return (
    <div className="mt-8 px-6 pb-12 sm:mt-12 sm:px-0 sm:pb-16 lg:mt-10 lg:pb-24">
      <div className="|| relative sm:mt-2 md:mt-6">
        <div className="|| flex justify-center sm:mb-2 md:mb-6">
          <img
            className="align-item-center || flex hidden w-48 sm:block"
            src={DoubleArrow}
            alt="double flèches vers le bas"
          />
        </div>
        <h2 className="font-title text-ef-blue || w-4/4 mx-auto mb-10 text-center text-4xl font-extrabold uppercase tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">
            À la fin de votre formation, vous aurez toutes les cartes en main
            pour …
          </span>
        </h2>
        <div className="absolute inset-0 h-3/4" />
        <div className="|| relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="|| mx-auto max-w-md space-y-4 lg:grid lg:max-w-3xl lg:grid-cols-1 lg:gap-5 lg:space-y-0">
            <Fade left delay={200}>
              <div className="mb-10 flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="|| flex flex-1 flex-row justify-between space-y-6 bg-white px-6 pt-6 pb-8 sm:p-10 sm:pt-6">
                  <ul className="space-y-4">
                    {informations.map((information) => (
                      <li key={information.id} className="flex items-start">
                        <div className="flex-shrink-0">
                          <CheckIcon
                            className="text-ef-blue h-6 w-6"
                            aria-hidden="true"
                          />
                        </div>
                        <div>
                          <h3 className="text-ef-blue ml-3 mb-2 text-base font-normal font-medium">
                            {information.title}
                          </h3>
                          <p className="text-ef-blue ml-3 text-sm font-light">
                            {information.content}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Fade>
            <div
              id="double-logo"
              className="flex justify-center flex-col items-center md:flex-row"
            >
              <div className="inline-flex rounded-md">
                <img
                  className="h-16"
                  src={LogoQualiopi}
                  alt="logo entrepreneuriat français"
                />
              </div>
              <div className="ml-3 inline-flex">
                <img
                  className="h-16"
                  src={LogoCompteFormation}
                  alt="logo entrepreneuriat français"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="button" className="mt-8 flex justify-center">
        <div className="inline-flex rounded-md shadow">
          <HeadShake delay={1000}>
            <Link
              to="/contact"
              className="bg-ef-blue border-ef-blue || hover:text-ef-blue inline-flex items-center justify-center rounded-md border-2 px-5 py-3 text-sm font-medium uppercase text-white transition duration-500 hover:bg-white"
            >
              Donnez moi un accès !
            </Link>
          </HeadShake>
        </div>
      </div>
    </div>
  );
};

export default InfoClosing;
