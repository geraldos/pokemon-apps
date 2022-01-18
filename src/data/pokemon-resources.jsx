import API_ENDPOINT from "../config/Endpoint";

class PokemonResource {
    static async pokemonList() {
        const response = await fetch(API_ENDPOINT.LIST_ALL_POKEMON);
        const responeJson = await response.json();
        return responeJson.results;
    };
}

export default PokemonResource;