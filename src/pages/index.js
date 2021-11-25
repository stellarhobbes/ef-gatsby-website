import * as React from "react";
import Comparaison from "../components/comparaison";
import NavbarHeader from "../components/navbar-header";
import DancingEf from "../images/ef-dancing.png";

const IndexPage = () => {
  return (
    <main class>
      <NavbarHeader />
      <Comparaison className="z-1"/>
      <div className="flex justify-center z-10|| -mt-52">
          <img
            className="flex align-item-center w-3/4"
            src={DancingEf}
            alt="illustration montagnes entrepreuneuriat français"
          />
        </div>
    </main>
  );
};

export default IndexPage;
