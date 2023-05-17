import React, { useEffect, useRef } from 'react';
import "../Utils/Sass/footer.scss"
import { Link } from 'react-router-dom';

const Footer = () => {
  const backToTop = useRef();

  useEffect(()=>{
    const handleClick = (e) => {
      if(backToTop.current.contains(e.target)){ // Si le clic se trouve dans la zone du menu, il reste ouvert, sinon il se ferme
        window.scrollTo(0, 0);
      }
    }
    document.addEventListener("click",handleClick)
  })



  return (
    <footer>
      <div id='backToTop' ref={backToTop}><img src="./Icons/BackToTop.svg" alt="Retour Haut de Page" /></div>
      <div id='footerDown'>
        <ul>
          <li>
            <p>Mentions Légales</p>
            <Link>CGU</Link>
            <Link>RGPD</Link>
          </li>
          <li>
            <Link><img src="./Icons/Instagram.svg" alt="Lien Logo Instagram" /></Link>
            <Link><img src="./Icons/Facebook.svg" alt="Lien Logo Facebook" /></Link>
          </li>
          <li>
            <p>Plan du site</p>
            <Link to={"/"}>Accueil</Link>
            <Link to={"/Recettes"}>Recettes</Link>
            <Link to={"/Carnet"}>Carnet</Link>
            <Link to={"/AboutUs"}>About Us</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;