import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Utils/Sass/formInscription.scss"
import axios from 'axios';
import { URL } from '../Utils/Urls';

const FormInscription = () => {
  const navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [nom, setNom] = useState("");
  const [pass, setPass] = useState("");
  const [passVerif, setPassVerif] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e)=> {
    e.preventDefault()
    VerifyRegex()
  }

  const VerifyRegex = ()=> {
    const passRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (mail !== "") {
      const warnMail = document.querySelector("#warnMail")
      warnMail.style.opacity = 0;
    } else {
      const warnMail = document.querySelector("#warnMail")
      warnMail.style.opacity = 1;
    }

    if (passRegex.test(pass)) {
      const warnPass = document.querySelector("#warnPass")
      warnPass.style.opacity = 0;
    } else {
      const warnPass = document.querySelector("#warnPass")
      warnPass.style.opacity = 1;
    }

    if (pass === passVerif) {
      const warnPassVerif = document.querySelector("#warnPassVerif")
      warnPassVerif.style.opacity = 0;
    } else {
      const warnPassVerif = document.querySelector("#warnPassVerif")
      warnPassVerif.style.opacity = 1;
    }

    if (checked === true) {
      const checktext = document.querySelector("#checktext")
      checktext.style.color = "#748599";
    } else {
      const checktext = document.querySelector("#checktext")
      checktext.style.color = "#E57B2E";
    }

    if(passRegex.test(pass) && mail !== "" && nom !== "" && pass === passVerif && checked === true){
      VerifyBDD()
    }
  }

  const VerifyBDD = ()=> {
    axios.post(URL.addUser,{
      nom: nom,
      email: mail.toLowerCase(),
      password: pass
    })
    .then(response=>{
      const serverResponse = response.data
      if (serverResponse === "User with this email already exist") {
        const warnMail = document.querySelector("#warnMail")
        warnMail.innerHTML = "Adresse mail déjà utilisée";
        warnMail.style.opacity = 1;
      } else {
        const warnMail = document.querySelector("#warnMail")
        warnMail.innerHTML = "Adresse mail obligatoire";
        warnMail.style.opacity = 0;
        setTimeout(()=>{
          navigate('/User/Connexion');
        }, 500)
      }
    })
  }


  return (
    <div id='formInscription'>
      <form id='FormInscription' onSubmit={handleSubmit}>
        <input type="email" className='entry'placeholder='Email' onChange={(e)=>{setMail(e.target.value)}}/>
        <input type="text" className='entry'placeholder='Nom' onChange={(e)=>{setNom(e.target.value)}}/>

        <p className='warning' id='warnMail'>Adresse mail obligatoire</p>

        <input type="password" className='entry'placeholder='Mot de passe' onChange={(e)=>{setPass(e.target.value)}}/>
        <input type="password" className='entry'placeholder='Confirmer le mot de passe' onChange={(e)=>{setPassVerif(e.target.value)}}/>

        <p className='warning' id='warnPass'>Mot de passe incorrect<br/>(1 minuscule, 1 majuscule, 1 chiffre et 1 charactère spécial)</p>
        <p className='warning' id='warnPassVerif'>Mauvais mot de passe</p>

        <div id='check'>
          <input type="checkbox" name="consent" id="consent" onClick={()=>{ setChecked(!checked)}}/>
          <label htmlFor="consent" id='checktext'>
          J'accepte les Conditions générales d'Utilisation et 
          reconnais avoir été informé que mes données personnelles seront utilisées tel que décrit dans ces dernières.
          </label>
        </div>
        
        
        <button>Valider</button>
      </form>
    </div>
  );
};

export default FormInscription;