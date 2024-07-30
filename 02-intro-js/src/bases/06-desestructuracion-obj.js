const persona = {
    nombre : 'Tony',
    edad : 45,
    clave : 'Stark',
};

// const { nombre:nombreP,edad,clave } = persona;

// console.log(nombreP ,edad, clave);

const use_Context = ({clave, nombre, edad, rango = 'Capitan'}) => {

    // console.log(nombre, edad, rango);
    return {
        nombreClave : clave,
        anios : edad,
        latlng : {
            lat : 17.3123,
            lng : -12.323,
        }
    }
}

const {nombreClave, anios, latlng:{lat, lng}} = use_Context(persona);
console.log(nombreClave);
console.log(lng);