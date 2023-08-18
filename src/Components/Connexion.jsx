import React, { useState } from 'react';
import "../Utils/Sass/connexion.scss"
import { Link, Outlet } from "react-router-dom";

const Connexion = () => {
  const [choice, setChoice] = useState("connexion")
  document.body.style.overflow = "visible"

  if(choice === "inscription"){
    setTimeout(()=>{
      const barre = document.querySelector("#select")
      barre.style.left = "50.4%"
    },1)
  }
  if(choice === "connexion"){
    setTimeout(()=>{
      const barre = document.querySelector("#select")
      barre.style.left = "0%"
    },1)
  }

  return (
    <div id='Connexion'>
      <h1 style={{display: 'none'}}>Connexion / Inscription</h1>
      <section id='Choix'>
        <div id='select' className='barreL'></div>
        <Link to={"/User/Connexion"} className={(choice === "connexion")? "choosen" : ""} onClick={()=>{setChoice("connexion")}}>Se Connecter</Link>
        <Link to={"/User/Inscription"} className={(choice === "inscription")? "choosen" : ""} onClick={()=>{setChoice("inscription")}}>S'inscrire</Link>
      </section>
      
      <div id='outletContainer'>
        <Outlet/>
      </div>
    </div>
  );
};

export default Connexion;