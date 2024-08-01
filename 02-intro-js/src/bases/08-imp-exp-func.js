import  heroes , {owners} from '../data/heroes';
//console.log(owners);

export const getHeroesById = (id) => heroes.find(heroe => heroe.id === id)


//console.log(getHeroesById(2));

export const gerHeroesByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner)
//console.log(gerHeroesByOwner('DC'));
