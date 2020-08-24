import { getHeroeById } from './bases/08-imp-exp'


const promesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        //Tarea
        //Importen el get Heroe By Id
        const heroe = getHeroeById(2);
        //resolve(heroe)
        resolve(heroe)
        //reject('No se pudo encontrar el heroe')
        
    },2000)

});

promesa.then((heroe)=>{
    console.log('heroe', heroe)
})
.catch(err => console.warn(err))