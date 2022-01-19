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
      "Il est à Lyon mais c’est quand même plus sympa de faire votre formation à votre rythme depuis votre canap’ non ?",
  },
  {
    question: "Puis-je suivre vos formations en présentiel ?",
    answer:
      "Oui certaines de nos formations intègrent des modules en présentiel. Nous faisons des stages en immersion et des Mastermind toute l’année.",
  },
  {
    question: "Que faire s'il y a des choses que je ne comprends pas ?",
    answer:
      "Vous pouvez nous poser vos questions 7/7j 24/24h. Un membre de notre équipe vous répondra le plus rapidement possible.",
  },
  {
    question: "Combien de temps dure la formation ?",
    answer:
      "Ca dépend de vous et du temps que vous y accordez. Vous aurez accès à vie au contenu et à ses mises à jour.",
  },
  {
    question: "Quand puis-je espérer avoir des résultats ?",
    answer:
      "Certains de nos élèves ont des résultats avant même la fin de leur formations car chaque module est conçu par des entrepreneurs.",
  },
  {
    question:
      "Qui sont nos coachs / formateurs de l'Entrepreneuriat Français ?",
    answer:
      "Cette formation a été créé par Laurent Alventosa, commercial depuis 1997 et formateur depuis plus de 10 ans. Il est passionné de sciences cognitives, il est aussi coach expert et maître praticien en PNL. Tous les coachs intervenants dans cette formation sont des commerciaux de plus de 10 ans d’expériences et experts de leur métier.",
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
            Nous répondons à toutes vos questions.
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
