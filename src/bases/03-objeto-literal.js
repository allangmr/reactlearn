const persona = {
    nombre:'Tony',
    apellido:'Stark',
    edad:45,
    direccion:{
        ciudad:'New York',
        zip:2424,
        lat: 12.343544245,
        lng:23.234354354,
    }
};

const persona2 = {...persona}; //crea clon del objeto que no afecta al principal.
persona2.nombre = 'Peter';
//console.table(persona);
console.log(persona);
console.log(persona2);