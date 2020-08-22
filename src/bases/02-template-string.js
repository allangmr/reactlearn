const nombre = 'Allan';
const apellido = 'Montilla';

const nombreCompleto = ` 
El nombre completo es:
${nombre} ${apellido}.
`;

console.log(nombreCompleto);

function getSaludo(nombre){
    return 'Hola Mundo soy '+nombre;
}


console.log(`Este es un texto: ${getSaludo(nombre)}! `);
