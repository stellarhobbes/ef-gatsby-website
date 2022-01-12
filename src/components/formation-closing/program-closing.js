import React from "react";
import { Link } from "gatsby";

import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

import LogoQualiopi from "../../images/logo-qualiopi.png";
import LogoCompteFormation from "../../images/logo-moncompteformation.png";
import BlueLine from "../../images/ef-line-blue.png";
import RedLine from "../../images/ef-line-red.png";

import HeadShake from "react-reveal/HeadShake";

const program = [
  {
    chapter: "Introduction de la formation",
    content:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    chapter: "Module 1 : Dolor sit amet consectetur adipisicing elit.",
    content:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    chapter: "Module 2 : Dolor sit amet consectetur adipisicing elit.",
    content:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    chapter: "Module 3 : Dolor sit amet consectetur adipisicing elit.",
    content:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    chapter: "Module 4 : Dolor sit amet consectetur adipisicing elit.",
    content:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProgramClosing = () => {
  return (
    <div className="bg-white">
      <div
        id="blueline"
        className="flex justify-center z-10 || md:mb-10 sm:mt-6"
      >
        <img
          className="flex align-item-center w-4/4"
          src={RedLine}
          alt="ligne séparation rouge"
        />
      </div>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-6 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto divide-y-2 divide-gray-200 pb-20 ">
          <h2 className="text-center text-3xl font-extrabold font-title pb-10 uppercase text-ef-blue sm:text-4xl">
            Nous répondons à toutes vos questions.
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {program.map((program) => (
              <Disclosure as="div" key={program.chapter} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <h3 className="font-medium text-gray-900">
                          {program.chapter}
                        </h3>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "h-6 w-6 transform"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-ef-blue">
                        {program.content}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
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
                src={LogoCompteFormation}
                alt="logo entrepreneuriat français"
              />
            </Link>
          </div>
        </div>
        <div id="button" className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <HeadShake delay={1000}>
              <Link
                to="#"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-md bg-ef-blue text-white border-2 border-ef-blue || hover:text-ef-blue hover:bg-white transition duration-500"
              >
                Donnez moi un accès !
              </Link>
            </HeadShake>
          </div>
        </div>
      </div>
      <div
        id="redline"
        className="flex justify-center z-10 || md:mt-20 sm:mt-6"
      >
        <img
          className="flex align-item-center w-4/4"
          src={BlueLine}
          alt="ligne séparation bleue"
        />
      </div>
    </div>
  );
};

export default ProgramClosing;
