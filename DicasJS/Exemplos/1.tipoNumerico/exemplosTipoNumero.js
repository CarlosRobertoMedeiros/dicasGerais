/*
	Funções para Tipos Numéricos
		- toString()
		- toExponential()
		- toPrecision()
		- toFixed()
		- valueOf()
*/

/*Exemplos para o Tipo de dados número */
var nota =10445;
console.log(nota);

//funções para Número "JSNumbers"

//toString = Retorna um valor como um texto
console.log(nota.toString);

//toExponential() = Converte o número em uma notação exponencial
var nota = 10;
console.log(nota.toExponential(2)); //1.00e+1

//toPrecision() = Formata o número com o tamanho específico
var nota = 10;
console.log(nota.toPrecision(4));//10.00

//toFixed() = Formata o numero com uma quantidade especifica de caracteres DECIMAIS
var nota = 10;
console.log(nota.toFixed(2)); //10.00

//valueOf() = Retorna o valor primitivo do número
var nota = 10;
console.log(nota.valueOf());//10 

var nota = 10;
console.log(nota.toFixed(2)); //10.00

var nota = 10;
console.log(nota.toPrecision(2)); //10