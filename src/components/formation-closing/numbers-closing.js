import React from "react";
import { Link } from "gatsby";

import HeadShake from "react-reveal/HeadShake";
import anime from "animejs/lib/anime.es.js";

import PeopleMosaic from "../../images/people-mosaic.png";

const NumbersClosing = () => {
  anime({
    targets: "#anime01",
    innerHTML: [0, 372],
    easing: "linear",
    round: 1,
  });
  anime({
    targets: "#anime02",
    innerHTML: [0, 94 + "%"],
    easing: "linear",
    round: 1,
  });
  anime({
    targets: "#anime03",
    innerHTML: [0, 100 + "%"],
    easing: "linear",
    round: 1,
  });
  return (
    <div className="bg-white pt-12 sm:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold uppercase font-title text-ef-blue sm:text-4xl">
            Nous avons eu la chance de les former et ils ont réussi
          </h2>
        </div>
      </div>
      <div className="mt-10 pb-12 bg-white sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-white" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-md uppercase leading-6 font-medium text-ef-blue">
                    Personnes formées
                  </dt>

                  <dd
                    id="anime01"
                    className="order-1 text-5xl font-extrabold text-ef-blue"
                  >
                    372
                  </dd>
                </div>
                <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-md uppercase leading-6 font-medium text-ef-blue">
                    D'élèves devenus entrepreneurs
                  </dt>

                  <dd
                    id="anime02"
                    className="order-1 text-5xl font-extrabold text-ef-blue"
                  >
                    94
                  </dd>
                </div>
                <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-md uppercase leading-6 font-medium text-ef-blue">
                    ont changés de vie
                  </dt>

                  <dd
                    id="anime03"
                    className="order-1 text-5xl font-extrabold text-ef-blue"
                  >
                    100
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center || sm:mb-2 md:mb-6">
          <img
            className="flex align-item-center w-4/4 hidden || sm:block"
            src={PeopleMosaic}
            alt="illustration montagnes entrepreuneuriat français"
          />
        </div>
      <div className="mt-8 flex justify-center">
        <div className="inline-flex rounded-md shadow">
          <HeadShake delay={1000}>
            <Link
              to="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-md bg-ef-blue text-white border-2 border-ef-blue || hover:text-ef-blue hover:bg-white transition duration-500"
            >
              Votre avenir est ici
            </Link>
          </HeadShake>
        </div>
      </div>
    </div>
  );
};

export default NumbersClosing;
