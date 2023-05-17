import { Routes, Route } from "react-router-dom";
import HeaderFooter from "./Components/Templates/HeaderFooter";
import Page from "./Components/Page";
import Home from "./Components/Home";


function App() {
  return (
    <Routes>
      <Route path="/" Component={HeaderFooter}>
        <Route path="/" Component={Home}/>
        <Route path="/Recettes" Component={Page}/>
        <Route path="/Carnet" Component={Page}/>
        <Route path="/AboutUs" Component={Page}/>
        <Route path="/Connexion" Component={Page}/>
      </Route>
    </Routes>
  );
}

export default App;
