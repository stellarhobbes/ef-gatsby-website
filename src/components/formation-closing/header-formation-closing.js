import React from "react";
import { Link } from "gatsby";
import LogoQualiopi from "../../images/logo-qualiopi.png";
import LogoCompteFormation from "../../images/logo-moncompteformation.png";

import Fade from "react-reveal/Fade";
import HeadShake from "react-reveal/HeadShake";

const HeaderFormationClosing = () => {
  return (
    <div className="relative overflow-hidden px-6 sm:px-O">
      <main className="|| mx-auto mt-40 max-w-7xl px-0 sm:mt-20 sm:pt-0 md:pt-16">
        <div className="text-center">
          <Fade top>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="font-title text-ef-blue block uppercase xl:inline">
                Formation closing <br /> (ou vente éthique)
              </span>
            </h1>
          </Fade>
          <p className="text-ef-blue mx-auto mt-3 mb-10 max-w-md text-base sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
            Créez le job de vos rêves en devenant closer et vivez
            confortablement d’une activité qui fait sens pour vous.
          </p>
          <div className="-mt-8 -mb-8 flex justify-center sm:mt-8 sm:mb-2">
            <iframe
              width="560"
              height="315"
              src="https://player.vimeo.com/video/670779482?h=9119a43fd0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              title="Nom de la Vidéo"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="max-w-7xl">
          <HeadShake appear={true} delay={1000}>
            <Link
              to="/contact"
              className="w-4/4 m-auto mt-6 mb-10 flex text-center items-center justify-center px-8 py-3 text-sm uppercase font-medium rounded-md bg-ef-blue text-white border-2 border-ef-blue || sm:w-1/3 hover:text-ef-blue hover:bg-white transition duration-500 || md:py-4 md:px-10"
            >
              Réservez votre appel avec un coach
            </Link>
          </HeadShake>
          </div>
          <h2 className="text-ef-blue mx-auto mt-8 max-w-md px-10 text-xl font-bold uppercase sm:text-lg md:mt-10 md:max-w-3xl md:text-3xl">
            Vous avez la possibilité de faire financer votre formation à 100%
            par l’Etat…
          </h2>
          <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md">
              <div
                id="double-logo"
                className="flex flex-col items-center justify-center md:flex-row"
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
      </main>
    </div>
  );
};

export default HeaderFormationClosing;
