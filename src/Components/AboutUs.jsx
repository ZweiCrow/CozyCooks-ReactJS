import React, { useRef, useState } from "react";
import "../Utils/Sass/aboutus.scss";

const AboutUs = () => {
  const [nom, setNom] = useState("")
  const [prenom, setPrenom] = useState("")
  const [message, setMessage] = useState("")
  const [mail, setMail] = useState("")

  const errFirst = useRef()
  const errLast = useRef()
  const errMessage = useRef()
  const errMail = useRef()

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
    console.log("ok !🦦");
  }


  return (
    <section id="About">
      <h1 style={{ display: "none" }}>A Propos</h1>
      <div id="ALeft">
        <div id="aboutus">
          <h2>A Propos de nous</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            euismod enim dolor, eget convallis sem porta sed. Curabitur semper
            tempor erat, ut eleifend tellus. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Nam quis
            neque at urna placerat dictum. Donec viverra nibh eget odio aliquet
            feugiat.
          </p>
        </div>
        <div id="contactus">
          <h2>Envie de nous contacter ?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            euismod enim dolor, eget convallis sem porta sed. Curabitur semper
            tempor erat, ut eleifend tellus.
          </p>
          <form onSubmit={submit}>
            <div className="champContact">
              <label htmlFor="Nom">Nom</label>
              <input  type="text" name="Nom" id="Nom" placeholder="Entrer votre nom ici ..." onChange={(e)=>setNom(e.target.value)}/>
              <p className="hide" ref={errFirst}>* Champ obligatoire</p>
            </div>
            <div className="champContact">
              <label htmlFor="Prenom">Prénom</label>
              <input  type="text" name="Prenom" id="Prenom" placeholder="Entrer votre prénom ici ..." onChange={(e)=>setPrenom(e.target.value)}/>
              <p className="hide" ref={errLast}>* Champ obligatoire</p>
            </div>
            <div className="champContact" id="champMessage">
              <label htmlFor="Message">Message</label>
              <textarea  name="Message" id="Message" placeholder="Entrer votre message ici ..." onChange={(e)=>setMessage(e.target.value)}/>
              <p className="hide" ref={errMessage}>* Champ obligatoire</p>
            </div>
            <div className="champContact">
              <label htmlFor="Email">Email</label>
              <input  type="email" name="Email" id="Email" placeholder="Entrer votre email ici ..." onChange={(e)=>setMail(e.target.value)}/>
              <p className="hide" ref={errMail}>* Champ obligatoire</p>
            </div>
            <button>Envoyer</button>
          </form>
        </div>
      </div>
      <div id="ARight"></div>
    </section>
  );
};

export default AboutUs;
