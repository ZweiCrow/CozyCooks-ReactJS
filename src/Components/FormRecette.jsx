import React, { useState } from 'react';
import "../Utils/Sass/formRecette.scss"
import Cookies from 'js-cookie';
import axios from 'axios';
import { URL } from '../Utils/Urls';
import { useNavigate } from 'react-router-dom';

const FormRecette = () => {
  const navigate = useNavigate();
  const [Refresh, setRefresh] = useState(false)
  const [Nom, setNom] = useState("")
  const [Auteur, setAuteur] = useState("")
  const [Niveau, setNiveau] = useState("")
  const [Style, setStyle] = useState("")
  const [Categorie, setCategorie] = useState("")
  const [Temps, setTemps] = useState("")
  const [Display, setDisplay] = useState("")
  const [Image, setImage] = useState({})
  const [Ingredients, setIngredients] = useState([{quantité: 10, unité: "mg", nom: "de sucre"}])
  const [Etapes, setEtapes] = useState([""])

  let index1 = 0;
  let index2 = 0;

  const userId = Cookies.get('TokenForDNSUser')

  const HandleFile = (e)=> {
      const file = e.target.files[0]
      
      const dt = new Date();
      const padL = (nr, len = 2, chr = `0`) => `${nr}`.padStart(2, chr);
      const date = `${padL(dt.getMonth()+1)}${padL(dt.getDate())}${dt.getFullYear()}${padL(dt.getHours()-2)}2${padL(dt.getMinutes())}`

      setDisplay('/images/'+date+file.name)
      console.log(date);
    }

  const HandleImage = ()=> {
    const file = document.querySelector('#Display').files[0];

    var formData = new FormData();
    formData.append("image", file);
    axios.post(URL.addImage, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    })
  }

  const Send = (e)=> {
    e.preventDefault()
    HandleImage()
    const recette = {
      nom: Nom,
      auteur: userId,
      niveau: Niveau,
      style: Style,
      categorie: Categorie,
      temps: Number(Temps),
      display: Display,
      ingredients: Ingredients,
      etapes: Etapes,
    }
    // console.log(recette);

    // axios.post(URL.addRecipe,{
    //   nom: Nom,
    //   auteur: userId,
    //   niveau: Niveau,
    //   style: Style,
    //   categorie: Categorie,
    //   temps: Number(Temps),
    //   display: Display,
    //   ingredients: Ingredients,
    //   etapes: Etapes,
    // })
    // setTimeout(()=>{
    //   navigate('/Carnet');
    // }, 1000)
  }

  return (
    <form id='FormRecette' onSubmit={Send} encType="multipart/form-data">
      <div className='box'>
        <label htmlFor="nom">Nom de la recette</label>
        <input type="text" id='nom' onChange={(e)=>{setNom(e.target.value)}} required/>
      </div>
      <div className='box'>
        <label htmlFor="temps">Temps de préparation total</label>
        <input type="number" id='temps' onChange={(e)=>{setTemps(e.target.value)}} required/>
      </div>
      <div className='box'>
        <label htmlFor="Categories">Categorie</label>
        <select name="Categories" id="Categories" onChange={(e)=>setCategorie(e.target.value)} required>
          <option value="">Categorie</option>
          <option value="Entree">Entree</option>
          <option value="Plat">Plat</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <div className='box'>
        <label htmlFor="Styles">Style</label>
        <select name="Styles" id="Styles" onChange={(e)=>setStyle(e.target.value)}>
          <option value="">Style</option>
          <option value="Asiatique">Asiatique</option>
          <option value="Indienne">Indienne</option>
          <option value="Thaïlandaise">Thaïlandaise</option>
          <option value="Mexicaine">Mexicaine</option>
          <option value="Antillaise">Antillaise</option>
        </select>
      </div>
      <div className='box'>
        <label htmlFor="Niveaux">Niveau</label>
        <select name="Niveaux" id="Niveaux" onChange={(e)=>setNiveau(e.target.value)} required>
          <option value="">Niveau</option>
          <option value="Débutant">Débutant</option>
          <option value="Intermédiaire">Intermédiaire</option>
          <option value="Confirmé">Confirmé</option>
        </select>
      </div>
      <div className='box'>
        <label htmlFor="Display">Image</label>
        <input type="file" name='Display' id='Display' onChange={HandleFile} required/>
      </div>

      <div id='ingredients'>
        <h2>Ingredients</h2>

        {Ingredients.map((item)=>{
          index1++
          const position = index1-1;
          return(
          <div className='entry' key={index1}>
            <input type="number" id='quantité' name='quantité' placeholder='Quantité' onChange={(e)=>{item.quantité = e.target.value}} />
            <select name="Unité" id="Unité" onChange={(e)=>{item.unité = e.target.value}}>
              <option value="" >Unité</option>
              <option value="g" >g</option>
              <option value="mg" >mg</option>
              <option value="ml" >ml</option>
              <option value="cl" >cl</option>
            </select>
            <input type="text" id='ingredient' name='ingredient' placeholder='ingredient' onChange={(e)=>{item.nom = e.target.value}}/>
            <div className='minus' onClick={()=>{
                Ingredients.splice(position,1);
                setRefresh(!Refresh)
              }}>
              <img src="./Icons/Minus.svg" alt="" />
            </div>
          </div>
          )
        })}
        <div className='plus' onClick={()=>{
          Ingredients.push({quantité: 10, unité: "", nom: ""});
          setRefresh(!Refresh)
        }}>
          <img src="./Icons/Plus.svg" alt="" />
        </div>
      </div>

      <div id='etapes'>
        <h2>Etapes</h2>

        {Etapes.map((item)=>{
          index2++;
          const position = index2-1;
          return(
            <div className='step' key={index2}>
              <textarea type="text" placeholder={`Etape ${index2}`} onChange={(e)=>{Etapes[position] = e.target.value}}/>
              <div className='minus' onClick={()=>{
                  Etapes.splice(position,1);
                  setRefresh(!Refresh)
                }}>
                <img src="./Icons/Minus.svg" alt="" />
              </div>
            </div>
          )
        })}

        <div className='plus' onClick={()=>{
            Etapes.push("");
            setRefresh(!Refresh)
          }}>
          <img src="./Icons/Plus.svg" alt="" />
        </div>

      </div>

      <button>Créer la fiche</button>
    </form>
  );
};

export default FormRecette;