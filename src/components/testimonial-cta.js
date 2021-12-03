import React from "react";
import { Link } from "gatsby";

import Fade from "react-reveal/Fade";
import HeadShake from 'react-reveal/HeadShake';

const people = [
  {
    name: "Françoise",
    picture:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    age: 43,
    parcours:
      "Ancien employé dans une agence et nouveau Community Manager Freelance heureux",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
  },
  {
    name: "John",
    picture:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    age: 23,
    parcours:
      "Ancien employé dans une agence et nouveau Community Manager Freelance heureux",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
  },
  {
    name: "Anne-Sophie",
    picture:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
    age: 50,
    parcours:
      "Ancien employé dans une agence et nouveau Community Manager Freelance heureux",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
  },
];

const TestimonialCta = () => {
  return (
    <section className="bg-white pb-20">
      <div className="max-w-5xl mx-auto text-center pt-6 pb-0 px-4 || sm:px-6 lg:pb-0 lg:px-8">
        <p className="mt-3 mb-8 max-w-md mx-auto text-base text-gray-500 || sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          ils ont suivi notre parcours
        </p>
        <Fade top>
        <h2 className="text-4xl font-extrabold uppercase font-title text-ef-blue tracking-tight text-gray-900 || sm:text-4xl">
          <span className="block">
            Nous avons eu la chance de les former et ils ont réussi
          </span>
        </h2>
        </Fade>
      </div>

      <div className="max-w-7xl mx-auto md:grid md:grid-cols-3 md:px-6 lg:px-8">
        {people.map((person) => (
          <div className="py-2 px-4 || sm:py-12 sm:px-6 md:flex md:flex-col md:py-10 md:pl-0 md:pr-6 lg:p-6">
            <blockquote className="mt-6 border p-6 rounded-lg shadow-lg || md:flex-grow md:flex md:flex-col">
              <div className="mb-6">
                <div className="flex items-start">
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
              <Link
                to="#"
                className="inline-flex items-center justify-center mt-6 px-5 py-3 border-2 border-ef-blue text-base font-medium rounded-md text-ef-blue bg-white hover:bg-ef-blue hover:text-white"
              >
                Lire le témoignage
              </Link>
            </blockquote>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <div className="inline-flex rounded-md shadow">
          <HeadShake delay={1000}>
          <Link
            to="#"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-ef-blue hover:bg-ef-red"
          >
            Je contacte un coach
          </Link>
          </HeadShake>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCta;
