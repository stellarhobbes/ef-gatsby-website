import React from "react";

import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

import LogoQualiopi from "../../images/logo-qualiopi.png";
import LogoCompteFormation from "../../images/logo-moncompteformation.png";
import BlueLine from "../../images/ef-line-blue.png";
import RedLine from "../../images/ef-line-red.png";

const program = [
  {
    chapter: "Introduction de la formation",
    content: "1. Présentation du formateur n/ 2. Qu'est-ce que le Closing ?",
  },
  {
    chapter:
      "Socle : Les sciences cognitives comme base de développement personnel",
    content:
      "1. Se connaître et comprendre les autres n/ 2. Développer son intelligence émotionnelle n/ 3. Reconnaître les différents types d'instincts grâce à l'ennéagramme n/ 4. Psychologie : repérer les différents types de personnalités et adapter son discours n/ 5. Linguistique : savoir communiquer efficacement pour avoir un discours impactant n/ 6. Anthropologie : connaître le fonctionnement de l’être humain n/ 7. Neuroscience : les biais cognitifs n/ 8. Systémique : les spirales dynamiques et les facteurs de motivation n/ 9. PNL : les bases de la Programmation Neuro Linguistique n/ 10. Savoir fixer des objectifs que l’on est sûr d’atteindre",
  },
  {
    chapter: "Bloc 1 : Occuper le terrain, une réelle compétence",
    content:
      "1. Créer une stratégie efficiente pour optimiser son volume d’appel n/ 2. S’auto coacher pour gérer au mieux son énergie et son mindset n/ 3. Les créneaux propices aux “Appels décrochés” n/ 4. Ne plus subir sa journée et savoir planifier ses deuxièmes entretiens de vente( follow up ) et ses tâches administratives n/ 5. Bonus : Les outils du suivi de son activité du tableau excel à Hubspot n/ 6. Bonus : La prise de rendez-vous téléphonique et le barrage de la secrétaire",
  },
  {
    chapter: "Bloc 2 : La fenêtre d’attention (Opening)",
    content:
      "1. Définition de la fenêtre d’attention n/ 2. Les 3 premières secondes, les 3 premiers mots, les trois premières respirations n/ 3. L’art de se présenter n/ 4. Comment éviter de rentrer directement en description de l’offre n/ 5. Se synchroniser avec la PNL et préparer un terrain propice à la confiance n/ 6. Amenez votre interlocuteur à parler de lui.",
  },
  {
    chapter: "Bloc 3 : Le coaching décisionnel",
    content:
      "1. Pourquoi les techniques de vente ne fonctionnent-elles jamais ? n/ 2. Maîtriser la mécanique du changement n/ 3. La magie du questionnement n/ 4. Communiquer avec l'inconscient de votre interlocuteur n/ 5. Savoir générer des émotions n/ 6. États désirés, faire vivre des expériences extraordinaires n/ 7. Le retour à la réalité et à l’état présent",
  },
  {
    chapter: "Conclure",
    content:
      "1. Pitcher avec brio son offre n/ 2. Les 3 trames de ventes les plus efficaces adaptées à chaque produits n/ 3. Le flow ou comment éviter les objections n/ 4. Traiter les objections et libérer les prospects des 3 blocages fondamentaux n/ 5. Rassurer et guider vers le succès",
  },
  {
    chapter: "Comptabilité",
    content:
      "1. Choisir sa structure juridique n/ 2. Le prévisionnel n/ 3. Le régime social des indépendants n/ 4. Lire et analyser son bilan n/ 5. Lire et analyser son compte de résultat n/ 6. Les rôles de l’expert comptable",
  },
  {
    chapter: "BONUS",
    content:
      "1. Faire des vidéos captivantes sur YouTube n/ 2. Branding : le discours de marque n/ 3. Répondre à un commentaire en public n/ 4. L’expérience client n/ 5. Talent digital : l’outil de prospection multicanal",
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
        className="|| z-10 flex justify-center sm:mt-6 md:mb-10"
      >
        <img
          className="align-item-center w-4/4 flex"
          src={RedLine}
          alt="ligne séparation rouge"
        />
      </div>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200 pb-20 ">
          <h2 className="font-title text-ef-blue pb-10 text-center text-3xl font-extrabold uppercase sm:text-4xl">
            Le programme complet de la formation sur le closing
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {program.map((program) => (
              <Disclosure as="div" key={program.chapter} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                        <h3 className="font-medium text-gray-900">
                          {program.chapter}
                        </h3>
                        <span className="ml-6 flex h-7 items-center">
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
                      <p className="text-ef-blue text-base">
                        {program.content.split("n/").map((str) => (
                          <p>{str}</p>
                        ))}
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
        className="|| z-10 flex justify-center sm:mt-6 md:mt-20"
      >
        <img
          className="align-item-center w-4/4 flex"
          src={BlueLine}
          alt="ligne séparation bleue"
        />
      </div>
    </div>
  );
};

export default ProgramClosing;
