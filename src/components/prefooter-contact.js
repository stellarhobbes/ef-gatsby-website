import React from "react";

import BlueLine from "../images/ef-line-blue.png";
import RedLine from "../images/ef-line-red.png";
import LogoQualiopi from "../images/logo-qualiopi.png";
import LogoCompteFormation from "../images/logo-moncompteformation.png";

import Fade from "react-reveal/Fade";

const PreFooter = (props) => {
  return (
    <div className="bg-white">
      <div
        id="blueline"
        className="|| z-10 flex justify-center sm:-mt-6 md:-mt-8"
      >
        <img
          className="align-item-center w-4/4 flex"
          src={BlueLine}
          alt="ligne séparation bleue"
        />
      </div>
      <div className="|| mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:py-16 lg:px-8">
        <p className="text-ef-blue || mx-auto mt-3 mb-8 max-w-md text-base sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
          {props.subtitle}
        </p>
        <Fade top>
          <h2 className="font-title text-ef-blue || text-4xl font-extrabold uppercase tracking-tight text-gray-900 sm:text-5xl">
            <span className="block">{props.title}</span>
          </h2>
        </Fade>
        <div id="double-logo" className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md">
            <img
              className="h-16 w-auto"
              src={LogoQualiopi}
              alt="logo entrepreneuriat français"
            />
          </div>
          <div className="ml-3 inline-flex">
            <img
              className="h-16 w-auto"
              src={LogoCompteFormation}
              alt="logo entrepreneuriat français"
            />
          </div>
        </div>
      </div>
      <div
        id="redline"
        className="|| z-10 flex justify-center sm:-mt-6 md:-mt-8"
      >
        <img
          className="align-item-center w-4/4 flex"
          src={RedLine}
          alt="ligne séparation rouge"
        />
      </div>
    </div>
  );
};

export default PreFooter;
