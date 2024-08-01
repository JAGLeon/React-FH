import { getHeroesById } from "./08-imp-exp-func";

// const promesa = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         const heroe = getHeroesById(2);
//         resolve(heroe);
//         reject('No se pudo encontrar el héroe');
//     }, 2000);
// });

// promesa.then((heroe) => {
//     console.log(heroe);
// })
// .catch(err => {console.warn(err);})

const getHeroeByIdAsyc = (id) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const heroe = getHeroesById(id);
            heroe ? resolve(heroe) : reject('No se pudo encontrar el héroe');
        }, 2000);
    });

}

// getHeroeByIdAsyc(9)
//     .then(heroe => console.log('Heroe',heroe))
//     .catch(err => console.warn(err))

getHeroeByIdAsyc(3)
    .then(console.log)
    .catch(console.warn)