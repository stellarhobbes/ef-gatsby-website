import React from "react";
import { Helmet } from "react-helmet";

import Navbar from "../components/navbar";
import CentralFooter from "../components/footer-central";

const conditionGeneralUtilisation = () => {
  return (
    <content>
      <Helmet>
        <html lang="fr" amp />
        <meta charSet="utf-8" />
        <link
          rel="canonical"
          href="https://lentrepreneuriatfrancais.fr/conditions-generales-utilisation"
        />
        <title>
          Conditions Générales d'Utilisation | L'Entrepreneuriat Français
        </title>
        <meta
          name="title"
          content="Conditions Générales d'Utilisation | L'Entrepreneuriat Français"
        />
        <meta
          name="description"
          content="Des ressources gratuites pour vous aider à faire avancer votre projet. L’entrepreneuriat français vous accompagne pas à pas pour vous lancer."
        />
      </Helmet>
      <Navbar />
      <div className="mx-auto mt-40">
        <h1 className="pb-16 text-center text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl max-w-5xl mx-auto">
          <span className="font-title text-ef-blue block uppercase xl:inline">
            Conditions générales d'utilisation du site internet
            l'Entrepreneuriat Français
          </span>
        </h1>
        <h2 className="text-ef-blue mx-auto mt-3 max-w-md px-10 text-2xl sm:text-2xl md:mt-5 md:max-w-4xl md:text-3xl">
          1. Dispositions préalables
        </h2>
        <p className="text-ef-blue mx-auto mt-3 max-w-xl px-10 text-sm sm:text-sm md:mt-5 md:max-w-4xl md:text-sm">
          La société SH FORMATION est une Société par actions simplifiée, au
          capital social de 100 EUR, immatriculée au RCS de Lyon sous le numéro
          893 267 815, dont le siège social est situé 4, Rue de la République –
          69001 Lyon (France). <br />
          <br />
          Son numéro de TVA intracommunautaire est le FR 74893267815. La société
          SH FORMATION propose des services de formations professionnelles
          continues pour adultes, en matière d’entrepreneuriat, dispensées en
          distanciel. <br />
          <br />
          Les formations proposées par la société SH FORMATION sont plus
          amplement détaillées aux devis de la société SH FORMATION, ainsi que
          via le site internet « L’ENTREPRENEURIAT FRANÇAIS», dont elle est
          propriétaire et éditrice (accessible à l’adresse
          www.lentrepreneuriatfrancais.fr). <br />
          <br />
          Ces formations sont proposées à des particuliers en reconversion
          professionnelle, agissant en qualité de consommateur.
        </p>
        <h2 className="text-ef-blue mx-auto mt-3 max-w-md px-10 text-2xl sm:text-2xl md:mt-5 md:max-w-4xl md:text-3xl">
          2. Définitions
        </h2>
        <p className="text-ef-blue mx-auto mt-3 max-w-xl px-10 text-sm sm:text-sm md:mt-5 md:max-w-4xl md:text-sm">
          Dans les présentes conditions générales d’utilisation, les mots ou
          expressions commençant avec une majuscule auront la signification
          suivante :<br />
          <br />
          <span className="font-bold">CGU :</span> désigne le présent document
          et ses annexes éventuelles. <br />
          Client: désigne tout particulier en reconversion professionnelle, qui
          fait une demande de devis à la Société, afin de participer à l’un des
          Formations qu’elle propose. <br />
          <span className="font-bold">
            Données à Caractère Personnel/Données Personnelles :
          </span>{" "}
          désigne toute information susceptible de permettre l’identification
          d’une personne physique ou morale de manière directe ou indirecte
          (nom; prénom; adresse email; adresse IP; données de navigation; etc.),
          conformément à la définition donnée par l’article 4 du Règlement
          Général de l’Union Européenne sur la protection des Données (RGPD
          2016/679). <br />
          <span className="font-bold">Formations :</span> désigne les formations
          professionnelles continues proposées par la Société, en matière
          d’entrepreunariat, telles que plus amplement détaillées aux devis de
          la Société, ainsi que via le Site. <br />
          <span className="font-bold">Partie(s) :</span> désigne
          individuellement la Société ou un Utilisateur et collectivement la
          Société et un Utilisateur. <br />
          <span className="font-bold">Politique de Confidentialité :</span>{" "}
          désigne l’Article 20 des présentes. <br />
          <span className="font-bold">Site :</span> désigne le site internet
          dont la Société est propriétaire et éditrice, accessible à l’adresse
          www.lentrepreneuriatfrancais.fr. <br />
          <span className="font-bold">Société :</span> désigne la société SH
          FORMATION. <br />
          <span className="font-bold">Utilisateur :</span> désigne toute
          personne utilisant le Site, afin notamment de souscrire à l’une des
          Formations proposées par la Société, dans les conditions définies aux
          conditions générales de prestation de services de la Société.
        </p>
        <h2 className="text-ef-blue mx-auto mt-3 max-w-md px-10 text-2xl sm:text-2xl md:mt-5 md:max-w-4xl md:text-3xl">
          3. Mentions légales
        </h2>
        <p className="text-ef-blue mx-auto mt-3 max-w-xl px-10 text-sm sm:text-sm md:mt-5 md:max-w-4xl md:text-sm">
          Le Site est édité et exploité par la Société ; laquelle est une
          Société par actions simplifiée, au capital social de 100 EUR,
          immatriculée au RCS de Lyon sous le numéro 893 267 815, dont le siège
          social est situé 4, Rue de la République – 69001 Lyon (France).
          <br />
          <br />
          Email : contact@lentrepreneuriatfrancais.fr <br />
          <br />
          Le directeur de la publication est Sébastien Hanouna et Laurent
          Alventosa. <br />
          <br />
          Le Site est hébergé par la société OVH
        </p>
        <h2 className="text-ef-blue mx-auto mt-3 max-w-md px-10 text-2xl sm:text-2xl md:mt-5 md:max-w-4xl md:text-3xl">
          4. Objet
        </h2>
        <p className="text-ef-blue mx-auto mt-3 max-w-xl px-10 text-sm sm:text-sm md:mt-5 md:max-w-4xl md:text-sm">
          Les présentes CGU ont notamment pour objet de détailler leur champ
          d’application, ainsi que les conditions de leur acceptation. <br />
          <br />
          Elles décrivent également: (i) les fonctionnalités proposées par le
          Site; (ii) de façon non exhaustive les Formations proposés par la
          Société; (iii) ainsi que les conditions d’accès au Site et aux
          Formations par les Utilisateurs. <br />
          <br />
          Elles traitent aussi de la limitation de responsabilité de la Société.{" "}
          <br />
          <br />
          Les CGU comportent encore une clause relative à la politique de
          confidentialité des Données à Caractère Personnel/Données Personnelles
          de ses Utilisateurs. <br />
          <br />
          Les modalités de commande et de règlement des Formations, sont pour
          leur part décrites aux conditions générales de prestation de services
          de la Société.
        </p>
        <h2 className="text-ef-blue mx-auto mt-3 max-w-md px-10 text-2xl sm:text-2xl md:mt-5 md:max-w-4xl md:text-3xl">
          5. Champ d’application
        </h2>
        <p className="text-ef-blue mx-auto mt-3 max-w-xl px-10 text-sm sm:text-sm md:mt-5 md:max-w-4xl md:text-sm">
          Les Parties conviennent que leurs relations au titre de l’utilisation
          du Site, sont régies par les présentes, à l’exclusion de toute
          condition préalablement disponible sur le Site.
        </p>
        <h2 className="text-ef-blue mx-auto mt-3 max-w-md px-10 text-2xl sm:text-2xl md:mt-5 md:max-w-4xl md:text-3xl">
          6. Acceptation expresse des CGU
        </h2>
        <p className="text-ef-blue mx-auto mt-3 max-w-xl px-10 text-sm sm:text-sm md:mt-5 md:max-w-4xl md:text-sm">
          Toute utilisation du Site suppose la consultation et l’acceptation
          expresse des présentes par les Utilisateurs. En utilisant le Site, les
          Utilisateurs reconnaissent avoir lu, compris et accepter sans réserve
          les présentes.
        </p>
        <h2 className="text-ef-blue mx-auto mt-3 max-w-md px-10 text-2xl sm:text-2xl md:mt-5 md:max-w-4xl md:text-3xl">
          7. Fonctionnalités proposées par le Site
        </h2>
        <p className="text-ef-blue mx-auto mt-3 max-w-xl px-10 text-sm sm:text-sm md:mt-5 md:max-w-4xl md:text-sm">
          Le Site permet notamment à l’Utilisateur : <br />
          <br />- de découvrir les Formations proposées par la Société, dans les
          conditions d’accessibilité définies à l’Article 9 des présentes ;{" "}
          <br />
          <br />- de souscrire à l’une de ces Formations , selon les modalités
          prévues aux conditions générales de prestation de services de la
          Société. <br />
          <br />- De prendre un appel téléphonique avec l'équipe de
          l’entrepreneuriat français pour avoir plus d'informations sur les
          formations. <br />
          <br />
          La liste des fonctionnalités n’est fournie qu’à titre indicatif. La
          Société se réserve le droit d’en ajouter ou d’en supprimer,
          temporairement ou définitivement, sans l’accord de l’Utilisateur.
        </p>
        <h2 className="text-ef-blue mx-auto mt-3 max-w-md px-10 text-2xl sm:text-2xl md:mt-5 md:max-w-4xl md:text-3xl">
          8. Formations
        </h2>
        <p className="text-ef-blue mx-auto mt-3 max-w-xl px-10 text-sm sm:text-sm md:mt-5 md:max-w-4xl md:text-sm">
          La Société propose des services de formations continues pour adultes,
          en matière d’entrepreneuriat, dispensées en distanciel. <br />
          <br />
          Ces Formations sont proposées à des particuliers en reconversion
          professionnelle, agissant en qualité de consommateur. <br />
          <br />
          Les contenus de ces Formations sont plus amplement détaillés sur le
          Site, au moyen de fiches descriptives dédiées (lesquelles précisent
          notamment la nature, la durée, le programme et l’objet des actions de
          formations prévues ; le niveau de connaissances préalables requis pour
          suivre la Formation et obtenir les qualifications auxquelles elle
          prépare ; les conditions dans lesquelles la Formation est dispensée
          aux Clients ; les diplômes, titres ou références des personnes
          chargées de la Formation commandée). <br />
          <br />
          Les Formations sont dispensées en distanciel et e-learning notamment
          au moyen de modules vidéo préenregistrés.
        </p>
        <h2 className="text-ef-blue mx-auto mt-3 max-w-md px-10 text-2xl sm:text-2xl md:mt-5 md:max-w-4xl md:text-3xl">
          9. Accès au Site et aux Formations
        </h2>
        <p className="text-ef-blue mx-auto mt-3 max-w-xl px-10 text-sm sm:text-sm md:mt-5 md:max-w-4xl md:text-sm">
          L’accès au Site est libre et gratuit, de même que l’accès aux
          Formations. <br />
          <br />
          Les frais qui pourraient résulter de l’accès et de l’utilisation du
          Site sont à la charge exclusive de l’Utilisateur. <br />
          <br />
          Le Site est accessible 24H/24 7J/7. <br />
          <br />
          La Société est en droit de modifier, sans indemnité, ni préavis, les
          serveurs ou encore les heures d’accessibilité au Site, ainsi que de
          clôturer l’accès au Site, pour effectuer des mises à jour, des
          modifications ou des améliorations.
        </p>
        <h2 className="text-ef-blue mx-auto mt-3 max-w-md px-10 text-2xl sm:text-2xl md:mt-5 md:max-w-4xl md:text-3xl">
          10. Engagements des Utilisateurs
        </h2>
        <p className="text-ef-blue mx-auto mt-3 max-w-xl px-10 text-sm sm:text-sm md:mt-5 md:max-w-4xl md:text-sm">
          Dans le cadre de leur utilisation du Site, les Utilisateurs s’engagent
          : <br />
          <br />- à fournir des informations exactes et à les mettre à jour ; à
          ne pas utiliser tout ou partie des éléments du Site, en dehors des
          présentes ou d’une manière qui enfreindrait la réglementation ; <br />
          <br />- à ne pas utiliser tout ou partie des éléments du Site, à
          d’autres fins qu’un usage normal, étant précisé que seront notamment
          considérés comme ne relevant pas d’un usage normal toute utilisation
          et activité jugées disproportionnées ; <br />
          <br />- à ne publier, transmettre, diffuser, éditer ou rendre
          accessible par le biais de le Site, aucun contenu qui pourrait être
          constitutif, sans que cette liste soit limitative, de diffamation,
          d’injures, de dénigrement, de menaces, de chantage, de harcèlement,
          d’incitation à la violence, à la haine raciale et plus généralement à
          la réalisation de crimes et délits, de propagation de fausses
          nouvelles ou d’informations financières couvertes par le secret, de
          même que tout contenu destiné à représenter ou proposer à la vente des
          objets et/ou des ouvrages, des logiciels, des contenus interdits par
          la loi ou portant atteinte aux droits des tiers, d’atteinte à
          l’autorité de la justice, d’atteinte à la vie privée, à la protection
          des données personnelles ou au secret des correspondances, d’apologie
          de crimes contre l’humanité ou de négation de génocide, de divulgation
          d’informations couvertes par le secret ou par le droit à l’intimité de
          la vie privée, ou encore d’acte mettant en péril des mineurs,
          notamment par la fabrication, la transmission, la diffusion ou
          l’accessibilité de messages à caractère violent ou pornographiques ou
          encore pédophilique, de nature à porter atteinte à la dignité humaine
          ou de nature à permettre la fabrication d’explosifs ; <br />
          <br />- à ne pas télécharger sciemment, afficher, émettre, diffuser,
          transmettre ou rendre accessible de toute autre manière tout contenu
          comprenant ou constituant des virus informatiques ou tout autre code
          ou programme informatique conçus pour interrompre, détruire, détourner
          ou limiter les fonctionnalités ou les performances de le Site.
        </p>
        <h2 className="text-ef-blue mx-auto mt-3 max-w-md px-10 text-2xl sm:text-2xl md:mt-5 md:max-w-4xl md:text-3xl">
          11. Modification des CGU
        </h2>
        <p className="text-ef-blue mx-auto mt-3 max-w-xl px-10 text-sm sm:text-sm md:mt-5 md:max-w-4xl md:text-sm">
          Les présentes CGU sont disponibles sur le Site. <br />
          <br />
          Toutefois, la Société peut être amenée à modifier les présentes à tout
          moment, sans préavis, sous réserve d’en informer ses Utilisateurs dès
          l’entrée en vigueur de ces modifications par email et/ou par la
          publication desdites modifications sur le Site. <br />
          <br />
          La Société actualisera les CGU en indiquant la date de dernière mise à
          jour en haut à droite des présentes.
        </p>
        <h2 className="text-ef-blue mx-auto mt-3 max-w-md px-10 text-2xl sm:text-2xl md:mt-5 md:max-w-4xl md:text-3xl">
          12. Limitation de responsabilité
        </h2>
        <p className="text-ef-blue mx-auto mt-3 max-w-xl px-10 text-sm sm:text-sm md:mt-5 md:max-w-4xl md:text-sm">
          La responsabilité de la Société ne saurait être engagée pour tous les
          inconvénients ou dommages inhérents à l'utilisation du réseau
          internet, notamment une interruption ou rupture de service, une
          intrusion extérieure ou la présence de virus informatiques.
        </p>
        <h2 className="text-ef-blue mx-auto mt-3 max-w-md px-10 text-2xl sm:text-2xl md:mt-5 md:max-w-4xl md:text-3xl">
          13. Propriété intellectuelle
        </h2>
        <p className="text-ef-blue mx-auto mt-3 max-w-xl px-10 text-sm sm:text-sm md:mt-5 md:max-w-4xl md:text-sm">
          L’intégralité des éléments contenus sur le Site dont la Société est
          éditrice, sont protégés par les lois relatives à la propriété
          intellectuelle. Ainsi, la Société détient seule tous les droits,
          titres et intérêts, y compris tous les droits de propriété
          intellectuelle liés audit Site, ainsi que les idées, suggestions,
          demandes d’amélioration, commentaires, recommandations et autres
          informations que les Utilisateurs et tiers communiqueraient au sujet
          du Site. <br />
          <br />
          En outre, la Société détient les droits d’usage sur tous les éléments
          accessibles sur son Site, notamment les textes, images, graphismes,
          logo, icônes, sons, logiciels, etc. En conséquence, toute
          reproduction, représentation, modification, publication, adaptation
          totale ou partielle des éléments du Site, par quelque moyen ou procédé
          que ce soit, est interdite, sauf accord préalable express consenti par
          la Société.
        </p>
        <h2 className="text-ef-blue mx-auto mt-3 max-w-md px-10 text-2xl sm:text-2xl md:mt-5 md:max-w-4xl md:text-3xl">
          14. Politique de confidentialité
        </h2>
        <h2 className="text-ef-blue mx-auto mt-3 max-w-md px-10 text-2xl sm:text-2xl md:mt-5 md:max-w-4xl md:text-3xl">
          14.1 Objet
        </h2>
        <p className="text-ef-blue mx-auto mt-3 max-w-xl px-10 text-sm sm:text-sm md:mt-5 md:max-w-4xl md:text-sm">
          La présente Politique de Confidentialité a pour objectif de définir
          les principes et lignes directrices mis en œuvre par la Société, en
          matière de traitement des Données à Caractère Personnel des
          Utilisateurs. <br />
          <br />
          Plus précisément, la présente Politique de Confidentialité, détaille
          notamment l’ensemble des traitements desdites Données, des finalités
          poursuivies par ces derniers, ainsi que les moyens à la disposition de
          ses Utilisateurs pour exercer leurs droits. <br />
          <br />
          Pour toute information complémentaire sur la protection des Données
          Personnelles, la Société recommande aux Utilisateurs de se rendre sur
          le site de la CNIL (www.cnil.fr).
        </p>
        <h2 className="text-ef-blue mx-auto mt-3 max-w-md px-10 text-2xl sm:text-2xl md:mt-5 md:max-w-4xl md:text-3xl">
          14.2 Données personnelles
        </h2>
        <p className="text-ef-blue mx-auto mt-3 max-w-xl px-10 text-sm sm:text-sm md:mt-5 md:max-w-4xl md:text-sm">
          <span className="font-bold">Collecte des Données Personnelles</span>{" "}
          <br />
          <br />
          Les Données Personnelles sont notamment collectées par la Société à
          partir du Site www.thecoolrepublic.com (notamment par le biais de
          formulaires ou lors de l’inscription des Utilisateurs à la
          newsletter), de cookies, de scripts et du navigateur de l’Utilisateur.{" "}
          <br />
          <br />
          <span className="font-bold">
            Types, finalités et durée du traitement des Données Personnelles
            collectées
          </span>
          <br />
          <br />
          Conformément à la loi 78-17 du 6 janvier 1978, modifiée par les lois
          du 6 août 2004 et 20 juin 2018, la Société s’engage à traiter les
          Données Personnelles de ses Utilisateurs, afin de : <br />
          <br />- Répondre aux demandes des Clients adressées au service-client
          de la Société. <br />
          <br />
          La Société traite des Données Personnelles, afin de répondre aux
          demandes des Clients adressées au service-client de la Société. Dans
          ce cadre, la Société gère les informations d’identité de l’Utilisateur
          (prénom ; nom), ainsi que ses informations de contact (numéro de
          téléphone ; adresse email ; numéro de suivi ; adresse de livraison).
          Le traitement est nécessaire pour que la Société puisse remplir ses
          obligations envers les Utilisateurs, conformément à ses conditions
          générales de vente en ligne. Ces Données Personnelles seront
          supprimées par la Société, deux ans (2) après le dernier contact du
          Client avec la Société. <br />
          <br />- Fourniture de newsletters. <br />
          <br />
          La Société traite les Données Personnelles des Utilisateurs, afin de
          leur fournir des newsletters. La Société traite les Données
          Personnelles suivantes pour fournir des newsletters : informations
          d’identité (prénom et nom) et informations de contact (numéro de
          téléphone et adresse email). En s’inscrivant à la newsletter de la
          Société, l’Utilisateur donne son consentement au traitement de ses
          Données Personnelles à cette fin. L’Utilisateur a le droit de se
          désinscrire des listes de newsletters de la Société, à tout moment.
          Ces Données Personnelles sont conservées à cet effet aussi longtemps
          que l’Utilisateur est inscrit à la newsletter de la Société. <br />
          <br />- Obligations légales. <br />
          <br />
          La Société traite des Données Personnelles, afin de remplir ses
          obligations légales, par exemple en termes de comptabilité. A cette
          fin, la Société traite les Données Personnelles suivantes :
          informations d’identité (prénom et nom), informations de contact
          (numéro de téléphone et adresse email) et informations de paiement. Le
          traitement est nécessaire, afin que la Société puisse remplir les
          obligations légales qui sont les siennes, conformément aux lois et
          réglementations nationales et européennes.
          <br />
          <br />
          <span className="font-bold">
            Destinataires des Données Personnelles
          </span>{" "}
          <br />
          <br />
          La Société s’engage à garantir la confidentialité des Données
          Personnelles traitées dans le cadre de l’exécution de ses obligations.
          Par ailleurs, ces Données Personnelles étant susceptibles d’être
          communiquées aux partenaires de la Société chargés de l’exécution, du
          traitement, de la gestion et du paiement des commandes, la Société
          veille à ce que ces partenaires présentent les mêmes garanties
          suffisantes quant à la mise en œuvre de mesures techniques et
          organisationnelles appropriées, de manière à ce que le traitement
          réponde aux exigences de la réglementation applicable. En outre, la
          Société est en droit de divulguer les Données Personnelles des
          Utilisateurs, en cas d’obligation par la loi ou en cas de violation
          des présentes par lesdits Utilisateurs. <br />
          <br />
          Transfert des Données Personnelles vers des pays tiers La Société
          s’efforce de traiter les Données Personnelles au sein de l’UE/EEE,
          afin que les Utilisateurs puissent être rassurés quant à la protection
          desdites Données Personnelles. Dans certains cas, cependant, les
          Données Personnelles peuvent être transférées et traitées par des
          prestataires de services se trouvant dans des pays en dehors de
          l'UE/EEE. Pour garantir que les Données Personnelles sont toujours
          protégées, la Société met en œuvre, en toutes circonstances, des
          mesures de sécurité adéquates, par exemple par des accords de
          protection des données qui obligent les sous-traitants à protéger les
          Données Personnelles de la même manière que la Société. Une liste à
          jour des pays vers lesquels la Société transfère, le cas échéant, les
          Données Personnelles peut être obtenue sur demande. Les Utilisateurs
          ont également la possibilité de demander des informations sur les
          mesures de sécurité mises en place par la Société. <br />
          <br />
          <span className="font-bold">Consentement</span> <br />
          <br />
          Le consentement des Utilisateurs est présumé aux fins d’utilisation
          desdites données aux fins uniquement de l’exécution de leurs commandes
          et des paiements y afférents. Lorsque les Données Personnelles des
          Utilisateurs sont utilisées à des fins marketing, le consentement
          préalable express des Utilisateurs est nécessaire. Les Utilisateurs
          ont toujours la possibilité de rétracter leur consentement en
          adressant un email à l’adresse : contact@lentrepreneuriatfrancais.fr{" "}
          <br />
          <br />
          <span className="font-bold">Stockage</span> <br />
          <br />
          Le site est hébergé par la société OVH Les Données Personnelles
          recueillies sont hébergées par Hubspot et Activecampaign. <br />
          <br />
          <span className="font-bold">Sécurité</span> <br />
          <br />
          La Société s’engage à mettre en œuvre tous les moyens nécessaires pour
          assurer la sécurité et la confidentialité des Données Personnelles.
          Ainsi, afin de protéger les Données Personnelles des Utilisateurs de
          son Site, la Société prend un ensemble de précautions et suit les
          meilleurs pratiques en la matière, pour assurer que lesdites Données
          ne soient pas perdues, détournées, consultées, divulguées, modifiées
          ou détruites de manière inappropriée. <br />
          <br />
          <span className="font-bold">
            Droits relatifs aux Données Personnelles
          </span>{" "}
          <br />
          <br />
          L’Utilisateur dispose, conformément aux réglementations nationales et
          européennes en vigueur d’un droit d’accès permanent, de modification,
          de rectification, de limitation, d’opposition et de portabilité
          s’agissant des informations le concernant. Pour exercer ses droits, il
          suffit à l’Utilisateur d’écrire à l’adresse email suivante :
          contact@lentrepreneuriatfrancais.fr Par ailleurs, si un Utilisateur a
          des raisons de penser que la sécurité de ses Données Personnelles a
          été compromise ou que ces Données ont fait l’objet d’une utilisation
          abusive, il est en droit de contacter la Société à l’adresse email
          suivante : contact@lentrepreneuriatfrancais.fr La Société instruira
          les réclamations concernant l’utilisation et la divulgation de Données
          Personnelles et tentera de trouver une solution conformément à la
          réglementation en vigueur. L’Utilisateur a également la possibilité de
          formuler une réclamation auprès de la CNIL, dont les coordonnées sont
          mentionnées sur son site www.cnil.fr. Dans tous les cas, concernant
          l’utilisation de ses Données Personnelles, l’Utilisateur a la
          possibilité de contacter le délégué à la protection des données de la
          Société, à l’adresse contact@lentrepreneuriatfrancais.fr
        </p>
        <h2 className="text-ef-blue mx-auto mt-3 max-w-md px-10 text-2xl sm:text-2xl md:mt-5 md:max-w-4xl md:text-3xl">
          14.3 Cookies
        </h2>
        <p className="text-ef-blue mx-auto mt-3 max-w-xl px-10 text-sm sm:text-sm md:mt-5 md:max-w-4xl md:text-sm">
          <span className="font-bold">Qu’est qu’un cookie ?</span> <br />
          <br />
          Un cookie ou traceur est un fichier électronique déposé sur un
          terminal, tel qu’un ordinateur, une tablette ou un smartphone, et
          notamment lu lors de la connexion à un site internet, de la lecture
          d’un email, de l’installation ou de l’utilisation d’un logiciel ou
          d’une application mobile, quel que soit le type de terminal utilisé.{" "}
          <br />
          <br />
          <span className="font-bold">
            Pourquoi la Société utilise-t-elle des cookies ?
          </span>{" "}
          <br />
          <br />
          Au cas particulier, le bon fonctionnement du Site implique la présence
          de cookies implantés dans l’ordinateur de l’Utilisateur, lors de sa
          connexion, afin d’enregistrer les informations relatives à sa
          navigation (pages consultées, date et heure de la consultation, etc.)
          et à son identité. Lors de la première connexion au Site, une bannière
          d’explication sur l’utilisation des cookies apparaîtra. Dès lors, en
          poursuivant la navigation, l’Utilisateur sera réputé avoir été informé
          et avoir accepté l’utilisation desdits cookies. L’Utilisateur est en
          droit de s’opposer à l'utilisation des cookies en configurant lui-même
          son logiciel de navigation. L’Utilisateur a également la possibilité
          de rétracter son consentement à l’utilisation de cookies, à tout
          moment. <br />
          <br />
          <span className="font-bold">
            Type de cookies utilisés sur le Site
          </span>{" "}
          <br />
          <br />
          Cookies de session - ces cookies expirent lorsque l’Utilisateur ferme
          son navigateur web. La Société utilise ce type de cookie pour, entre
          autres, faciliter la navigation sur le Site. Certains de ces cookies
          sont essentiels au bon fonctionnement du Site. Cela signifie que si
          l’Utilisateur bloque complètement l'utilisation des cookies, il ne
          pourra pas utiliser toutes les fonctionnalités du Site. <br />
          <br />
          <span className="font-bold">Cookies persistants</span>
          <br />
          <br /> - ces cookies restent sur l’appareil de l’Utilisateur pendant
          une période déterminée ou jusqu'à ce qu’il les supprime. Ce type de
          cookie est utilisé dans le but d'améliorer l'expérience de
          l’Utilisateur sur le Site, notamment en faisant en sorte qu’il n’ait
          pas à se connecter à chaque visite du Site. La Société utilise
          également les informations des cookies persistants pour conserver des
          statistiques sur le Site, afin qu’elle puisse améliorer ses
          fonctionnalités en fonction de ce que l’Utilisateur veut et apprécie.{" "}
          <br />
          <br />
          <span className="font-bold">
            Cookies spécifiques utilisés sur le Site
          </span>{" "}
          <br />
          <br />
          <span className="font-bold">Réseaux sociaux</span> <br />
          <br />
          Les cookies enregistrés sont utilisés pour proposer un marketing ciblé
          via le reciblage via Facebook Pixel ou Snapchat Pixel ou google ans ou
          tiktok ads. Ces sites peuvent utiliser des cookies lorsque les
          Utilisateurs se connectent pour utiliser leurs services. Étant donné
          que ces cookies proviennent de fournisseurs tiers, la responsabilité
          de la Société ne saurait être engagée à cet égard. Pour obtenir plus
          d'informations, la Société recommande à ses Utilisateurs de prendre
          connaissances des politiques de confidentialité de ces fournisseurs
          tiers. <br />
          <br />
          <span className="font-bold">Google Analytics et Adwords</span>
          <br />
          <br />
          La Société utilise des cookies pour conserver des statistiques sur le
          Site, ce qui lui permet notamment d'améliorer les informations
          contenues sur le Site. Pour cela la Société utilise les cookies de
          Google Analytics et d'Adwords. La Société utilise Google Analytics
          pour avoir une bonne idée du fonctionnement du Site et du nombre de
          visites qu’il reçoit, ainsi que pour pouvoir proposer un marketing
          ciblé via le reciblage. Les cookies Google Adwords sont stockés, afin
          que la Société puisse mesurer le taux de conversion de ses publicités
          Google. Pour obtenir plus d'informations, la Société recommande à ses
          Utilisateurs de prendre connaissances de la politique de
          confidentialité de ce fournisseur tiers ici. <br />
          <br />
          <span className="font-bold">Youtube</span> <br />
          <br />
          Étant donné que la Société utilise parfois des vidéos intégrées de
          Youtube et qu’elle souhaite que le Site se souvienne des paramètres
          des Utilisateurs, tels que le volume, elle utilise des cookies qui
          gèrent ces aspects. Comme expliqué précédemment, dès lors qu’il s'agit
          de cookies de fournisseurs tiers, la responsabilité de la Société ne
          saurait donc être engagée à cet égard. Pour obtenir plus
          d'informations, la Société recommande à ses Utilisateurs de prendre
          connaissances des politiques de confidentialité de ces fournisseurs
          tiers. <br />
          <br />
          <span className="font-bold">Chat Intercom</span> <br />
          <br />
          Pour que le chat d'Intercom fonctionne correctement, les cookies sont
          stockés par un tiers. Pour obtenir plus d'informations, la Société
          recommande à ses Utilisateurs de prendre connaissances de la politique
          de confidentialité de ce fournisseur. <br />
          <br />
          <span className="font-bold">Hotjar</span> <br />
          <br />
          La Société a également une fonction via Hotjar, qui lui permet de
          tracer comment les Utilisateurs se sont déplacés sur le Site. Cela
          permet également d'améliorer le Site, afin que les Utilisateurs aient
          la meilleure expérience possible et que les cookies fonctionnent de
          manière optimale. Pour obtenir plus d'informations, la Société
          recommande à ses Utilisateurs de prendre connaissances de la politique
          de confidentialité de ce fournisseur ici. <br />
          <br />
          <span className="font-bold">Plus d’information sur les cookies</span>
          <br />
          <br />
          https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser <br />
          <br />
          <span className="font-bold">Questions</span>
          <br />
          <br />
          Si vous avez des questions concernant cette politique de cookies,
          n'hésitez pas à contacter la Société par email à dpo@insurello.fr.
        </p>
        <h2 className="text-ef-blue mx-auto mt-3 max-w-md px-10 text-2xl sm:text-2xl md:mt-5 md:max-w-4xl md:text-3xl">
          15. Divers
        </h2>
        <h2 className="text-ef-blue mx-auto mt-3 max-w-md px-10 text-2xl sm:text-2xl md:mt-5 md:max-w-4xl md:text-3xl">
          15.1 Intégralité
        </h2>
        <p className="text-ef-blue mx-auto mt-3 max-w-xl px-10 text-sm sm:text-sm md:mt-5 md:max-w-4xl md:text-sm">
          Les Parties reconnaissent que les présentes constituent l’intégralité
          des accords passés entre elles relatifs à leur objet et remplacent
          tous les engagements antérieurs, verbaux et/ou écrits, passés entre
          les Parties, relatifs audit objet. Sauf stipulation expresse
          contraire, les termes et conditions et obligations du présent document
          prévaudront sur tous autres.
        </p>
        <h2 className="text-ef-blue mx-auto mt-3 max-w-md px-10 text-2xl sm:text-2xl md:mt-5 md:max-w-4xl md:text-3xl">
          15.2 Nullité
        </h2>
        <p className="text-ef-blue mx-auto mt-3 max-w-xl px-10 text-sm sm:text-sm md:mt-5 md:max-w-4xl md:text-sm">
          La nullité, l'inopposabilité, ou plus généralement, l'absence d'effet
          de l'une quelconque des stipulations des présentes n'affectera pas les
          autres stipulations qui demeureront parfaitement valables et
          contraignantes.
        </p>
        <h2 className="text-ef-blue mx-auto mt-3 max-w-md px-10 text-2xl sm:text-2xl md:mt-5 md:max-w-4xl md:text-3xl">
          15.3 Non renonciation
        </h2>
        <p className="text-ef-blue mx-auto mt-3 max-w-xl px-10 text-sm sm:text-sm md:mt-5 md:max-w-4xl md:text-sm">
          Le fait pour l’une des Parties de ne pas se prévaloir d’un manquement
          par l’autre Partie à l’une quelconque des obligations visées aux
          présentes, ne saurait être interprétée pour l’avenir comme une
          renonciation à l’obligation en cause.
        </p>
        <h2 className="text-ef-blue mx-auto mt-3 max-w-md px-10 text-2xl sm:text-2xl md:mt-5 md:max-w-4xl md:text-3xl">
          16. Loi applicable et juridiction compétente
        </h2>
        <p className="text-ef-blue mx-auto mt-3 max-w-xl px-10 text-sm sm:text-sm md:mt-5 md:max-w-4xl md:text-sm">
          Les présentes sont soumises au droit français. <br />
          <br />
          Toute contestation relative aux présentes sera portée devant l’une des
          juridictions territorialement compétentes en vertu du Code de
          procédure civile. <br />
          <br />
          Par ailleurs, il est rappelé à l’Utilisateur consommateur qu’il a la
          possibilité de soumettre toute contestation relative aux présentes
          soit devant la juridiction du lieu où le consommateur demeurait au
          moment de la conclusion du contrat, soit devant celle du lieu de la
          survenance du fait dommageable. <br />
          <br />
          En tout état de cause, l’Utilisateur est dûment informé qu’il est en
          droit de recourir à une médiation conformément aux dispositions de
          l’article L. 111-1 du Code de la consommation.
        </p>
        <h2 className="text-ef-blue mx-auto mt-3 max-w-md px-10 text-2xl sm:text-2xl md:mt-5 md:max-w-4xl md:text-3xl">
          17. Version française et étrangère
        </h2>
        <p className="text-ef-blue mx-auto mt-3 max-w-xl px-10 text-sm sm:text-sm md:mt-5 md:max-w-4xl md:text-sm">
          Les présentes sont rédigées en français. En cas de contradiction ou de
          contresens, elles prévaudront sur toute autre version qui serait
          rédigée dans une autre langue à la demande de l’Utilisateur.
        </p>
        <h2 className="text-ef-blue mx-auto mt-3 max-w-md px-10 text-2xl sm:text-2xl md:mt-5 md:max-w-4xl md:text-3xl">
          18. Élection de domicile
        </h2>
        <p className="text-ef-blue mx-auto mt-3 max-w-xl px-10 text-sm sm:text-sm md:mt-5 md:max-w-4xl md:text-sm">
          La Société élit domicile au 4, Rue de la République – 69001 Lyon
          (France).
        </p>
      </div>
      <CentralFooter />
    </content>
  );
};

export default conditionGeneralUtilisation;
