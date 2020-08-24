//Funcion normal - Forma Correcta
const saludar = function (nombre){
    return `Hola, ${nombre}`;
}
//Funcion flecha larga
const saludar2 =  (nombre)=>{
    return `Hola, ${nombre}`;
}
//Funcion flecha corta
const saludar3 =  (nombre)=> `Hola, ${nombre}`;


console.log(saludar("AllanG"));
console.log(saludar2("AllanGM"));
console.log(saludar3("AllanGMR"));

//forma de devolver un objeto con funcion de flecha - forma larga
const getUser = () => {
    return{
        uid:'ABCD',
        username:'El_Papi1502'
    }
}
//forma de devolver un objeto con funcion de flecha - forma corta
const getUser2 = () => ({
        uid:'ABCD',
        username:'El_Papi1502'
});
console.log(getUser());
console.log(getUser2());

const user = getUser2();
console.log(user);

//Tarea
//1. Transformen a una funcion de flecha
//2. Tienen que retornar un objeto implicito
//3. Pruebas
/* function getUsuarioActivo(nombre){
    return{
        uid:'ABC567',
        username:nombre
    }
}

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);
 */
const getUsuarioActivo = (nombre) => ({
    uid:'ABC567',
    username:nombre
})

const usuario = getUsuarioActivo('Fernando');

console.log(usuario);