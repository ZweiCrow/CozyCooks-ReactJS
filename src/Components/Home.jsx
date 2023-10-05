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
    <div id="cookieConsent" ref={consent} className={(Consent) ? "hide" : ""}>
      <p>
        Ce site utilise des cookies. Ces cookies sont néscéssaire au bon fonctionnement du site (connexion utilisateur) et ne récupèrent pas d'information personelles. 
      </p>
      <button onClick={CookieOk}>J'ai pris connaissance de cette information</button>
    </div>
    <section id="Home">
      <h1 style={{ display: "none" }}>Accueil</h1>
      <div id="HomeSplit1">
        <div id="SpliteUp">
          <h2>Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum ...
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum ...
            </p>
            <Link to={"/Recettes"}>
              <p>Consulter les recettes</p>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum ...
            </p>
            <Link to={"/Carnet"}>
              <p>Parcourir le carnet</p>
              <img src="/Icons/Fleche.svg" alt="Fleche" />
            </Link>
          </div>
        </div>
        <div id="SpliteFurtherDown">
          <h2>A Propos de nous</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum ...
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
