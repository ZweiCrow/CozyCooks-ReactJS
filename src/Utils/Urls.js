const root = "http://localhost:8080"

export const URL = {

  // RECUPERATION
  fetchRecipes: `${root}/recettes`,
  fetchRecipeById: `${root}/recettes/`, // + id
  fetchUsers: `${root}/users`,
  fetchUsersById: `${root}/users/`, // + id
  fetchRecipesOfUser: `${root}/users/recipes/`, // + id
  
  // ENREGISTREMENT
  addRecipe: `${root}/recettes/add`,
  addImage: `${root}/recettes/upload`,
  addUser: `${root}/users/add`,
  
  verifyUser: `${root}/users/verify`,


  // PATCH
  addRecipesToUser: `${root}/users/addFav/`, // + id de l'utilisateur
  removeRecipesToUser: `${root}/users/removeFav/`, // + id de l'utilisateur
  
  // SUPPRESSION
  deleteRecipe: `${root}/recettes/delete`, // + img & id de la recette

}