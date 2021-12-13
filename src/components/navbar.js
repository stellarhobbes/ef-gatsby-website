import React from "react";
import { Link } from "gatsby";
import LogoEf from "../images/logo-ef.png";

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import Slide from "react-reveal/Slide";

const navigation = [
  { name: "Formations", href: "#" },
  { name: "Blog", href: "/blog" },
];

const Navbar = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="relative bg-white pt-6 pb-6 sm:pb-6">
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
                      <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ef-light-blue">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>

                <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-56">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-sm uppercase font-medium text-ef-blue px-4 hover:text-ef-light-blue"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                  <span className="inline-flex rounded-md shadow">
                    <Link
                      to="#"
                      className="transition duration-500 inline-flex items-center px-8 py-3 text-sm uppercase font-medium rounded-md bg-ef-blue text-white border-2 border-ef-blue || hover:text-ef-blue hover:bg-white transition duration-500"
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
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ef-light-blue">
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
                        className="block px-3 py-2 rounded-md text-sm uppercase font-medium text-ef-blue hover:text-ef-light-blue hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <Link
                    to="#"
                    className="block w-full px-5 py-3 uppercase text-center font-medium text-white bg-ef-blue hover:bg-ef-light-blue"
                  >
                    Faites le test !
                  </Link>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
        <Slide left delay={500}>
          <div className="relative border-b-4 border-ef-blue"></div>
        </Slide>
        <div className="relative border-b-4 border-white"></div>
        <Slide left delay={600}>
          <div className="relative border-b-4 border-ef-red"></div>
        </Slide>
      </div>
    </div>
  );
};

export default Navbar;
