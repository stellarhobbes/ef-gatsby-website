import React from "react";
import { Link } from "gatsby";
import LogoQualiopi from "../images/logo-qualiopi.png";
import LogoCompteFormation from "../images/logo-moncompteformation.png";
import MountainsAnimation from "../images/gifs/P210001_1redversion2.gif";

import Fade from "react-reveal/Fade";
import HeadShake from "react-reveal/HeadShake";

const Header = (props) => {
  return (
    <div className="relative overflow-hidden">
      <main className="mt-16 mx-auto max-w-7xl px-0 || md:pt-16 sm:pt-0 sm:mt-24">
        <div className="text-center">
          <div className="flex justify-center || sm:visible md:hidden">
            <img
              className="flex align-item-center w-4/4 mb-2 || sm:w-3/4"
              src={MountainsAnimation}
              alt="illustration montagnes entrepreuneuriat français"
            />
          </div>
          <Fade top>
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block font-title uppercase text-ef-blue xl:inline">
              {props.title}
              </span>
            </h1>
          </Fade>
          <p className="mt-3 px-10 max-w-md mx-auto text-base text-ef-blue sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          {props.subtitle}
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md">
              <HeadShake appear={true} delay={1000}>
                <Link
                  to="#"
                  className="w-3/4 m-auto flex items-center justify-center px-8 py-3 text-sm uppercase font-medium rounded-md bg-ef-blue text-white border-2 border-ef-blue || hover:text-ef-blue hover:bg-white transition duration-500 || md:w-full md:py-4 md:px-10"
                >
                  {props.buttonTitle}
                </Link>
              </HeadShake>
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
      </main>
    </div>
  );
};

export default Header;
