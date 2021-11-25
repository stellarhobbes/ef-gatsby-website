import * as React from "react";

import Comparaison from "../components/comparaison";
import NavbarHeader from "../components/navbar-header";
import CallToAction from "../components/calltoaction";

import DancingEf from "../images/ef-dancing.png";
import Testimonial from "../components/testimonial";

const IndexPage = () => {
  return (
    <main class>
      <NavbarHeader />
      <Comparaison className="z-1" />
      <div className="flex justify-center z-10 || md:-mt-52 sm:mt-2">
        <img
          className="flex align-item-center w-3/4"
          src={DancingEf}
          alt="entrepreuneurs dansants"
        />
      </div>
      <CallToAction
        title="Alors, vous êtes né(e) pour entreprendre !"
        link=""
        buttonTitle="Je fais le test"
      />
      <Testimonial />
    </main>
  );
};

export default IndexPage;
