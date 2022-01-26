/*
A função every valida cada elemento dentro do array
Passando uma função como parametro para informar a validação que está sendo feita.
Ela retorna um Booleano.

A função valida se todos os elementos dentro do array são do tipo numérico (Number)
caso for retornaria TRUE, mas se algum não for o retorno da validação é false.
*/

const arr = [1, 2, 10, "ola", true];

let soNumeros = arr.every (function (elemento){
    return typeof elemento === "number"
})
console.log(soNumeros);

/*
A função some valida cada elemento dentro do array
Passando uma função como parametro para informar a validação que está sendo feita.
Ela retorna um Booleano.
*/

const arra = ["1", "2", "10", "ola"];

let temNumero = arra.some(function (elemento){
    return typeof elemento === "number"
});

let temNumero = arra.some(validarTipo(elemento));

function validarTipo(elemento){
    return typeof elemento === "number"

}
console.log(temNumero);


/*
A função acima valida se pelo menos um dos elementos dentro do array são do tipo numérico
caso for retornaria TRUE, mas se não tiver nenhum  o retorno da validação é falso.
*/


/*Retorna um array com valores filtrados*/
const filtrandoArray = arr.filter(function (ele, indice) {
    return typeof ele === "number" ;
});

/*Função serve para realizar interações em cada elemento de um array, 
geralmente o retorno é undefined, não atribuir a uma variável
*/
arr.forEach(function (elemento, indice){
    console.log(indice + " " + elemento);

});

/*Transformas os elementos*/
let arraMulti = arr.map(function (ele) {
    return ele * ele;
});

let vetor = [10,20,30,40, 10, 5, 20]
console.log(vetor.indexOf(20)); //Retorna a primeira posição do indice que está o número 20 se não achar retorna -1
console.log(vetor.lasIndexOf(20)); //Retorna a ultima posição do indice que está o número 20 se não achar retorna -1
console.log(vetor.includes(10)); //Retorna true se achar o elemento com valor 10
console.log(vetor.find(function (elemento){ //Faz uma busca dentro do vetor conforme instrução passada pela função
    return elemento > 10
})); 
console.log(vetor.findIndex(function (elemento){ //Faz uma busca dentro do vetor conforme instrução passada pela função e retorna 
    return elemento > 10                         //o index do primeiro elemento que atende a condição
})); 



//CONCAT - JOIN - toString
array_1 = [1,2,3]
array_2 = [4,5,6]

console.log(array_1.toString()); // Transforma a saída dos elemenetos do vetor em Strings
console.log(array_1.join("-")); // Transforma a saída dos elemenetos do vetor em Strings, o separador dos elementos pode ser passado por parâmetro
let array_3 = array_1.concat(array_2); // Concatena arrays, pode passar valores juntos .concat(array_2, 4,5,10) .concat(array_2, 4,5,10, [nova, array]) 
console.log(array_3);

/*PUSH - POP - SHIFT - UNSHIFT - SLICE */
arra1.push(15,18)// .push() insere novos elementos ao fim do array.
arra1.pop()// .pop() remove/pega o ultimo elemento do fim do array.
arra1.shift()// .shift() remove/pega o primeiro elemento do fim do array.
arra1.unshift() //unshift() insere um novo elemento no inicio do array.
arra1.slice()// .slice() "Recorta" partes do array por indice, recebe 2 parametro .slice(inicio,fim) retorna valores dentro dos indices
             //(não mostra o ultimo elemento), não obrgigado a passar ultimo parametro, ele segue até o ultimo item 

arra1.splice(indice) //Retorna os elementos removidos a partir do indice passado (modifica array inicial)
arra1.splice(indice, qtdElementos) //Retorna os elementos removidos a partir do indice passado (modifica array inicial)
                                   //A partir do elemento indice, remova qtdElementos do array e retorna os removidos

arra1.splice(indice, qtdElementos, "Olá mundo") //Retorna os elementos removidos a partir do indice passado (modifica array inicial)
                                   //A partir do elemento indice, remova qtdElementos do array e retorna os removidos e adiciona mais um elemento

/*REVERSE - REDUCE*/
let arr = [1,2,3,4]
let arrayReverso = arr.reverse();
console.log(arrayReverso); // .reverse() reverte a ordem do array (Saída 4,3,2,1). Modifica a array original 