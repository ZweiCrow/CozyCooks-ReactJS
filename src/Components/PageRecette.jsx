import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { URL } from "../Utils/Urls";
import "../Utils/Sass/pagerecette.scss";
import Cookies from "js-cookie";

const PageRecette = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = location.state;
  const [Recipe, setRecipe] = useState([]);
  const [User, setUser] = useState([]);
  const [isLoading, setLoading] = useState(true);
  let index = 0;
  const userId = Cookies.get('TokenForDNSUser')

  const Verif = ()=> {
    if(typeof(userId) === "string"){
      addToFavorite()
    } else {
      Warning("show")
    }
  }

  const Warning = (mode)=> {
    const warning = document.querySelector("#loginWarning")

    if(mode === "show"){
      document.body.style.overflow = "hidden"
      warning.classList.toggle("block")
      setTimeout(()=>{
        warning.style.opacity = 1
      },10)
    }
    if(mode === "hide"){
      document.body.style.overflow = "visible"
      warning.style.opacity = 0
      setTimeout(()=>{
        warning.classList.toggle("block")
      },10)
    }
  }

  const Suppr = ()=> {
    axios.delete(URL.deleteRecipe+Recipe.display.substring(7)+"/"+Recipe._id)
    setTimeout(()=>{
      navigate('/Carnet');
    }, 250)
  }

  const addToFavorite = () => {
    const bouton = document.querySelector("#fav")
    const text = document.querySelector("#favText")

    setTimeout(()=>{
      bouton.classList.toggle("favyes")
      bouton.classList.toggle("fav")

      if(bouton.classList.contains("favyes")){
        text.innerHTML = "Supprimer des Favoris"
        // Fonction qui ajoute aux favoris
        axios.patch(URL.addRecipesToUser+userId,{
          recipe: id
        })
      }

      if(bouton.classList.contains("fav")){
        text.innerHTML = "Ajouter aux Favoris"
        // Fonction qui supprime des favoris
        axios.patch(URL.removeRecipesToUser+userId,{
          recipe: id
        })
      }

    },500)
  };

  useEffect(() => {
    const fetchRecipeById = async () => {
      try {
        const { data } = await axios.get(URL.fetchRecipeById + id);
        setRecipe(data);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchUser = async () => {
      try {
        // Verifier si la recette est dans la liste des recettes favorite de l'utilisateur
        if(typeof(userId) === "string"){
          const { data } = await axios.get(URL.fetchUsersById + userId);
          setUser(data);
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRecipeById();
    fetchUser();

  }, []);

  if (isLoading) { // Important
    return <div className="App">Loading...</div>;
  }

  if(typeof(userId) === "string"){
    const isFound = User.favorites.some(e=>{                                        // Vérifie si l'id de la recette existe déjà
      if(e === id){
        return true;
      }
      return false
    })
  
    setTimeout(()=>{
      if(isFound){                                                                   
        // User.favorites.push(recipe)
        const bouton = document.querySelector("#fav")
        const text = document.querySelector("#favText")
  
        bouton.classList.add("favyes")
        bouton.classList.remove("fav")
  
        text.innerHTML = "Supprimer des Favoris"
        console.log("recipe already favorited !");
      }
    },10)
  }

  if(Recipe.auteur === User.nom){
    setTimeout(()=>{
      const boutton = document.querySelector("#fav")
      boutton.classList.toggle("Hide")
    },10)
  }

  return (<>
    <div id='loginWarning'>
      <div id='warning'>
        <p>Pour acceder à cette page, vous devez vous connecter. Souhaitez vous vous rendre sur la page de connexion ?</p>
        <div id='warningChoice'>
          <button onClick={()=>{Warning("hide")}}>Retour</button>
          <Link to={"/User/Connexion"}>Connexion</Link>
        </div>
      </div>
      <div id='back'></div>
      <div id='backImg'></div>
    </div>
    <section id="PageRecette">
      <h1 style={{display: "none"}}>{Recipe.nom}</h1>
      {/* PRESENTATION */}
      <div id="presentation">
        <div id="display">
          <div id="front">
            <p>{Recipe.nom}</p>
            <img id="divider" src="/Icons/RecetteDivider.svg" alt="" />
            <p>{Recipe.niveau}</p>
          </div>
          <img
            id="back"
            src={`http://localhost:8080/${Recipe.display}`}
            alt=""
          />
        </div>
        <div id="spec">
          {/* <button id="fav" className="fav" onClick={Verif}>
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front">
              <img src="/Icons/Heart.svg" alt="Ajouter Favoris" />
              <p id="favText">Ajouter aux Favoris</p>
            </span>
          </button> */}
          {(Recipe.auteur === "admin")
            ? <button id="fav" className="fav" onClick={Verif}>
                <span className="shadow"></span>
                <span className="edge"></span>
                <span className="front">
                  <img src="/Icons/Heart.svg" alt="Ajouter Favoris" />
                  <p id="favText">Ajouter aux Favoris</p>
                </span>
              </button> 
            : ""
          }
          {(Recipe.auteur !== "admin")
            ? <button id="fav" className="fav" onClick={Suppr} style={{width: "65%"}}>
                <span className="shadow"></span>
                <span className="edge"></span>
                <span className="front">
                  <p id="favText">Supprimer cette recette</p>
                </span>
              </button> 
            : ""
          }
          {(Recipe.auteur === "admin")? <p>Auteur : {Recipe.auteur}</p> : ""}
          <p>
            Temps de préparation :{" "}
            {Recipe.temps > 60
              ? `${Recipe.temps / 60} heure(s)`
              : `${Recipe.temps} mins`}
          </p>
          <p>{Recipe.style === "" ? "" : `Style : ${Recipe.style}`}</p>
        </div>
      </div>

      {/* INGREDIENTS */}
      <div id="ingredients">
        <h2>Ingredients</h2>
        <div className="liste">
            {Recipe.ingredients?.map((item)=>{
              return(
                <div className="ingredients" key={item.nom}>
                  <p>{item.quantité}</p>
                  <p>{item.unité}&nbsp;</p>
                  <p>{item.nom}</p>
                </div>
              )
            })}
        </div>

      </div>

      {/* ETAPES */}
      <div id="etapes">
        <h2>Préparation</h2>
        <div className="liste">
          {Recipe.etapes?.map((item) => {
            // le ? permet de verifier si le tableau existe avant de le charger
            index++;
            return (
              <div className="etape" key={index}>
                <p className="index">Etape {index}</p>
                <p className="instruction">{item}</p>
              </div>
            );
          })}
          <div className="etape">
            <p className="index">Bon appétit !</p>
          </div>
        </div>
      </div>
    </section>
  </>
  );
};

export default PageRecette;
