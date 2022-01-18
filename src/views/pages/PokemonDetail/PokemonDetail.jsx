// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// function PokemonDetails() {
//     let { name } = useParams();
//     const [pokemon, setPokemon] = useState({});

//     function fetchSinglePokemon() {
//         let url = `${process.env.REACT_APP_POKEMON_API_URL}api/v2/pokemon/${name}`;
//         console.log(url);

//         fetch(url)
//             .then((response) => response.json())
//             .then((result) => setPokemon(result))
//             .catch((err) => console.log(err));
//     }

//     useEffect(() => {
//         fetchSinglePokemon();
//     }, []);

//     return(
//         <h1>TEST DETAIL</h1>
//     );
// }

// export default PokemonDetails();