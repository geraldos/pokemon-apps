import CONFIG from "./Config";

const API_ENDPOINT = {
    API_LIST_ALL_POKEMON: `${CONFIG.base_url}api/v2/pokemon/?limit=30`,
    API_DETAIL_POKEMON: (name) => `${CONFIG.base_url}api/v2/pokemon/${name}`
};

export default API_ENDPOINT;