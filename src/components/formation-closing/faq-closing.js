import React from "react";
import { Link } from "gatsby";

import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

import RedLine from "../../images/ef-line-red.png";

import HeadShake from "react-reveal/HeadShake";

const faq = [
  {
    question: "Où est situé votre centre de formation ?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Puis-je suivre vos formations en présentiel ?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Que faire s'il y a des choses que je ne comprends pas ?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Combien de temps dure la formation ?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Quand puis-je espérer avoir des résultats ?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question:
      "Qui sont nos coachs / formateurs de l'Entrepreneuriat Français ?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const FaqClosing = () => {
  return (
    <div className="bg-white pb-20">
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
            Le programme complet de la formation sur le closing
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faq.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <h3 className="font-medium text-gray-900">
                          {faq.question}
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
                      <p className="text-base text-ef-blue">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
        <div id="button" className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <HeadShake delay={1000}>
              <Link
                to="#"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-md bg-ef-blue text-white border-2 border-ef-blue || hover:text-ef-blue hover:bg-white transition duration-500"
              >
                Parler avec un coach
              </Link>
            </HeadShake>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqClosing;
