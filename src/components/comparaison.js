import React from "react";
import { CheckIcon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/outline";
import BackgroundMountains from "../images/mountain-ef.png";


const negatives = [
  {
    title: "Vous en avez assez de",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    features: [
      "Pariatur quod similique",
      "Sapiente libero doloribus modi nostrum",
      "Vel ipsa esse repudiandae excepturi",
      "Itaque cupiditate adipisci quibusdam",
    ],
  },
];

const positives = [
    {
      title: "Vous êtes convaincu que",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      features: [
        "Pariatur quod similique",
        "Sapiente libero doloribus modi nostrum",
        "Vel ipsa esse repudiandae excepturi",
        "Itaque cupiditate adipisci quibusdam",
      ],
    },
  ];

const Comparaison = () => { 
  return (
    <div className="mt-8 pb-12 || sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
      <div className="relative || md:-mt-28 sm:mt-2">
        <div className="flex justify-center || sm:mb-2 md:-mb-60">
          <img
            className="flex align-item-center w-3/4 hidden || sm:block"
            src={BackgroundMountains}
            alt="illustration montagnes entrepreuneuriat français"
          />
        </div>
        <div className="absolute inset-0 h-3/4" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 || sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto space-y-4 || lg:max-w-4xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">

            {negatives.map((negative) => (
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-8 bg-white || sm:p-10 sm:pb-6">
                  <div className="mt-4 flex items-baseline text-3xl font-extrabold font-title uppercase text-ef-blue">
                    {negative.title}
                  </div>
                  <p className="mt-5 text-lg text-gray-500">
                    {negative.description}
                  </p>
                </div>
                <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-white space-y-6 || sm:p-10 sm:pt-6">
                  <ul className="space-y-4">
                    {negative.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <div className="flex-shrink-0">
                          <XIcon
                            className="h-6 w-6 text-ef-red"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-3 text-base text-gray-700">
                          {feature}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {positives.map((positive) => (
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-8 bg-white || sm:p-10 sm:pb-6">
                  <div className="mt-4 flex items-baseline text-3xl font-extrabold font-title uppercase text-ef-blue">
                    {positive.title}
                  </div>
                  <p className="mt-5 text-lg text-gray-500">
                    {positive.description}
                  </p>
                </div>
                <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-white space-y-6 || sm:p-10 sm:pt-6">
                  <ul className="space-y-4">
                    {positive.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <div className="flex-shrink-0">
                          <CheckIcon
                            className="h-6 w-6 text-green-500"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-3 text-base text-gray-700">
                          {feature}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparaison;
