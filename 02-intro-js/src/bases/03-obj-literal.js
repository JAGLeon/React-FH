const persona = {
    nombre : 'Tony',
    apellido : 'Stark',
    edad : 45,
    direccion : {
        ciudad : 'New York',
        zip : 21312412,
        lat : 14.23131,
        lng : 34.312321,
    },
};

// console.table(persona);
console.log(persona);

// const persona2 = persona; Esto no se hace
const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);