import React from "react";
import { Link } from "gatsby";

import Fade from "react-reveal/Fade";

const formations = [
  {
    title: "Créer son agence de communication",
    description:
      "Une formation pour apprendre à ne plus être un baltringue et enfin faire quelque chose de sa vie …",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    url: "",
  },
  {
    title: "Créer mon activité d’Expert comptable",
    description:
      "Une formation pour apprendre à ne plus être un baltringue et enfin faire quelque chose de sa vie …",
    imageUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
    url: "",
  },
  {
    title: "Ouvrir mon salon de coiffure",
    description:
      "Une formation pour apprendre à ne plus être un baltringue et enfin faire quelque chose de sa vie …",
    imageUrl:
      "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1871&q=80",
    url: "",
  },
  {
    title: "Créer mon activité de plaquiste",
    description:
      "Une formation pour apprendre à ne plus être un baltringue et enfin faire quelque chose de sa vie …",
    imageUrl:
      "https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
    url: "",
  },
  {
    title: "Créer mon entreprise import / export",
    description:
      "Une formation pour apprendre à ne plus être un baltringue et enfin faire quelque chose de sa vie …",
    imageUrl:
      "https://images.unsplash.com/photo-1491336477066-31156b5e4f35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
    url: "",
  },
  {
    title: "Ouvrir mon atelier de couture",
    description:
      "Une formation pour apprendre à ne plus être un baltringue et enfin faire quelque chose de sa vie …",
    imageUrl:
      "https://images.unsplash.com/photo-1524601500432-1e1a4c71d692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    url: "",
  },
];

const Formation = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl || sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <Fade top>
          <h2 className="text-4xl w-3/4 m-auto font-extrabold text-center uppercase font-title text-ef-blue tracking-tight text-gray-900 mb-20 || sm:text-4xl">
            <span className="block">
              Retrouvez l’excellence à la française dans la formation qui va
              vous <span className="underline">propulser</span>.
            </span>
          </h2>
          </Fade>
          <ul className="space-y-12 || sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
            {formations.map((formation) => (
              <li key={formation.name}>
                <div className="space-y-4">
                  <div className="aspect-w-3 aspect-h-2">
                    <img
                      className="object-cover shadow-lg rounded-lg"
                      src={formation.imageUrl}
                      alt=""
                    />
                  </div>

                  <div className="space-y-2 pt-6">
                    <div className="text-2xl leading-normal font-medium space-y-1">
                      <h3 className="uppercase text-ef-blue">
                        {formation.title}
                      </h3>
                      <p className="text-base font-light text-ef-blue">
                        {formation.description}
                      </p>
                    </div>
                  </div>
                </div>
                <Link
                  to={formation.url}
                  className="inline-flex items-center justify-center mt-6 px-5 py-3 border-2 border-ef-blue text-base font-medium rounded-md text-ef-blue bg-white hover:bg-ef-blue hover:text-white"
                >
                  En savoir plus
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Formation;
