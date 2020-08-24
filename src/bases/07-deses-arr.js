const personajes = ['Elias', 'Eliseo', 'Eliu'];

const [p1] = personajes;

console.log(p1);


const [,p2] = personajes;

console.log(p2);

const [, , p3] = personajes;

console.log(p3);


const retornaArreglo = () =>{
    return ['ABC', 123];
}

const [letras,numeros] = retornaArreglo();

console.log(letras,numeros);

//Tarea
//1. El primer valor del arr se llamara nombre
//2. El segundo se llama setNombre
const useState = (valor) =>{
    return [valor, ()=>{console.log('Hola Mundo')}];
}

const [nombre,setNombre] = useState('Goku');


console.log(nombre)

setNombre();
