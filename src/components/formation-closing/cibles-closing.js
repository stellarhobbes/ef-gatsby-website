import React from "react";
import { Link } from "gatsby";

import Fade from "react-reveal/Fade";
import HeadShake from "react-reveal/HeadShake";

const cibles = [
  {
    url:"",
    title:
      "Pour les salariés qui veulent se créer un job sur mesure qui leur correspond",
    text: "Apprendre le closing est l’occasion pour vous de vous reconvertir dans une activité qui vous permet de vivre confortablement et de ne plus jamais avoir peur des fins de mois difficiles. Tout ça en ayant le temps de profiter de votre famille et de voir grandir vos enfants.",
  },
  {
    url: "",
    title:
      "Pour les chômeurs qui souhaitent trouver un job qui fait sens pour eux",
    text: "Oubliez les recherches d’emploi infructueuses et les entretiens qui n’aboutissent pas. En apprenant le Closing, vous avez la certitude d’avoir un job qui vous permet d’atteindre une liberté géographique et financière que vous n’aurez jamais en travaillant pour un patron !",
  },
  {
    url: "",
    title:
      "Pour tous les ENTREPRENEURS et les commerciaux qui souhaitent devenir des vendeurs d’élite",
    text: "Que vous soyez un manager qui souhaite gravir les échelons ou encore un entrepreneur qui veut vendre plus, le closing est la compétence qu’il vous faut pour booster votre carrière et votre business.",
  },
];

const CiblesClosing = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto text-center pt-6 pb-0 px-4 || sm:px-6 lg:pb-0 lg:px-8">
        <Fade top>
          <h2 className="text-4xl font-extrabold uppercase font-title text-ef-blue tracking-tight text-gray-900 || sm:text-4xl">
            <span className="block">Pour qui est cette formation ?</span>
          </h2>
        </Fade>
      </div>

      <div className="max-w-7xl mx-auto md:grid md:grid-cols-3 md:px-6 lg:px-8">
        {cibles.map((cible) => (
          <div className="py-2 px-4 || sm:py-12 sm:px-6 md:flex md:flex-col md:py-10 md:pl-0 md:pr-6 lg:p-6">
            <blockquote className="mt-6 border p-6 rounded-lg shadow-lg || md:flex-grow md:flex md:flex-col">
              <div className="mb-6 mx-auto">
                <img
                  className="py-2 m-auto || sm:m-0"
                  width={175}
                  src={cible.url}
                  alt=""
                />
              </div>
              <div className="relative text-xl font-medium uppercase text-ef-blue pb-6 text-center || md:flex-grow">
                <h3 className="relative">{cible.title}</h3>
              </div>
              <div className="relative text-base font-light text-ef-blue || md:flex-grow">
                <p className="relative">{cible.text}</p>
              </div>
            </blockquote>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <div className="inline-flex rounded-md shadow">
          <HeadShake delay={1000}>
            <Link
              to="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-md bg-ef-blue text-white border-2 border-ef-blue || hover:text-ef-blue hover:bg-white transition duration-500"
            >
              Parlez-en avec un coach
            </Link>
          </HeadShake>
        </div>
      </div>
    </section>
  );
};

export default CiblesClosing;
