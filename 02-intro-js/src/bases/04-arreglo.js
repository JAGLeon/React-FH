// const arreglo = new Array(100);
const arreglo = [1,2,3,4];
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);

let arreglo2 = [...arreglo , 5];
// arreglo2.push(5);
let arreglo3 = arreglo2.map(function(numero){
    return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
