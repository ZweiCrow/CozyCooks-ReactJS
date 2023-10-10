import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "../Utils/Sass/header.scss"


const Header = () => {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState(false)
  const NavHome = useRef();
  const NavRecette = useRef();
  const NavCarnet = useRef();
  const NavAboutUs = useRef();
  const Pointer = useRef();
  const BoutonMobile = useRef();

  const on = true

  const { pathname } = useLocation();
  const user = Cookies.get('TokenForDNSUser')
  

  
  useEffect(()=>{ // Bouge le curseur sous la bonne rubrique
    if(window.location.pathname === "/"){
      Pointer.current.style.opacity = "1" 
      Pointer.current.style.transform = `translateX(${NavHome.current.offsetLeft+(NavHome.current.offsetWidth/4)}px)`
    }
    if(window.location.pathname.includes("/Recettes") || window.location.pathname.includes("/PageRecette")){
      Pointer.current.style.opacity = "1" 
      Pointer.current.style.transform = `translateX(${NavRecette.current.offsetLeft+(NavRecette.current.offsetWidth/4)}px)`
    }
    if(window.location.pathname.includes("/Carnet") || window.location.pathname.includes("/Formulaire") || (window.location.pathname.includes("ToCarnet"))) {
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

  const Deconnexion = () => {
    if (user) {
      if(window.confirm("Etes vous sur de vouloir vous déconnecter ?")){
        Cookies.remove('TokenForDNSUser')
        window.location.reload()
      }
    }
    if (!user) {
      setTimeout(()=>{
        navigate('/User/Connexion');
      }, 100)
    }
  }


  return (
    <header>
      <div id='Header'>
        <div id='logo'>
          <Link to={"/"}><img src="/Icons/LogoWhite.svg" alt="Logo Site" /></Link>
        </div>
        <div id='HeaderRight'>
          <div id='NavUp' className='Nav'>
            <Link className={(user)? "" : "NoUser"} onClick={Deconnexion}>
              <div className={(window.location.pathname.includes("User")) ? "activeButton" : ""}>
                <img src={(user)? "/Icons/User.svg" : "/Icons/UserW.svg" } alt="Icone Connexion Utilisateur" />
                <p>{(user)? "Déconnexion" : ""}</p>
              </div>
            </Link>
          </div>
          <div id='NavDown' className='Nav'>
            <ul>
              <li><Link ref={NavHome} to={"/"} className={(window.location.pathname === "/") ? "activeNav" : ""}>Accueil</Link></li>
              <li><Link ref={NavRecette} to={"/Recettes"} className={(window.location.pathname.includes("Recettes")) ? "activeNav" : ""}>Recettes</Link></li>
              <li><Link ref={NavCarnet} to={"/ToCarnet"} className={(window.location.pathname.includes("Carnet")) || (window.location.pathname.includes("ToCarnet")) ? "activeNav" : ""}>Carnet</Link></li>
              <li><Link ref={NavAboutUs} to={"/AboutUs"} className={(window.location.pathname.includes("AboutUs")) ? "activeNav" : ""}>Contact</Link></li>
            </ul>
            <div id='Pointer' ref={Pointer}></div>
          </div>
        </div>
        <div id='HeaderMobile'>
          <div id='BoutonMobile' ref={BoutonMobile} onClick={()=>{setMobile(!mobile)}} >
            <img src="/Icons/UserW.svg" alt="Bouton Mobile" />
          </div>
          <div id='MenuMobile'>
            <ul>
              <li><Link to={"/"} className={(window.location.pathname === "/") ? "activeNav" : ""}>Accueil</Link></li>
              <li><Link to={"/Recettes"} className={(window.location.pathname.includes("/Recettes")) ? "activeNav" : ""}>Recettes</Link></li>
              <li><Link to={"/ToCarnet"} className={(window.location.pathname.includes("/Carnet")) ? "activeNav" : ""}>Carnet</Link></li>
              <li><Link to={"/AboutUs"} className={(window.location.pathname.includes("/AboutUs")) ? "activeNav" : ""}>Contact</Link></li>
              <li><Link onClick={Deconnexion}>
                <div className={(window.location.pathname.includes("Connexion"))||(window.location.pathname.includes("Inscription")) ? "activeNav" : ""}>
                  <img src="/Icons/User.svg" alt="Icone Connexion Utilisateur" />
                  <p>{(user)? "Déconnexion" : "Connexion"}</p>
                </div>
              </Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div id='HeaderCarousel' style={(window.location.pathname !== "/") ? {display: "none"} : null}>
        <img src="/Images/Carousel1.png" alt="Carousel1"/>
      </div>
    </header>
  );
};

export default Header;