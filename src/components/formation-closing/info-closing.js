import React from "react";
import { Link } from "gatsby";

import { CheckIcon } from "@heroicons/react/outline";
import DoubleArrow from "../../images/double-arrow-ef.png";
import LogoQualiopi from "../../images/logo-qualiopi.png";
import LogoCompteFormation from "../../images/logo-moncompteformation.png";

import Fade from "react-reveal/Fade";

const informations = [
  {
    id: 1,
    title:
      "47 cours enregistrés répartis sur 4 modules",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
  },
  {
    id: 2,
    title:
      "Des supports de cours",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
  },
  {
    id: 3,
    title:
      "Des études de cas",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
  },
  {
    id: 4,
    title:
      "Des modules récurrents",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
  },
  {
    id: 5,
    title:
      "À la fin de votre formation, vous n'êtes pas lâchés dans la nature !",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
  },
];

const InfoClosing = () => {
  return (
    <div className="mt-8 pb-12 || sm:mt-12 sm:pb-16 lg:mt-10 lg:pb-24">
      <div className="relative || md:mt-6 sm:mt-2">
        <div className="flex justify-center || sm:mb-2 md:mb-6">
          <img
            className="flex align-item-center w-48 hidden || sm:block"
            src={DoubleArrow}
            alt="double flèches vers le bas"
          />
        </div>
        <h2 className="text-4xl font-extrabold uppercase font-title text-ef-blue w-2/4 mx-auto mb-10 text-center tracking-tight text-gray-900 || sm:text-4xl">
            <span className="block">
              Et voilà tout ce que vous allez trouver dans la formation sur le closing.
            </span>
          </h2>
        <div className="absolute inset-0 h-3/4" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 || sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto space-y-4 || lg:max-w-3xl lg:grid lg:grid-cols-1 lg:gap-5 lg:space-y-0">
            <Fade left delay={200}>
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-1 flex flex-row justify-between px-6 pt-6 pb-8 bg-white space-y-6 || sm:p-10 sm:pt-6">
                  <ul className="space-y-4">
                    {informations.map((information) => (
                      <li key={information.id} className="flex items-start">
                        <div className="flex-shrink-0">
                          <CheckIcon
                            className="h-6 w-6 text-ef-blue"
                            aria-hidden="true"
                          />
                        </div>
                        <div>
                          <h3 className="ml-3 text-lg font-medium mb-2 text-ef-blue">
                            {information.title}
                          </h3>
                          <p className="ml-3 text-sm font-light text-ef-blue">
                            {information.content}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Fade>
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
                      src={LogoCompteFormation}
                      alt="logo entrepreneuriat français"
                    />
                  </Link>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoClosing;
