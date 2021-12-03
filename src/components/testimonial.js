import React from "react";
import { Link } from "gatsby";
import DoubleArrow from "../images/double-arrow-ef.png";

import Fade from "react-reveal/Fade";

const people = [
  {
    name: "Satoshi Nakamoto",
    picture:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    age: 43,
    parcours: "Financier reconverti dans le minage",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
  },
  {
    name: "Frank Abagnale",
    picture:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    age: 23,
    parcours: "Étudiant diplômé entré à l'école de pilote de ligne",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
  },
  {
    name: "Rick Grimes",
    picture:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
    age: 50,
    parcours: "Ancien shérif en formation de bûcheron / élagueur",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
  },
];

const Testimonial = () => {
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto text-center pt-16 pb-0 px-4 || sm:px-6 lg:pb-0 lg:px-8">
        <p className="mt-3 mb-8 max-w-md mx-auto text-base text-gray-500 || sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Nous avons une bonne nouvelle pour vous ...
        </p>
        <Fade top>
        <h2 className="text-4xl font-extrabold uppercase font-title text-ef-blue tracking-tight text-gray-900 || sm:text-4xl">
          <span className="block">
            Et si vous aviez un plan de route sûr et détaillé pour lancer
            rapidement votre activité ?
          </span>
        </h2>
        </Fade>
      </div>

      <div className="px-10 max-w-6xl mx-auto || md:px-0 md:grid md:grid-cols-3 md:px-6 lg:px-8">
        {people.map((person) => (
          <div className="py-2 px-4 || sm:py-12 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 lg:pr-16">
            <blockquote className="mt-6 || md:flex-grow md:flex md:flex-col">
              <div className="mt-8 mb-6">
                <div className="items-start text-center || md:text-left md:flex md:flex-row">
                  <div className="flex-shrink-0 inline-flex rounded-full border-2 border-ef-blue">
                    <img
                      className="h-12 w-12 object-cover rounded-full"
                      src={person.picture}
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-2xl uppercase font-title font-medium text-ef-blue">
                      {person.name + ", " + person.age + " ans"}
                    </div>
                    <div className="text-sm font-light text-ef-blue">
                      {person.parcours}
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative text-base font-light text-ef-blue || md:flex-grow">
                <p className="relative">{person.message}</p>
              </div>
            </blockquote>
          </div>
        ))}
      </div>
      <div className="flex justify-center z-10">
        <img className="flex align-item-center w-48" src={DoubleArrow} alt="" />
      </div>
      <div className="mt-8 flex justify-center">
        <div className="inline-flex rounded-md shadow">
          <Link
            to="#"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-ef-blue hover:bg-ef-red"
          >
            Je contacte un coach
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
