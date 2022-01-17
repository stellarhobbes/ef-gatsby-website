import React from "react";
import RedLine from "../../images/ef-line-red.png";
import PathToFlag from "../../images/gifs/cross-to-flag.gif";
import Fade from "react-reveal/Fade";

const steps = [
  {
    number: "01",
    title: "Apprenez des compétences qui changent des vies",
    text: "Aussi bien la vôtre que celle de vos (futurs) clients ! Les formations de l’entreprenariat Français ont un objectif : développer de nouvelles compétences qui vont vous permettre de pratiquer une activité rémunératrice tout en vous épanouissant. Grâce à une pédagogie adaptée, vous allez découvrir les meilleures méthodes pour réussir dans l’entreprenariat.",
  },
  {
    number: "02",
    title: "Adoptez un nouvel état d’esprit qui vous suit au quotidien",
    text: "Être entrepreneur, ce n’est pas qu’une question de compétences. C’est également un état d’esprit qui vous suit au quotidien et qui vous permet d’atteindre tous vos objectifs. À la fin de votre formation, vous vous sentirez plus confiant et plus serein. En bref, vous serez une meilleure version de vous même.",
  },
  {
    number: "03",
    title: "Maitrisez tous les secrets pour réussir l’entrepreneuriat",
    text: "La France est un pays formidable… mais aussi un véritable mille administratif. Cependant, avec les bonnes méthodes et les bonnes connaissances, vous pouvez tout gérer comme un pro de façon simple et efficace. Et nous vous montrons précisément comment faire dans nos formations.",
  },
  {
    number: "04",
    title: "Vivez à fond votre nouvelle vie d’entrepreneur",
    text: "Désormais, vous avez toutes les cartes pour vivre confortablement de votre activité sans subir le stress du manque de client. Mais au-delà de ça, être entrepreneur c’est se construire une vie sur mesure dans laquelle vous êtes libre de gérer votre temps comme vous le désirez, et de profiter de vos proches ou encore partir en vacance dès que vous en avez envie !",
  },
];

const StepsClosing = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto text-center pt-6 pb-0 px-4 || sm:px-6 lg:pb-0 lg:px-8">
        <Fade top>
          <h2 className="text-4xl font-extrabold uppercase font-title text-ef-blue tracking-tight text-gray-900 || sm:text-4xl">
            <span className="block">
              Nous vous accompagnons vers le job de vos rêves
            </span>
          </h2>
        </Fade>
        <p className="mt-3 mb-8 max-w-md mx-auto text-base text-ef-blue text-center || sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          <span className="font-bold">
            L’entreprenariat est sans doute la meilleure voie vers
            l’épanouissement professionnel et personnel. Mais nous savons aussi
            qu’il peut être difficile de se lancer en partant de zéro.
          </span>{" "}
          Voilà pourquoi, avec l’Entreprenariat Français, vous n’êtes plus seul
          : nous vous accompagnons tout au long de votre projet.
        </p>
      </div>
      <Fade>
      <img
        className="py-2 hidden || md:mx-auto md:block"
        width={850}
        src={PathToFlag}
        alt=""
      />
      </Fade>
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-4 md:px-6 lg:px-8">
        {steps.map((step) => (
          <div className="py-2 px-4 || sm:py-12 sm:px-6 md:flex md:flex-col md:py-10 md:pl-0 md:pr-6 lg:p-2">
            <blockquote className="mt-6 p-6 || md:flex-grow md:flex md:flex-col">
              <div className="relative font-bold text-2xl font-title uppercase text-ef-blue pb-2 text-center || md:flex-grow">
                <p className="relative text-ef-red text-5xl pb-4">
                  {step.number}
                </p>
                <h3 className="relative">{step.title}</h3>
              </div>
              <img
                className="py-2 hidden || md:mx-auto md:block"
                width={250}
                src={RedLine}
                alt=""
              />
              <div className="relative text-base text-center font-light text-ef-blue pt-2 || md:flex-grow">
                <p className="relative">{step.text}</p>
              </div>
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StepsClosing;
