import React from "react";
import { Link } from "gatsby";
import LogoQualiopi from "../images/logo-qualiopi.png";
import LogoDatadock from "../images/logo-datadock.webp";

const Header = () => {
  return (
    <main className="mt-16 mx-auto max-w-7xl px-4 pt-16 sm:mt-24">
      <div className="text-center">
        <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block font-title uppercase text-ef-blue xl:inline">
            Créez le job de vos rêve.
          </span>{" "}
          <span className="block font-title uppercase text-ef-blue xl:inline">
            lancez-vous dans l'entrepreuneuriat
          </span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Avec l’Entrepreneuriat Français, obtenez tous les outils pratiques et
          les infos indispensables pour lancer votre activité rentable en moins
          de 3 semaines grâce à vos compétences métiers.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md">
            <Link
              to="#"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-sm uppercase font-medium rounded-md text-white bg-ef-blue hover:bg-indigo-600 md:py-4 md:px-10"
            >
              Contacter un coach
            </Link>
            <div id="double-logo" className="mt-8 flex justify-center">
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
                    src={LogoDatadock}
                    alt="logo entrepreneuriat français"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
