import { Routes, Route } from "react-router-dom";
import HeaderFooter from "./Components/Templates/HeaderFooter";
import Page from "./Components/Page";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Recettes from "./Components/Recettes";


function App() {
  return (
    <Routes>
      <Route path="/" Component={HeaderFooter}>
        <Route path="/" Component={Home}/>
        <Route path="/Recettes" Component={Recettes}/>
        <Route path="/Carnet" Component={Page}/>
        <Route path="/AboutUs" Component={AboutUs}/>
        <Route path="/Connexion" Component={Page}/>
      </Route>
    </Routes>
  );
}

export default App;
