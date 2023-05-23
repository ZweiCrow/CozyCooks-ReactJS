import React, { useState } from 'react';
import "../Utils/Sass/recette-carnet.scss"

const Recettes = () => {
  const [search, setSearch] = useState("")
  const [Categorie, setCategorie] = useState("")
  const [Style, setStyle] = useState("")
  const [Niveau, setNiveau] = useState("")
  const [Actual, setActual] = useState(0)

  let counter =0;
  let recipeStart = Actual * 8;
  console.log(`Actual = ${Actual}`);
  
  const [RecipesList, setRecipesList] = useState([
    {
      _id: 1234567098654321,
      nom: "Tarte Au Citron",
      niveau: "Intermédiaire",
      img: "./Recettes/TarteAuCitron.jpg",
    },
    {
      _id: 1235678987654321,
      nom: "Brownie",
      niveau: "Débutant",
      img: "./Recettes/Brownie.jpg",
    },
    {
      _id: 12345678097654321,
      nom: "Colombo De Poulet",
      niveau: "Intermédiaire",
      img: "./Recettes/ColomboDePoulet.jpg",
    },
    {
      _id: 2456780987654321,
      nom: "Udon au Boeuf",
      niveau: "Intermédiaire",
      img: "./Recettes/UdonBoeuf.jpg",
    },
    {
      _id: 1234678987654321,
      nom: "Brownie",
      niveau: "Débutant",
      img: "./Recettes/Brownie.jpg",
    },
    {
      _id: 1235678097654321,
      nom: "Colombo De Poulet",
      niveau: "Intermédiaire",
      img: "./Recettes/ColomboDePoulet.jpg",
    },
    {
      _id: 1245678097654321,
      nom: "Udon au Boeuf",
      niveau: "Intermédiaire",
      img: "./Recettes/UdonBoeuf.jpg",
    },
    {
      _id: 1234567898764321,
      nom: "Brownie",
      niveau: "Débutant",
      img: "./Recettes/Brownie.jpg",
    },
    {
      _id: 1234567809764321,
      nom: "Colombo De Poulet",
      niveau: "Intermédiaire",
      img: "./Recettes/ColomboDePoulet.jpg",
    },
    {
      _id: 1245678098765432,
      nom: "Udon au Boeuf",
      niveau: "Intermédiaire",
      img: "./Recettes/UdonBoeuf.jpg",
    },
    {
      _id: 1245678097654321,
      nom: "Udon au Boeuf",
      niveau: "Intermédiaire",
      img: "./Recettes/UdonBoeuf.jpg",
    },
    {
      _id: 1234567898764321,
      nom: "Brownie",
      niveau: "Débutant",
      img: "./Recettes/Brownie.jpg",
    },
    {
      _id: 7809764321,
      nom: "Colombo De Poulet",
      niveau: "Intermédiaire",
      img: "./Recettes/ColomboDePoulet.jpg",
    },
    {
      _id: 5678098765432,
      nom: "Udon au Boeuf",
      niveau: "Intermédiaire",
      img: "./Recettes/UdonBoeuf.jpg",
    },
    {
      _id: 124567654321,
      nom: "Udon au Boeuf",
      niveau: "Intermédiaire",
      img: "./Recettes/UdonBoeuf.jpg",
    },
    {
      _id: 12398764321,
      nom: "Brownie",
      niveau: "Débutant",
      img: "./Recettes/Brownie.jpg",
    },
    {
      _id: 123456,
      nom: "Colombo De Poulet",
      niveau: "Intermédiaire",
      img: "./Recettes/ColomboDePoulet.jpg",
    },
    {
      _id: 1,
      nom: "Udon au Boeuf",
      niveau: "Intermédiaire",
      img: "./Recettes/UdonBoeuf.jpg",
    },
  ]);

  const pages = [];

  if(RecipesList.length+1 > 8){
    for (let i = 1; i <= Math.ceil((RecipesList.length+1) / 8); i++) {
      pages.push(i)
    }
  } else {
    pages.push(1)
  }

  return (
    <section id='Recettes'>
      <h1>Recettes</h1>
      {/* Barre de recherche */}
      <div id='searchBar'>
        <input type="text" name="searchBarContent" id="searchBarContent" onChange={(e)=>setSearch(e.target.value)}/>
        <img src="./Icons/Search.svg" alt="" />
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
          <option value="Debutant">Débutant</option>
          <option value="Intermediaire">Intermédiaire</option>
          <option value="Confirme">Confirmé</option>
        </select>
      </div>
      
      {/* Display */}
      <div id='Display'>
        <ul>
          {RecipesList.map((item)=>{
            counter++;
            if(counter > recipeStart && counter < (recipeStart+9) && item.nom.toLowerCase().includes(search.toLowerCase()))
            return(
              <li key={item._id}>
                <div className='front'>
                  <p>{item.niveau}</p>
                  <p>{item.nom}</p>
                </div>
                <img src={item.img} alt="" />
              </li>
            )
          })}
        </ul>
      </div>

      <div id='Choice'>
        <button className='arrows' id='start' onClick={()=> setActual(0)}><img src="./Icons/Start.svg" alt=""/></button>
        <button className={(Actual === 0) ? "arrow hideArrow" : "arrow showArrow"} id='previous' onClick={()=> setActual(Actual-1)}><img src="./Icons/Later.svg" alt=""/></button>

        {pages.map((item)=>{
          if(item-1 === Actual){
            return(<button className='select selected' key={item} onClick={()=> setActual(item-1)}>{item}</button>)
          } else {
            return(<button className='select notselected' key={item} onClick={()=> setActual(item-1)}>{item}</button>)
          }
        })}

        <button className={(Actual+1 === pages.length) ? "arrow hideArrow" : "arrow showArrow"} id='later' onClick={()=> setActual(Actual+1)}><img src="./Icons/Later.svg" alt=""/></button>
        <button className='arrows' id='end' onClick={()=> setActual(pages.length)}><img src="./Icons/End.svg" alt=""/></button>
      </div>
    </section>
  );
};

export default Recettes;