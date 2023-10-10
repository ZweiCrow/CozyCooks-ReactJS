import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../Utils/Sass/home.scss";

const Home = () => {
  const consent = useRef()
  const Consent = localStorage.getItem("Consent");

  const CookieOk = () => {
    localStorage.setItem("Consent", true);
    setTimeout(()=>{
      window.location.reload()
    },500)
  }
  

  return (
    <>
      <div id="cookieConsent" ref={consent} className={Consent ? "hide" : ""}>
        <p>
          Ce site utilise des cookies. Ces cookies sont néscéssaire au bon
          fonctionnement du site (connexion utilisateur) et ne récupèrent pas
          d'information personelles.
        </p>
        <button onClick={CookieOk}>
          J'ai pris connaissance de cette information
        </button>
      </div>
      <section id="Home">
        <h1 style={{ display: "none" }}>Accueil</h1>
        <div id="HomeSplit1">
          <div id="SpliteUp">
            <h2>Services</h2>
            <p>
              Explorez une collection variée de recettes alléchantes, des
              classiques salés aux desserts délicieux. Libérez votre chef
              intérieur avec des instructions, des conseils et des astuces étape
              par étape. Enregistrez vos propres recettes afin de créer un
              carnet personnalisé ou bien consultez celles mises à votre
              disposition.
            </p>
          </div>
          <div id="SpliteDown">
            <div id="ToRecipes">
              <img
                src="/Icons/RecettesIcon.svg"
                alt="Icone Recettes"
                className="Icone"
              />
              <h2>Recettes</h2>
              <p>
                Parcourez un large panel de recettes allant des basiques comme
                la pate brisée, jusqu'aux recettes un peu plus complexes mises à
                disposition.
              </p>
              <Link to={"/Recettes"}>
                <p>Consulter</p>
                <img src="/Icons/Fleche.svg" alt="Fleche" />
              </Link>
            </div>
            <div id="ToCarnet">
              <img
                src="/Icons/CarnetIcon.svg"
                alt="Icone Recettes"
                className="Icone"
              />
              <h2>Carnet</h2>
              <p>
                Connectez vous ou créez un compte pour pouvoir créer des fiches
                recettes personnelles sur lequel vous pourrez lister les
                ingrédients, les étapes, etc ... Vous pourrez retrouver toutes
                ces fiches dans un carnet bien rangé.
              </p>
              <Link to={"/ToCarnet"}>
                <p>Parcourir</p>
                <img src="/Icons/Fleche.svg" alt="Fleche" />
              </Link>
            </div>
          </div>
          <div id="SpliteFurtherDown">
            <h2>A Propos de nous</h2>
            <p>
              Notre équipe est un délicieux mélange de passionnés culinaires et
              de passionnés de codage. Avec une passion pour la nourriture et la
              technologie, nous avons élaboré la recette parfaite pour une
              expérience culinaire exceptionnelle. <br />
              <br />
              Nous ne sommes pas seulement des développeurs, nous sommes aussi
              des gourmets! Nous comprenons l’art de la cuisine et la science du
              codage. Cette fusion unique de savoir-faire nous permet de créer
              un site de cuisine non seulement fonctionnel, mais aussi un régal
              pour vos sens.
            </p>
          </div>
        </div>
        <div id="HomePicture">
          <img src="/Images/Home1.jpg" alt="Carousel 1" />
          <img src="/Images/Home2.jpg" alt="Carousel 2" />
          <img src="/Images/Home3.jpg" alt="Carousel 3" />
        </div>
      </section>
    </>
  );
};

export default Home;
