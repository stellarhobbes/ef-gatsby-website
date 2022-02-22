import React, { useEffect } from "react";

const HubspotContactForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js-eu1.hsforms.net/forms/v2.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "eu1",
          portalId: "25444802",
          formId: "f4522a2c-ce5e-4dbe-84f0-46b6f8e97394",
          target: "#hubspotForm",
        });
      }
    });
  }, []);

  return (
    <div className="w-3/4 mx-auto mb-40 sm:w-3/4 md:w-2/4">
      <div id="hubspotForm"></div>
    </div>
  );
};

export default HubspotContactForm;
