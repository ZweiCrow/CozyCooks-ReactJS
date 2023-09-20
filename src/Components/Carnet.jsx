import React, { useEffect, useState } from 'react';
import axios from "axios"
import "../Utils/Sass/recette-carnet.scss"
import { URL } from '../Utils/Urls';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const Carnet = () => {
  const [search, setSearch] = useState("")
  const [Categorie, setCategorie] = useState("")
  const [Style, setStyle] = useState("")
  const [Niveau, setNiveau] = useState("")
  const [Actual, setActual] = useState(0)
  const [RecipesList, setRecipesList] = useState([]);
  const [User, setUser] = useState([]);
  const pages = [];
  
  const user = Cookies.get('TokenForDNSUser')

  let counter =0;
  let recipeStart = Actual * 8;

  useEffect(()=>{
    const fetchRecipes = async ()=>{
      try {
        if(typeof(user) === "string"){
          const {data} = await axios.get(URL.fetchRecipesOfUser + user)
          setRecipesList(data)
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    const fetchUser = async ()=>{
      try {
        if(typeof(user) === "string"){
          const {data} = await axios.get(URL.fetchUsersById+user)
          setUser(data)
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchRecipes();
    fetchUser();
  },[])


  if(RecipesList.length > 8){
    for (let i = 1; i <= Math.ceil((RecipesList.length) / 8); i++) {
      pages.push(i)
    }
  } else {
    pages.push(1)
  }

  if(typeof(user) !== "string"){
    return(
      <div id='LoginWarning'>
        <div id='warning'>
          <p>Pour acceder à cette page, vous devez vous connecter. Souhaitez vous vous rendre sur la page de connexion ?</p>
          <div id='warningChoice'>
            <Link to={"/"}>Retour</Link>
            <Link to={"/User/Connexion"}>Connexion</Link>
          </div>
        </div>
        <div id='back'></div>
        <div id='backImg'></div>
      </div>
    )
  }

  return (
  <>
    <section id='Recettes'>
    <h1 style={{ display: "none" }}>Carnet</h1>
      <div id='Hello'>
        <p id='hi'>Bonjour, {User.nom}
        {/* <br/><br/> Vous avez enregistré {User.favorites.length} recettes parmis vos favoris. */}
        </p>
        <Link to={"/Formulaire"}>Voulez vous enregistrer une nouvelle recette ?</Link>
      </div>  
      <h1>Recettes</h1>
      {/* Barre de recherche */}
      <div id='searchBar'>
        <input type="text" name="searchBarContent" id="searchBarContent" onChange={(e)=>setSearch(e.target.value)}/>
        <img src="/Icons/Search.svg" alt="Loupe" />
      </div>

      {/* Filtres */}
      <div id='filters'>
        <select name="Categories" id="Categories" onChange={(e)=>setCategorie(e.target.value)}>
          <option value="">Categorie</option>
          <option value="">Tout</option>
          <option value="Entree">Entree</option>
          <option value="Plat">Plat</option>
          <option value="Dessert">Dessert</option>
        </select>
        <select name="Styles" id="Styles" onChange={(e)=>setStyle(e.target.value)}>
          <option value="">Style</option>
          <option value="">Tout</option>
          <option value="Asiatique">Asiatique</option>
          <option value="Indienne">Indienne</option>
          <option value="Thaïlandaise">Thaïlandaise</option>
          <option value="Mexicaine">Mexicaine</option>
          <option value="Antillaise">Antillaise</option>
        </select>
        <select name="Niveaux" id="Niveaux" onChange={(e)=>setNiveau(e.target.value)}>
          <option value="">Niveau</option>
          <option value="">Tout</option>
          <option value="Débutant">Débutant</option>
          <option value="Intermédiaire">Intermédiaire</option>
          <option value="Confirmé">Confirmé</option>
        </select>
      </div>
      
      {/* Display */}
      <div id='Display'>
        <ul>
          {RecipesList.map((item)=>{
            counter++;
            if(counter > recipeStart && counter < (recipeStart+9) && item.nom.toLowerCase().includes(search.toLowerCase()) && item.niveau.includes(Niveau) && item.categorie.includes(Categorie)){
            return(
              <li key={item._id}>
                <Link to={`/PageRecette`} state={{ id: item._id }} className='front'>
                  <p>{item.niveau}</p>
                  <p>{item.nom}</p>
                </Link>
                <img src={`https://christopher.startwin.fr/${item.display}`} alt={item.nom} />
              </li>
            )}else{
              return(<></>)
            }
          })}
        </ul>
      </div>

      <div id='Choice'>
        <button className='arrows' id='start' onClick={()=> setActual(0)}><img src="/Icons/Start.svg" alt="Fleche"/></button>
        <button className={(Actual === 0) ? "arrow hideArrow" : "arrow showArrow"} id='previous' onClick={()=> setActual(Actual-1)}><img src="/Icons/Later.svg" alt="Fleche"/></button>

        {pages.map((item)=>{
          if(item-1 === Actual){
            return(<button className='select selected' key={item} onClick={()=> setActual(item-1)}>{item}</button>)
          } else {
            return(<button className='select notselected' key={item} onClick={()=> setActual(item-1)}>{item}</button>)
          }
        })}

        <button className={(Actual+1 === pages.length) ? "arrow hideArrow" : "arrow showArrow"} id='later' onClick={()=> setActual(Actual+1)}><img src="/Icons/Later.svg" alt="Fleche"/></button>
        <button className='arrows' id='end' onClick={()=> setActual(pages.length-1)}><img src="/Icons/End.svg" alt="Fleche"/></button>
      </div>
    </section>
  </>
  );
};

export default Carnet;