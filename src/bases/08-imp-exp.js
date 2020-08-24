import {heroes, owners} from '../data/heroes';

// este automatico no es ecma script 6 const { heroes } = require("./data/heroes")

console.log(owners)
//menos optimizada
/* const getHeroeById = (id) =>{
    return heroes.find((element) => element.id === id);
}  */
//mas optimizada
export const getHeroeById = (id) => heroes.find((element) => element.id === id);


export const getHeroeByOwner = (owner) => heroes.filter((element) => element.owner === owner);
