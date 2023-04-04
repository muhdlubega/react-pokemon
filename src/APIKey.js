import axios from "axios";

class APIKey{
    getPokemon = () => {
        return axios.get("https://pokeapi.co/api/v2/pokemon?limit=1118");
    }

    getPokemonDetails = (id) => {
        return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    }
}

export default new APIKey();