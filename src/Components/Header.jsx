import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import "../Utils/Sass/header.scss"


const Header = () => {
  const [mobile, setMobile] = useState(false)
  const NavHome = useRef();
  const NavRecette = useRef();
  const NavCarnet = useRef();
  const NavAboutUs = useRef();
  const Pointer = useRef();
  const BoutonMobile = useRef();

  const on = true

  const { pathname } = useLocation();

  
  useEffect(()=>{ // Bouge le curseur sous la bonne rubrique
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
    if(window.location.pathname.includes("/AboutUs")){
      Pointer.current.style.opacity = "1" 
      Pointer.current.style.transform = `translateX(${NavAboutUs.current.offsetLeft+(NavAboutUs.current.offsetWidth/4)}px)`
    }
    if(window.location.pathname.includes("/Connexion")){
      Pointer.current.style.opacity = "0" 
    }

    
    
    if(mobile){
      const Menu = document.querySelector("#MenuMobile");
      Menu.classList.remove("hiddenBlock");
      Menu.classList.add("activeBlock");
      setTimeout(()=>{
        Menu.classList.remove("hidden");
        Menu.classList.add("active");
      },10)
    }
    if(!mobile){
      setTimeout(()=>{
        const Menu = document.querySelector("#MenuMobile");
        Menu.classList.remove("active");
        Menu.classList.add("hidden");
        setTimeout(()=>{
          Menu.classList.remove("activeBlock");
          Menu.classList.add("hiddenBlock");
        },500)
      },10)
    }

    let handler = (e)=>{
      if(!BoutonMobile.current.contains(e.target)){ // Si le clic se trouve dans la zone du menu, il reste ouvert, sinon il se ferme
        setMobile(false)
      }
    }
    
    document.addEventListener("mousedown",handler) // Lance la fonction handler lors d'un  clic

    window.scrollTo(0, 0);

  })


  return (
    <header>
      <div id='Header'>
        <div id='logo'>
          <Link to={"/"}><img src="./Icons/LogoWhite.svg" alt="" /></Link>
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
              <li><Link ref={NavAboutUs} to={"/AboutUs"} className={(window.location.pathname.includes("AboutUs")) ? "activeNav" : ""}>AboutUs</Link></li>
            </ul>
            <div id='Pointer' ref={Pointer}></div>
          </div>
        </div>
        <div id='HeaderMobile'>
          <div id='BoutonMobile' ref={BoutonMobile} onClick={()=>{setMobile(!mobile)}} >
            <img src="./Icons/User.svg" alt="Bouton Mobile" />
          </div>
          <div id='MenuMobile'>
            <ul>
              <li><Link to={"/"} className={(window.location.pathname === "/") ? "activeNav" : ""}>Accueil</Link></li>
              <li><Link to={"/Recettes"} className={(window.location.pathname.includes("/Recettes")) ? "activeNav" : ""}>Recettes</Link></li>
              <li><Link to={"/Carnet"} className={(window.location.pathname.includes("/Carnet")) ? "activeNav" : ""}>Carnet</Link></li>
              <li><Link to={"/About Us"} className={(window.location.pathname.includes("/AboutUs")) ? "activeNav" : ""}>AboutUs</Link></li>
              <li><Link to={"/Connexion"}>
                <div className={(window.location.pathname.includes("Connexion"))||(window.location.pathname.includes("Inscription")) ? "activeNav" : ""}>
                  <img src="./Icons/User.svg" alt="" />
                  <p>Connexion</p>
                </div>
              </Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div id='HeaderCarousel' style={(window.location.pathname !== "/") ? {display: "none"} : null}>
        <img src="./Images/Carousel1.png" alt="Carousel1"/>
      </div>
    </header>
  );
};

export default Header;