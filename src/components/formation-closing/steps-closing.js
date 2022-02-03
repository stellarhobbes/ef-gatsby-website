import React from "react";
import RedLine from "../../images/ef-line-red.png";
import PathToFlag from "../../images/gifs/cross-to-flag.gif";
import Fade from "react-reveal/Fade";

const steps = [
  {
    number: "01",
    title: "Apprenez des compétences qui changent des vies",
    text: "Aussi bien la vôtre que celle de vos (futurs) clients ! Grâce à une pédagogie adaptée, vous allez développer de nouvelles compétences qui vous permettront de pratiquer une activité rémunératrice et épanouissante.",
  },
  {
    number: "02",
    title: "Adoptez un nouvel état d’esprit qui vous suit au quotidien",
    text: "Être entrepreneur, c’est avant tout un état d’esprit qui vous suit au quotidien. À la fin de votre formation, vous vous sentirez plus confiant et plus serein. En bref, vous serez une meilleure version de vous même.",
  },
  {
    number: "03",
    title: "Maitrisez tous les secrets pour réussir dans l’entrepreneuriat",
    text: "Devenir Entrepreneur peut vite être le parcours du combattant sans les bons outils. Grâce à nos formations, vous aurez accès aux meilleures méthodes pour tout gérer comme un pro de façon simple et efficace.",
  },
  {
    number: "04",
    title: "Vivez à fond votre nouvelle vie d’entrepreneur",
    text: "Et dites adieu aux contraintes et aux fins de mois difficiles ! Vous serez libre de gérer votre temps comme vous le désirez, de profiter de vos proches ou encore partir en vacance dès que vous en avez envie !",
  },
];

const StepsClosing = () => {
  return (
    <section className="px-10 bg-white py-10 sm:px-0">
      <div className="max-w-5xl mx-auto text-center pt-2 pb-0 px-4 || sm:px-6 lg:pb-0 lg:px-8">
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
          Voilà pourquoi, avec l’Entrepreneuriat Français, vous n’êtes plus seul
          : nous vous accompagnons tout au long de votre projet.
        </p>
      </div>
      <Fade>
      <img
        className="py-2 px-10 || md:px-0 md:mx-auto md:block"
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
