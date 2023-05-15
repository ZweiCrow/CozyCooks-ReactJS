import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";


function App() {
  return (
    <Routes>
      <Route path="/" Component={Header}/>
    </Routes>
  );
}

export default App;
