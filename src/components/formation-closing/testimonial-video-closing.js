import React from "react";
import { Link } from "gatsby";

import Fade from "react-reveal/Fade";
import HeadShake from "react-reveal/HeadShake";

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
    videosrc: "https://www.youtube.com/embed/W96_d_LKie4",
    videotitle: "Titre de la vidéo",
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
    videosrc: "https://www.youtube.com/embed/L384Cd427yw",
    videotitle: "Titre de la vidéo",
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
    videosrc: "https://www.youtube.com/embed/AlcsbI9XO08",
    videotitle: "Titre de la vidéo",
  },
];

const TestimonialVideoClosing = () => {
  return (
    <section className="bg-white pb-20">
      <div className="max-w-5xl mx-auto text-center pt-6 pb-0 px-4 || sm:px-6 lg:pb-0 lg:px-8">
        <Fade top>
          <h2 className="text-4xl font-extrabold uppercase font-title text-ef-blue tracking-tight || sm:text-4xl">
            <span className="block">
              Ils ont suivi cette formation et ont changé de vie.
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
              <div id="stars" className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <div className="relative text-base font-light text-ef-blue || md:flex-grow">
                <p className="relative">{person.message}</p>
              </div>
              <div className="flex justify-center mt-6">
                <iframe
                  width="560"
                  height="215"
                  src={person.videosrc}
                  title={person.videotitle}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </blockquote>
          </div>
        ))}
      </div>
      <p className="mt-3 mb-8 max-w-md mx-auto text-base text-ef-blue flex justify-center || sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        Vous aussi changez de vie avec la formation closing !
      </p>
      <div className="mt-8 flex justify-center">
        <div className="inline-flex rounded-md shadow">
          <HeadShake delay={1000}>
            <Link
              to="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-md bg-ef-blue text-white border-2 border-ef-blue || hover:text-ef-blue hover:bg-white transition duration-500"
            >
              Votre formation en ligne
            </Link>
          </HeadShake>
        </div>
      </div>
    </section>
  );
};

export default TestimonialVideoClosing;
