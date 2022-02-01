import React from "react";
import { Link } from "gatsby";

import Fade from "react-reveal/Fade";
import HeadShake from "react-reveal/HeadShake";

const people = [
  {
    name: "Solange",
    picture:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    age: 43,
    parcours:
      "Ancienne consultante financière",
    stars: " ★ ★ ★ ★ ★",
    message:
      "J'ai directement compris que cette formation pouvait m'aider. Je me sens plus forte et plus confiante.",
    videosrc:
      "https://www.youtube.com/embed/sX-HlJgCK6w?controls=1&showinfo=0&rel=0",
    videotitle: "Titre de la vidéo",
  },
  {
    name: "Alexandre",
    picture:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    age: 23,
    parcours:
      "Ancien agent de sécurité",
    stars: " ★ ★ ★ ★ ☆",
    message:
      "Je me sentais emprisonnée, j'avais l'impression de passer à côté de ma vie. Cette formation m'a fourni un vrai contrôle sur ma propre vie.",
    videosrc: "https://www.youtube.com/embed/lMcEg0Fwfxo?controls=1&showinfo=0&rel=0",
    videotitle: "Titre de la vidéo",
  },
  {
    name: "Matthias",
    picture:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
    age: 27,
    parcours:
      "Copywritter",
    stars: " ★ ★ ★ ★ ★",
    message:
      "J'ai vu que oui, c'était possible de vendre sans travestir ma personnalité, sans jouer un rôle.",
    videosrc: "https://www.youtube.com/embed/0Pc9kaaKCZs?controls=1&showinfo=0&rel=0",
    videotitle: "Titre de la vidéo",
  },
];

const TestimonialVideoClosing = () => {
  return (
    <section className="bg-white pb-20">
      <div className="mx-auto max-w-5xl px-4 pt-6 pb-0 text-center sm:px-6 lg:px-8 lg:pb-0">
        <Fade top>
          <h2 className="font-title text-ef-blue text-4xl font-extrabold uppercase tracking-tight sm:text-4xl">
            <span className="block">
              Ils ont suivi cette formation et ont changé de vie.
            </span>
          </h2>
        </Fade>
      </div>

      <div className="mx-auto max-w-7xl md:grid md:grid-cols-3 md:px-6 lg:px-8">
        {people.map((person) => (
          <div className="py-2 px-4 sm:py-12 sm:px-6 md:flex md:flex-col md:py-10 md:pl-0 md:pr-6 lg:p-6">
            <blockquote className="mt-6 rounded-lg border p-6 shadow-lg md:flex md:flex-grow md:flex-col">
              <div className="mb-6">
                <div className="flex items-start">
                  
                  <div className="border-ef-blue inline-flex flex-shrink-0 rounded-full border-2 hidden">
                    <img
                      className="h-12 w-12 rounded-full object-cover"
                      src={person.picture}
                      alt=""
                    />
                  </div>
                  
                  <div className="ml-4">
                    <div className="font-title text-ef-blue text-2xl font-medium uppercase">
                      {person.name + ", " + person.age + " ans"}
                    </div>
                    <div className="text-ef-blue text-sm font-light">
                      {person.parcours}
                    </div>
                  </div>
                </div>
              </div>
              <div id="stars" className="text-ef-blue flex pb-2">
                {person.stars}
              </div>
              <div className="text-ef-blue || relative text-base font-light md:flex-grow">
                <p className="relative">{person.message}</p>
              </div>
              <div className="mt-6 flex justify-center">
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
      <p className="text-ef-blue mx-auto mt-3 mb-8 flex max-w-md justify-center text-base sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
        Vous aussi changez de vie avec la formation closing !
      </p>
      <div className="mt-8 flex justify-center">
        <div className="inline-flex rounded-md shadow">
          <HeadShake delay={1000}>
            <Link
              to="/contact"
              className="bg-ef-blue border-ef-blue hover:text-ef-blue uppercase inline-flex items-center justify-center rounded-md border-2 px-5 py-3 text-sm uppercase font-medium text-white transition duration-500 hover:bg-white"
            >
              Cliquez ici pour changer de vie
            </Link>
          </HeadShake>
        </div>
      </div>
    </section>
  );
};

export default TestimonialVideoClosing;
