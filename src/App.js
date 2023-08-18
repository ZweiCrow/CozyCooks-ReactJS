import { Routes, Route } from "react-router-dom";
import HeaderFooter from "./Components/Templates/HeaderFooter";
import Page from "./Components/Page";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Recettes from "./Components/Recettes";
import PageRecette from "./Components/PageRecette";
import Connexion from "./Components/Connexion";
import FormConnexion from "./Components/FormConnexion";
import FormInscription from "./Components/FormInscription";
import Carnet from "./Components/Carnet";
import FormRecette from "./Components/FormRecette";


function App() {
  return (
    <Routes>
      <Route path="/" Component={HeaderFooter}>
        <Route path="/" Component={Home}/>
        <Route path="/Recettes" Component={Recettes}/>
        <Route path="/PageRecette" Component={PageRecette}/>
        <Route path="/Carnet" Component={Carnet}/>
        <Route path="/Formulaire" Component={FormRecette}/>
        <Route path="/AboutUs" Component={AboutUs}/>
        <Route path="/User" Component={Connexion}>
          <Route path="Connexion" Component={FormConnexion}/>
          <Route path="Inscription" Component={FormInscription}/>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
