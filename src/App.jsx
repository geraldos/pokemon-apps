import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar";
import PokemonCommonList from "./views/pages/PokemonCommonList/PokemonCommonList";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path="/" element={<PokemonCommonList/>}></Route>
            {/* <Route path="/pokemon_detail/:name" element={<PokemonDetail />}></Route> */}
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
