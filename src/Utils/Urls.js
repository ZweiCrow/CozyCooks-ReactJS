export const URL = {
  // RECUPERATION
  fetchRecipes: "http://localhost:8080/recettes",
  fetchRecipeById: "http://localhost:8080/recettes/", // + id
  fetchUsers: "http://localhost:8080/users",
  fetchUsersById: "http://localhost:8080/users/", // + id
  fetchRecipesOfUser: "http://localhost:8080/users/recipes/", // + id
  
  // ENREGISTREMENT
  addRecipe: "http://localhost:8080/recettes/add",
  addImage: "http://localhost:8080/recettes/upload",
  addUser: "http://localhost:8080/users/add",
  
  verifyUser: "http://localhost:8080/users/verify",


  // PATCH
  addRecipesToUser: "http://localhost:8080/users/addFav/", // + id de l'utilisateur
  removeRecipesToUser: "http://localhost:8080/users/removeFav/", // + id de l'utilisateur
  
  // SUPPRESSION
  deleteRecipe: "http://localhost:8080/recettes/delete/", // + id de la recette

}