import React from "react";
import { Helmet } from "react-helmet";

import Navbar from "../../components/navbar";
import CentralFooter from "../../components/footer-central";
import LogoQualiopi from "../../images/logo-qualiopi.png";
import LogoCompteFormation from "../../images/logo-moncompteformation.png";

import PeopleMosaic from "../../images/people-mosaic.png";
import Fade from "react-reveal/Fade";

const people = [
  {
    name: "Solange",
    picture:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    age: 43,
    parcours: "Ancienne consultante financière",
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
    parcours: "Ancien agent de sécurité",
    stars: " ★ ★ ★ ★ ☆",
    message:
      "Je me sentais emprisonné, j'avais l'impression de passer à côté de ma vie. Cette formation m'a fourni un vrai contrôle sur ma propre vie.",
    videosrc:
      "https://www.youtube.com/embed/lMcEg0Fwfxo?controls=1&showinfo=0&rel=0",
    videotitle: "Titre de la vidéo",
  },
  {
    name: "Matthias",
    picture:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
    age: 27,
    parcours: "Copywritter",
    stars: " ★ ★ ★ ★ ★",
    message:
      "J'ai vu que oui, c'était possible de vendre sans travestir ma personnalité, sans jouer un rôle.",
    videosrc:
      "https://www.youtube.com/embed/0Pc9kaaKCZs?controls=1&showinfo=0&rel=0",
    videotitle: "Titre de la vidéo",
  },
];

const ThanksClosing = () => {
  if (typeof window !== "undefined") {
    if (window.fbq != null) {
      window.fbq("track", "Lead");
    }
  }
  return (
    <main>
      <Helmet>
        <html lang="fr" amp />
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://lentrepreneuriatfrancais.fr/formations/merciclosing" />
        <title>Votre rendez-vous est confirmé !</title>
        </Helmet>
      <Navbar />
      <div className="mb-36"></div>
      <div className="mx-auto mt-40 mb-8 w-3/4 text-center md:w-2/4">
        <h1 className="font-title text-ef-blue block text-4xl font-extrabold uppercase tracking-tight text-gray-900 sm:text-5xl md:text-6xl xl:inline">
          Félicitations
          <br />
          <span className="font-medium">Votre rendez-vous est confirmé</span>
        </h1>
        <p className="text-ef-blue mx-auto mt-3 mb-12 max-w-md text-base sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
          En réservant cet appel, vous avez pris une excellente décision : celle
          de faire le premier pas vers votre réussite. Alors notez-le dès
          maintenant dans votre agenda car votre coach personnel se rendra
          disponible spécialement pour vous.
        </p>
        <h2 className="font-title text-ef-blue mx-auto mt-8 max-w-md px-10 text-xl font-bold uppercase sm:text-lg md:mt-10 md:max-w-3xl md:text-3xl">
          Cette formation est éligible
        </h2>
        <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-2">
          <div className="rounded-md">
            <div
              id="double-logo"
              className="flex flex-col items-center justify-center md:flex-row"
            >
              <div className="inline-flex rounded-md">
                <img
                  className="h-16"
                  src={LogoQualiopi}
                  alt="logo entrepreneuriat français"
                />
              </div>
              <div className="ml-3 inline-flex">
                <img
                  className="h-16"
                  src={LogoCompteFormation}
                  alt="logo entrepreneuriat français"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white px-6 pt-8 sm:px-0 sm:pt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-title text-ef-blue text-4xl font-extrabold uppercase sm:text-4xl">
              En attendant, découvrez ceux et celles qui ont réussi avant vous
              ...
            </h2>
          </div>
        </div>
        <div className="mt-10 bg-white pb-12 sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-white" />
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-4xl">
                <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                  <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                    <dt className="text-md text-ef-blue order-2 mt-2 font-medium uppercase leading-6">
                      Personnes formées
                    </dt>

                    <dd
                      id="anime01"
                      className="text-ef-blue order-1 text-5xl font-extrabold"
                    >
                      372
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                    <dt className="text-md text-ef-blue order-2 mt-2 font-medium uppercase leading-6">
                      D'élèves devenus entrepreneurs
                    </dt>

                    <dd
                      id="anime02"
                      className="text-ef-blue order-1 text-5xl font-extrabold"
                    >
                      94
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                    <dt className="text-md text-ef-blue order-2 mt-2 font-medium uppercase leading-6">
                      ont changés de vie
                    </dt>

                    <dd
                      id="anime03"
                      className="text-ef-blue order-1 text-5xl font-extrabold"
                    >
                      100
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className="|| flex justify-center sm:mb-2 md:mb-6">
          <img
            className="align-item-center w-4/4 || flex hidden sm:block"
            src={PeopleMosaic}
            alt="illustration montagnes entrepreuneuriat français"
          />
        </div>
      </div>
      <section className="mt-20 bg-white px-6 pb-10 sm:px-0">
        <div className="mx-auto max-w-5xl px-4 pt-2 pb-0 text-center sm:px-6 lg:px-8 lg:pb-0">
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
                    <div className="border-ef-blue inline-flex hidden flex-shrink-0 rounded-full border-2">
                      <img
                        className="h-12 w-12 rounded-full object-cover"
                        src={person.picture}
                        alt=""
                      />
                    </div>

                    <div className="">
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
      </section>
      <CentralFooter />
    </main>
  );
};

export default ThanksClosing;
