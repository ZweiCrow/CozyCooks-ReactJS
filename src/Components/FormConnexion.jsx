import React, { useState } from 'react';
import axios from "axios"
import Cookies from 'js-cookie';
import "../Utils/Sass/formConnexion.scss"
import { URL } from '../Utils/Urls';
import { useNavigate } from 'react-router-dom';

const FormConnexion = () => {
  const navigate = useNavigate();
  const [mail, setMail] = useState("")
  const [pass, setPass] = useState("")
  

  const VerifRegex = ()=> {
    const passRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (passRegex.test(pass)) {
      const warnPass = document.querySelector("#warnPass")
      warnPass.style.opacity = 0;
    } else {
      const warnPass = document.querySelector("#warnPass")
      warnPass.style.opacity = 1;
    }

    if(passRegex.test(pass) && mail !== ""){
      VerifBDD()
    }
  }

  const VerifBDD = ()=> {
    axios.post(URL.verifyUser, {
      email: mail,
      password: pass
    }).then(response => {
      const userToken = response.data.message
      const warnVerif = document.querySelector("#warnVerif")

      if(userToken === "No user found"){
        warnVerif.innerHTML = "Addresse mail incorrecte"
        warnVerif.style.opacity = 1;
      } else { 
        warnVerif.style.opacity = 0;
        if(userToken === "Wrong password"){
          warnVerif.innerHTML = "Mauvais mot de passe"
          warnVerif.style.opacity = 1;
        } else { 
          warnVerif.style.opacity = 0;
        }
      }

      if(userToken !== "No user found" && userToken !== "Wrong password"){
        Cookies.set("TokenForDNSUser", userToken, { expires: 1 });
        setTimeout(()=>{
          navigate('/');
        }, 500)
      }
    })
  }

  const Submit = (e) => {
    e.preventDefault()
    VerifRegex()
  }

  return (
    <div id='formConnexion'>
      <form id='FormConnexion' onSubmit={Submit}>
        <input type="email" className='entry' onChange={(e)=>{setMail(e.target.value)}} placeholder='Email'/>
        <p className='warning' id='warnMail'>Mauvais email</p>
        <input type="password" className='entry' onChange={(e)=>{setPass(e.target.value)}} placeholder='Mot de Passe'/>
        <p className='warning' id='warnPass'>Mauvais mot de passe <br/>(1 minuscule, 1 majuscule, 1 chiffre et 1 charactère spécial)</p>
        <button>Se Connecter</button>
        <p className='warning' id='warnVerif' style={{marginTop: "30px"}}>Erreur</p>
      </form>
    </div>
  );
};

export default FormConnexion;