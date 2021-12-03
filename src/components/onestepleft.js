import React from "react";
import RedLine from "../images/ef-line-red.png";

import Fade from "react-reveal/Fade";

const OneStepLeft = (props) => {
  return (
    <div className="py-0 bg-white overflow-hidden || lg:py-0">
      <div className="relative max-w-xl mx-auto px-4 || sm:px-6 lg:px-8 lg:max-w-5xl">
        <div className="relative mt-12 || sm:mt-0 lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center">
        <Fade left>
          <div id="content-column" className="relative text-center sm:text-left">
          <img
              className="py-2 m-auto || sm:m-0"
              width={175}
              src={props.illustration}
              alt=""
            />
            <h3 className="text-3xl font-extrabold text-ef-blue font-title uppercase tracking-tight || sm:text-3xl">
              {props.title}
            </h3>
            <img
              className="relative float-left py-2 hidden || md:block"
              width={250}
              src={RedLine}
              alt=""
            />
            <p className="mt-3 text-base font-light text-gray-500 || ">{props.content}</p>
          </div>
          </Fade>

          <div
            id="picture-column"
            className="mt-10 -mx-4 relative hidden || md:block lg:mt-0"
            aria-hidden="true"
          >
            <img
              className="relative mx-auto"
              width={300}
              src={props.image}
              alt=""
            />
          </div>

          <div id="empty-column"></div>
        </div>
      </div>
    </div>
  );
};

export default OneStepLeft;
