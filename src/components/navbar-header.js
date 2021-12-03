import React from "react";
import { Link } from "gatsby";
import LogoEf from "../images/logo-ef.png";
import LogoQualiopi from "../images/logo-qualiopi.png";
import LogoDatadock from "../images/logo-datadock.webp";
import BackgroundMountains from "../images/mountain-ef.png";

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import Fade from 'react-reveal/Fade';
import HeadShake from 'react-reveal/HeadShake';

const navigation = [
  { name: "Se lancer", href: "#" },
  { name: "Nos formations", href: "#" },
  { name: "À propos", href: "/blog" },
  { name: "Nos clients", href: "/blog" },
];

const NavbarHeader = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="relative pt-6 pb-6 sm:pb-6">
        <Popover>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <nav
              className="relative flex items-center justify-between sm:h-10 md:justify-center"
              aria-label="Global"
            >
              <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <Link to="/">
                    <img
                      className="h-16 w-auto"
                      src={LogoEf}
                      alt="logo entrepreneuriat français"
                    />
                  </Link>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="hidden ml-20 md:flex md:space-x-10">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-sm uppercase font-medium text-ef-blue hover:text-indigo-600"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                <span className="inline-flex rounded-md shadow">
                  <Link
                    to="#"
                    className="transition duration-500 inline-flex items-center px-8 py-3 text-sm uppercase font-medium rounded-md text-white bg-ef-blue hover:bg-ef-red"
                  >
                    Faites le test !
                  </Link>
                </span>
              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-50 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      className="h-16 w-auto"
                      src={LogoEf}
                      alt="logo entrepreneuriat français"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-3 py-2 rounded-md text-sm uppercase font-medium text-ef-blue hover:text-indigo-600 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <Link
                  to="#"
                  className="block w-full px-5 py-3 uppercase text-center font-medium text-white bg-ef-blue hover:bg-indigo-600"
                >
                  Faites le test !
                </Link>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
      <div className="relative border-b-4 border-ef-blue"></div>
      <div className="relative border-b-4 border-white"></div>
      <div className="relative border-b-4 border-ef-red"></div>

      <main className="mt-16 mx-auto max-w-7xl px-0 || md:pt-16 sm:pt-0 sm:mt-24">
        <div className="text-center">
        <div className="flex justify-center || sm:visible md:hidden">
          <img
            className="flex align-item-center w-4/4 mb-2 || sm:w-3/4"
            src={BackgroundMountains}
            alt="illustration montagnes entrepreuneuriat français"
          />
        </div>
          <Fade top>
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block font-title uppercase text-ef-blue xl:inline">
              Créez le job de vos rêve.
            </span>{" "}
            <span className="block font-title uppercase text-ef-blue xl:inline">
              lancez-vous dans l'entrepreuneuriat
            </span>
            </h1>
          </Fade>
          <p className="mt-3 px-10 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Avec l’Entrepreneuriat Français, obtenez tous les outils pratiques
            et les infos indispensables pour lancer votre activité rentable en
            moins de 3 semaines grâce à vos compétences métiers.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md">
              <HeadShake delay={1000}>
              <Link
                to="#"
                className="w-3/4 m-auto flex items-center justify-center px-8 py-3 border border-transparent text-sm uppercase font-medium rounded-md text-white bg-ef-blue hover:bg-ef-red md:w-full md:py-4 md:px-10"
              >
                Contacter un coach
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
    </div>
  );
};

export default NavbarHeader;
