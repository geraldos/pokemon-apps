import CONFIG from "./Config";

const API_ENDPOINT = {
    LIST_ALL_POKEMON: `${CONFIG.base_url}api/v2/pokemon/?limit=30`,
};

export default API_ENDPOINT;