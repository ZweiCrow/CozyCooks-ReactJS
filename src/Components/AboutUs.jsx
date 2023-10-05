import React, { useRef, useState } from "react";
import axios from "axios"
import "../Utils/Sass/aboutus.scss";
import { URL } from "../Utils/Urls";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  const [nom, setNom] = useState("")
  const [prenom, setPrenom] = useState("")
  const [message, setMessage] = useState("")
  const [mail, setMail] = useState("")

  const errFirst = useRef()
  const errLast = useRef()
  const errMessage = useRef()
  const errMail = useRef()
  const confirmTag = useRef()

  const submit = (e) => {
    e.preventDefault();
    verif()
  }

  const verif = () => {
    if (nom !== "" && prenom !== "" && message !== "" && mail !== ""){
      send()
    }
    if(nom === ""){
      errFirst.current.classList.add("show")
    }else{
      errFirst.current.classList.remove("show")
    }
    if(prenom === ""){
      errLast.current.classList.add("show")
    }else{
      errLast.current.classList.remove("show")
    }
    if(message === ""){
      errMessage.current.classList.add("show")
    }else{
      errMessage.current.classList.remove("show")
    }
    if(mail === ""){
      errMail.current.classList.add("show")
    }else{
      errMail.current.classList.remove("show")
    }
  }

  const send = () => {
    const email = {nom: nom, prenom: prenom, mail: mail, message: message}
    axios.post(URL.sendMessage, email)
    window.scrollTo(0, 0);
    confirmTag.current.classList.add("showM")
    document.querySelector("body").style.overflow = "hidden" 
    setTimeout(()=>{
      document.querySelector("body").style.overflow = "visible" 
      navigate('/');
    }, 1500)
  }


  return (
    <>
    <div id="confirmTag" className="hide" ref={confirmTag}>
      <div id="TagMessage">
        <p>Votre message à bien été envoyé.</p>
      </div>
    </div>
    <section id="About">
      <h1 style={{ display: "none" }}>A Propos</h1>
      <div id="ALeft">
        <div id="contactus">
          <h2>Envie de nous contacter ?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            euismod enim dolor, eget convallis sem porta sed. Curabitur semper
            tempor erat, ut eleifend tellus.
          </p>
          <form onSubmit={submit}>
            <div className="champContact">
              <label htmlFor="Nom">Nom <span>*</span></label>
              <input  type="text" name="Nom" id="Nom" placeholder="Entrer votre nom ici ..." onChange={(e)=>setNom(e.target.value)}/>
              <p className="hide" ref={errFirst}>* Champ obligatoire</p>
            </div>
            <div className="champContact">
              <label htmlFor="Prenom">Prénom <span>*</span></label>
              <input  type="text" name="Prenom" id="Prenom" placeholder="Entrer votre prénom ici ..." onChange={(e)=>setPrenom(e.target.value)}/>
              <p className="hide" ref={errLast}>* Champ obligatoire</p>
            </div>
            <div className="champContact" id="champMessage">
              <label htmlFor="Message">Message <span>*</span></label>
              <textarea  name="Message" id="Message" placeholder="Entrer votre message ici ..." maxLength={5000} onChange={(e)=>setMessage(e.target.value)}/>
              <p className="hide" ref={errMessage}>* Champ obligatoire</p>
            </div>
            <div className="champContact">
              <label htmlFor="Email">Email <span>*</span></label>
              <input  type="email" name="Email" id="Email" placeholder="Entrer votre email ici ..." onChange={(e)=>setMail(e.target.value)}/>
              <p className="hide" ref={errMail}>* Champ obligatoire</p>
            </div>
            <button>Envoyer</button>
          </form>
        </div>
      </div>
      <div id="ARight"></div>
    </section>
    </>
  );
};

export default AboutUs;
