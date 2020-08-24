//Desestructuración de Objetos o Asignación desustructurante
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
}

const {nombre,edad,clave} = persona;
console.log(nombre);
console.log(edad);
console.log(clave);


const useContext = ({nombre,edad,rango}) =>{
    return{
        nombreClave:clave,
        anios:edad,
        latlng:{
            lat:14.1234,
            lng:-12.3232
        }
    }

}
const {nombreClave, anios, latlng:{lat,lng}} = useContext(persona);

console.log(nombreClave, anios)
console.log(lat, lng)