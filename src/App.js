import { Routes, Route } from "react-router-dom";
import HeaderFooter from "./Components/Templates/HeaderFooter";
import Page from "./Components/Page";


function App() {
  return (
    <Routes>
      <Route path="/" Component={HeaderFooter}>
        <Route path="/" Component={Page}/>
        <Route path="/Recettes" Component={Page}/>
        <Route path="/Carnet" Component={Page}/>
        <Route path="/Contacts" Component={Page}/>
        <Route path="/Connexion" Component={Page}/>
      </Route>
    </Routes>
  );
}

export default App;
