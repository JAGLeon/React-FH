const nombre = 'Goku';
const apellido = 'Leon';

// const nombre_completo = nombre + ' ' + apellido;
const nombre_completo = `Hola mundo , soy :
${nombre} 
${apellido}
${1 + 1}`;
console.log(nombre_completo);

function get_saludo(nombre){
    return 'Hola ' + nombre; 
}
console.log(`Este es un texto: ${get_saludo(nombre)}`);