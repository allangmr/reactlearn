//import {heroes} from './data/heroes';
import { heroes} from './data/heroes';

// este automatico no es ecma script 6 const { heroes } = require("./data/heroes")


//menos optimizada
/* const getHeroeById = (id) =>{
    return heroes.find((element) => element.id === id);
} */
//mas optimizada
const getHeroeById = (id) => heroes.find((element) => element.id === id);


console.log(getHeroeById(2));


const getHeroeByOwner = (owner) => heroes.filter((element) => element.owner === owner);


console.log(getHeroeByOwner('Marvel'));
