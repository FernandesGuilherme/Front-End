var contandoCaracter = "Guilherme lima";
console.log(contandoCaracter.length); 
/*Propriedade length conta os caracteres de uma String*/

var trocandoCaracter = "Manipulando Strings"
console.log (trocandoCaracter.replace ("Strings", "Strings"));
/*Replace troca o primeiro parametro pelo segundo. Expressão regular 
para alterar strings com espaços
*/

var retornarAposicaoDeUmCaracter = "Guilherme lima";
console.log(retornarAposicaoDeUmCaracter.indexOf('l'));
/*Retotna a posição de um caracter/palavra dentro da string*/

var retornarUltimaposicaoDeUmCaracter = "Guilherme lima";
console.log(retornarUltimaposicaoDeUmCaracter.lastIndexOf('l'));
/*Retotna a ultima posição de um caracter/palavra dentro da string*/

var cortandoString = "Guilherme Fernandes Lima";
console.log(cortandoString.slice(5))
/*Para cortar a string, mostra da quinta posição para cima*/

var transformarEmArray = "Guilherme Fernandes Lima";
console.log(transformarEmArray.split(" "));
/*Transforma a variavel em array, com critério de separação o espaço/ou o que passar como parametro*/

var maiusculoMinusculo = "Guilherme Lima";
console.log(maiusculoMinusculo.toUpperCase) // Maíusculo
console.log(maiusculoMinusculo.toLowerCase) // Minusculo 