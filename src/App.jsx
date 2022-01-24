import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar";
import PokemonCommonList from "./views/pages/PokemonCommonList/PokemonCommonList";
import PokemonCatchedList from "./views/templates/CatchedPokemons/Catched";
import PokemonDetails from "./views/templates/PokemonDetail/PokemonDetail";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path="/" element={<PokemonCommonList/>}></Route>
            <Route path="/my_pokemon" element={<PokemonCatchedList/>}></Route>
            <Route path="/pokemon_detail/:name" element={<PokemonDetails />}></Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
