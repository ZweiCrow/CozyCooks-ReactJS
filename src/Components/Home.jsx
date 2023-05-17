import React from "react";
import { Link } from "react-router-dom";
import "../Utils/Sass/home.scss";

const Home = () => {

  return (
    <section id="Home">
      <h1 style={{ display: "none" }}>Accueil</h1>
      <div id="HomeSplit1">
        <div id="SpliteUp">
          <h2>Contexte</h2>
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
              src="./Icons/RecettesIcon.svg"
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
              <p>Aller à la page recettes</p>
              <img src="./Icons/Fleche.svg" alt="Fleche" />
            </Link>
          </div>
          <div id="ToCarnet">
            <img
              src="./Icons/CarnetIcon.svg"
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
              <p>Aller à la page carnet</p>
              <img src="./Icons/Fleche.svg" alt="Fleche" />
            </Link>
          </div>
        </div>
      </div>
      <img id="HomePicture" src="./Images/Home3.jpg" alt="Illustration Site" />
    </section>
  );
};

export default Home;
