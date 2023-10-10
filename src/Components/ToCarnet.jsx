import React from 'react';
import "../Utils/Sass/toCarnet.scss"
import { Link } from 'react-router-dom';

const ToCarnet = () => {
  return (
    <div id="IntroCarnet">
      <div id="ToCarnetL">
        <img src="/Images/Carnet2.jpg" alt="Carnet" />
      </div>
      <div id="ToCarnetR">
        <h1>Carnet</h1>
        <p>
          Un carnet culinaire numérique, soigneusement conçu pour simplifier
          votre expérience de cuisine. Avec notre plate-forme conviviale, vous
          pouvez créer, stocker et accéder à vos recettes préférées à tout
          moment, n’importe où. <br />
          <br />
          Créer vos recettes n’a jamais été aussi simple. Notre générateur de
          recettes intuitif vous permet d’ajouter des ingrédients, des
          instructions, et même de télécharger des photos alléchantes pour donner
          vie à vos créations culinaires.
          <br />
          <br />
          Ce carnet vous permet de catégoriser, étiqueter et rechercher vos
          recettes avec précision. Trouvez la recette de dessert parfaite ou le
          dîner en semaine en quelques secondes.
          <br />
          <br />
          Que vous soyez dans la cuisine ou à l’épicerie, accédez à toute votre
          collection de recettes sur votre appareil mobile. Plus besoin de
          feuilleter les livres de cuisine ou de chercher cette carte de
          recettes insaisissable.
        </p>
        <div>
          <Link to={"/Carnet"}>
            <p>Consulter</p>
          </Link>
          <Link to={"/User/Connexion"}>
            <p>Connexion</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToCarnet;