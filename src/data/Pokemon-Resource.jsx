import API_ENDPOINT from "../config/Endpoint";

class PokemonResource {
    static async pokemonList() {
        try {
            const response = await fetch(API_ENDPOINT.API_LIST_ALL_POKEMON);
            const responeJson = await response.json();
            return responeJson.results;   
        } catch (error) {
            console.log(error);
        }
    };

    static async pokemonDetail(name) {
        try {
            const response = await fetch(API_ENDPOINT.API_DETAIL_POKEMON(name));
            const responeJson = await response.json();
            return responeJson;   
        } catch (error) {
            console.log(error);
        }
    }
}

export default PokemonResource;