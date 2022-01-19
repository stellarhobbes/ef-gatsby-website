import React from "react";
import { Link } from "gatsby";
import LogoQualiopi from "../../images/logo-qualiopi.png";
import LogoCompteFormation from "../../images/logo-moncompteformation.png";

import Fade from "react-reveal/Fade";
import HeadShake from "react-reveal/HeadShake";

const HeaderFormationClosing = () => {
  return (
    <div className="relative overflow-hidden">
      <main className="mt-48 mx-auto max-w-7xl px-0 || md:pt-16 sm:pt-0 sm:mt-36">
        <div className="text-center">
          <Fade top>
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block font-title uppercase text-ef-blue xl:inline">
                Formation closing (ou vente éthique)
              </span>
            </h1>
          </Fade>
          <p className="mt-3 px-10 max-w-md mx-auto text-base text-ef-blue sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Créez le job de vos rêves en devenant closer et vivez
            confortablement d’une activité qui fait sens pour vous.
          </p>
          <div className="flex justify-center mt-10">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/sGOTCCVDLtQ"
              title="Nom de la Vidéo"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <h2 className="mt-8 px-10 max-w-md mx-auto text-xl font-bold uppercase text-ef-blue sm:text-lg md:mt-10 md:text-3xl md:max-w-3xl">
          Vous avez la possibilité de faire financer votre formation à 100% par l’Etat…
          </h2>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md">
              <div id="double-logo" className="flex justify-center">
                <div className="inline-flex rounded-md">
                  <Link to="/">
                    <img
                      className="h-16 w-auto"
                      src={LogoQualiopi}
                      alt="logo entrepreneuriat français"
                    />
                  </Link>
                </div>
                <div className="ml-3 inline-flex">
                  <Link to="/">
                    <img
                      className="h-16 w-auto"
                      src={LogoCompteFormation}
                      alt="logo entrepreneuriat français"
                    />
                  </Link>
                </div>
              </div>
              <HeadShake appear={true} delay={1000}>
                <Link
                  to="#"
                  className="w-3/4 m-auto mt-6 flex items-center justify-center px-8 py-3 text-sm uppercase font-medium rounded-md bg-ef-blue text-white border-2 border-ef-blue || hover:text-ef-blue hover:bg-white transition duration-500 || md:w-full md:py-4 md:px-10"
                >
                  Réservez votre formation
                </Link>
              </HeadShake>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeaderFormationClosing;