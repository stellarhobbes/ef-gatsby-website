import React from "react";
import { Link } from "gatsby";

import Fade from "react-reveal/Fade";
import HeadShake from "react-reveal/HeadShake";

const cibles = [
  {
    url:"",
    title:
      "Pour les salariés qui veulent se créer un job sur mesure et avoir le temps de profiter de leurs proches",
  },
  {
    url: "",
    title:
      "Pour les chômeurs qui souhaitent trouver un job et atteindre la liberté géographique et financière",
  },
  {
    url: "",
    title:
      "Pour tous les entrepreneurs et les commerciaux qui souhaitent devenir des vendeurs d’élite et exploser leur chiffre d’affaire",
  },
];

const CiblesClosing = () => {
  return (
    <section className="px-6 bg-white py-6 sm:px-0">
      <div className="max-w-5xl mx-auto text-center pt-6 pb-0 px-4 || sm:px-6 lg:pb-0 lg:px-8">
        <Fade top>
          <h2 className="text-4xl font-extrabold uppercase font-title text-ef-blue tracking-tight text-gray-900 || sm:text-4xl">
            <span className="block">Pour qui est cette formation&nbsp;?</span>
          </h2>
        </Fade>
      </div>

      <div className="max-w-7xl mx-auto md:grid md:grid-cols-3 md:px-6 lg:px-8">
        {cibles.map((cible) => (
          <div className="py-2 px-4 || sm:py-12 sm:px-6 md:flex md:flex-col items-center md:py-10 md:pl-0 md:pr-6 lg:p-6">
            <blockquote className="mt-6 border p-6 rounded-lg shadow-lg || md:flex-grow md:flex md:flex-col md:items-center">
              <div className="mb-6 mx-auto">
                <img
                  className="py-2 m-auto || sm:m-0"
                  width={175}
                  src={cible.url}
                  alt=""
                />
              </div>
              <div className="relative text-xl font-medium text-ef-blue pb-6 text-center || md:flex-grow">
                <h3 className="relative">{cible.title}</h3>
              </div>
            </blockquote>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <div className="inline-flex rounded-md shadow">
          <HeadShake delay={1000}>
            <Link
              to="/contact"
              className="inline-flex items-center uppercase justify-center px-5 py-3 text-sm font-medium rounded-md bg-ef-blue text-white border-2 border-ef-blue || hover:text-ef-blue hover:bg-white transition duration-500"
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
