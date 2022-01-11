/*
A função every valida cada elemento dentro do array
Passando uma função como parametro para informar a validação que está sendo feita.
Ela retorna um Booleano.
*/

const arr = [1, 2, 10, "ola", true];

let soNumeros = arr.every (function (elemento){
    return typeof elemento === "number"
})

console.log(soNumeros)

/*
A função acima valida se todos os elementos dentro do array são do tipo numérico
caso for retornaria TRUE, mas se algum não for o retorno da validação é falso.
*/


/*
A função some valida cada elemento dentro do array
Passando uma função como parametro para informar a validação que está sendo feita.
Ela retorna um Booleano.
*/
const arra = ["1", "2", "10", "ola"];

let temNumero = arra.some(function (elemento){
    return typeof elemento === "number"
});
console.log(temNumero);

/*
A função acima valida se pelo menos um dos elementos dentro do array são do tipo numérico
caso for retornaria TRUE, mas se não tiver nenhum  o retorno da validação é falso.
*/




