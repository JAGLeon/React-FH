const saludar = function (nombre) {
    return `Hola, ${nombre}`;
}

const saludar2 =  (nombre) => {
    return `Hola, ${nombre}`;
}


const getUser = () => {
    return {
        uid : 'ABV123',
        username : 'El_macho51',
    }
}

const getUser2 = () => 
    ({
        uid : 'ABV123',
        username : 'El_macho51',
    })





console.log(getUser());
console.log(saludar2('Vegeta'));

// function getUsuarioActivo (nombre){
//     return {
//         uid : 'ABC567',
//         username : nombre
//     }
// }

// const usuarioActivo = getUsuarioActivo('Fernando')
// console.log(usuarioActivo);

const getUsuarioActivo = (nombre) =>
    ({
        uid : 'ABC567',
        username : nombre
    })
const usuarioActivo = getUsuarioActivo('Fernando')
console.log(usuarioActivo);