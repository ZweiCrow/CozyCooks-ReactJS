import React, { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import "../Utils/Sass/header.scss"


const Header = () => {
  const NavHome = useRef();
  const NavRecette = useRef();
  const NavCarnet = useRef();
  const NavContacts = useRef();
  const Pointer = useRef();

  useEffect(()=>{
    if(window.location.pathname === "/"){
      Pointer.current.style.opacity = "1" 
      Pointer.current.style.transform = `translateX(${NavHome.current.offsetLeft+(NavHome.current.offsetWidth/4)}px)`
    }
    if(window.location.pathname.includes("/Recettes")){
      Pointer.current.style.opacity = "1" 
      Pointer.current.style.transform = `translateX(${NavRecette.current.offsetLeft+(NavRecette.current.offsetWidth/4)}px)`
    }
    if(window.location.pathname.includes("/Carnet")){
      Pointer.current.style.opacity = "1" 
      Pointer.current.style.transform = `translateX(${NavCarnet.current.offsetLeft+(NavCarnet.current.offsetWidth/4)}px)`
    }
    if(window.location.pathname.includes("/Contacts")){
      Pointer.current.style.opacity = "1" 
      Pointer.current.style.transform = `translateX(${NavContacts.current.offsetLeft+(NavContacts.current.offsetWidth/4)}px)`
    }
    if(window.location.pathname.includes("/Connexion")){
      Pointer.current.style.opacity = "0" 
    }
  })


  return (
    <header>
      <div id='Header'>
        <div id='logo'>
          <img src="./Icons/LogoWhite.svg" alt="" />
        </div>
        <div id='HeaderRight'>
          <div id='NavUp' className='Nav'>
            <Link to={"/Connexion"}>
              <div className={(window.location.pathname.includes("Connexion"))||(window.location.pathname.includes("Inscription")) ? "activeButton" : ""}>
                <img src="./Icons/User.svg" alt="" />
                <p>Connexion</p>
              </div>
            </Link>
          </div>
          <div id='NavDown' className='Nav'>
            <ul>
              <li><Link ref={NavHome} to={"/"} className={(window.location.pathname === "/") ? "activeNav" : ""}>Accueil</Link></li>
              <li><Link ref={NavRecette} to={"/Recettes"} className={(window.location.pathname.includes("Recettes")) ? "activeNav" : ""}>Recettes</Link></li>
              <li><Link ref={NavCarnet} to={"/Carnet"} className={(window.location.pathname.includes("Carnet")) ? "activeNav" : ""}>Carnet</Link></li>
              <li><Link ref={NavContacts} to={"/Contacts"} className={(window.location.pathname.includes("Contacts")) ? "activeNav" : ""}>Contacts</Link></li>
            </ul>
            <div id='Pointer' ref={Pointer}></div>
          </div>
        </div>
      </div>
      <div id='HeaderCarousel' style={(window.location.pathname !== "/") ? {display: "none"} : null}>
        <img src="./Images/Carousel1.png" alt="Carousel1" />
      </div>
    </header>
  );
};

export default Header;