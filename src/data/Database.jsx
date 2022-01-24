import Dexie from "dexie";
import CONFIG from "../config/Config";

const { DATABASE_NAME, DATABASE_VERSION } = CONFIG;

const db = new Dexie(DATABASE_NAME);
db.version(DATABASE_VERSION).stores({
    pokemons: '++id, name, id_pokemon'
});

export default db;