import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonList from "./PokemonList";
import Pokemon from "./Pokemon";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<PokemonList />} />
          <Route path="/pokemon/:name" element={<Pokemon />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
