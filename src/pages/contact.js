import React from "react";

import Navbar from "../components/navbar";
import PreFooter from "../components/prefooter";
import Footer from "../components/footer";

import Fade from "react-reveal/Fade";
import "../styles/contact.css";

const ContactPage = () => {
  return (
    <main>
      <Navbar />
      <div id="contact-form" className="mt-60 mb-40">
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&family=Montserrat&family=Roboto&display=swap"
          rel="stylesheet"
        />
        <form
          method="POST"
          action="https://sebastienratppro32825.activehosted.com/proc.php"
          id="form_14"
          class="_form _form_14 _inline-form  _dark"
          novalidate
        >
          <input type="hidden" name="u" value="14"></input>
          <input type="hidden" name="f" value="14"></input>
          <input type="hidden" name="s"></input>
          <input type="hidden" name="c" value="0"></input>
          <input type="hidden" name="m" value="0"></input>
          <input type="hidden" name="act" value="sub"></input>
          <input type="hidden" name="v" value="2"></input>
          <input
            type="hidden"
            name="or"
            value="b229b7c8f786e106439ad2023977422e"
          />
          <div class="_form-content">
            <Fade top>
              <h1 className="text-4xl tracking-tight text-center font-extrabold text-gray-900 mb-16 sm:text-5xl md:text-6xl">
                <span className="block font-title uppercase text-ef-blue xl:inline">
                  Formation "Créer et développer votre entreprise de closing"
                </span>
              </h1>
            </Fade>
            <div class="_form_element _x72422648 _full_width ">
              <label for="firstname" class="_form-label">
                Prénom
              </label>
              <div class="_field-wrapper">
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="Saisissez votre prénom"
                ></input>
              </div>
            </div>
            <div class="_form_element _x15737100 _full_width ">
              <label for="lastname" class="_form-label">
                Nom
              </label>
              <div class="_field-wrapper">
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Saisissez votre nom"
                ></input>
              </div>
            </div>
            <div class="_form_element _x50572446 _full_width ">
              <label for="phone" class="_form-label">
                Téléphone*
              </label>
              <div class="_field-wrapper">
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Saisissez votre numéro de téléphone"
                  required
                ></input>
              </div>
            </div>
            <div class="_form_element _x67248830 _full_width ">
              <label for="email" class="_form-label">
                Courriel*
              </label>
              <div class="_field-wrapper">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Saisissez votre e-mail"
                  required
                ></input>
              </div>
            </div>
            <div class="_form_element _field47 _full_width ">
              <label for="field[47]" class="_form-label">
                Combien avez vous sur votre compte CPF ? ( Voir la vidéo
                ci-dessous )*
              </label>
              <div class="_field-wrapper">
                <input
                  type="text"
                  id="field[47]"
                  name="field[47]"
                  value=""
                  placeholder=""
                  required
                ></input>
              </div>
            </div>
            <div class="_form_element _field49 _full_width ">
              <fieldset class="_form-fieldset">
                <legend class="_form-label">
                  Vous souhaitez rejoindre la formation ?*
                </legend>
                <div class="_row _checkbox-radio">
                  <input
                    id="field_49Oui"
                    type="radio"
                    name="field[49]"
                    value="Oui"
                    required
                  ></input>
                  <span>
                    <label for="field_49Oui"></label>
                    Oui
                  </span>
                </div>
                <div class="_row _checkbox-radio">
                  <input
                    id="field_49Non"
                    type="radio"
                    name="field[49]"
                    value="Non"
                  ></input>
                  <span>
                    <label for="field_49Non"></label>
                    Non
                  </span>
                </div>
              </fieldset>
            </div>
            <div class="_form_element _field48 _full_width "></div>
            <div class="_button-wrapper _full_width">
              <button id="_form_14_submit" class="_submit" type="submit">
                C&#039;EST PARTI
              </button>
            </div>
            <div class="_clear-element"></div>
          </div>
          <div class="_form-thank-you" style={{ display: "none" }}></div>
        </form>
      </div>
      <PreFooter
        subtitle="Il est temps de changer de vie"
        title="Entreprenez et rejoignez l'excellence à la française"
        buttonTitle="Parlez à un coach"
        link=""
      />
      <Footer />
    </main>
  );
};

export default ContactPage;
