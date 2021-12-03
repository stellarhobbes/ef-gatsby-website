import React from "react";
import { Link } from "gatsby";

import BlueLine from "../images/ef-line-blue.png";
import RedLine from "../images/ef-line-red.png";
import LogoQualiopi from "../images/logo-qualiopi.png";
import LogoDatadock from "../images/logo-datadock.webp";

import Fade from "react-reveal/Fade";
import HeadShake from 'react-reveal/HeadShake';

const CallToAction = (props) => {
  return (
    <div className="bg-white">
      <div
        id="blueline"
        className="flex justify-center z-10 || md:-mt-8 sm:-mt-6"
      >
        <img
          className="flex align-item-center w-4/4"
          src={BlueLine}
          alt="ligne séparation bleue"
        />
      </div>
      <div className="max-w-7xl mx-auto text-center py-12 px-4 || sm:px-6 lg:py-16 lg:px-8">
        <Fade top>
          <h2 className="text-4xl font-extrabold uppercase font-title text-ef-blue tracking-tight text-gray-900 || sm:text-5xl">
            <span className="block">{props.title}</span>
          </h2>
        </Fade>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <HeadShake delay={1000}>
            <Link
              to="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-ef-blue hover:bg-ef-red"
            >
              {props.buttonTitle}
            </Link>
            </HeadShake>
          </div>
        </div>
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
      <div
        id="redline"
        className="flex justify-center z-10 || md:-mt-8 sm:-mt-6"
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

export default CallToAction;
