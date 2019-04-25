/*
	Funções Básicas para Tipos Math API
		- abs()
		- floor()
		- log()
		- min()
		- max()
		- pow()
		- random()
		- round()
		- sin()
		- cos()
		- sqrt()
*/

//Math.abs() =  retorna o valor absoluto positivo do número
var nota = -10.5325;
console.log(Math.abs(nota));

//Math.floor() =  retorna o valor inteiro do número arredondando-o quando necessário
var nota = -10.5325;
console.log(Math.floor(nota));

//Math.log() =  logaritmo natural do número (base E)
var nota = 10;
console.log(Math.log(nota)); //0.69

//Math.min() = Retorna o menor valor na lista de números
console.log(Math.min(0, 150, 30, 20, -8, -200));// -200

//Math.min() = Retorna o maior valor na lista de números
console.log(Math.max(0, 150, 30, 20, -8, -200));// 150

//Math.pow() = retorna a potência de um número
var nota = 10;
console.log(Math.pow(nota,2)); //100

//Math.random() = retorna um número aleatório entre 0 e 1
console.log(Math.random()); //100

//Math.round = retorna o valor mais próximo possível do inteiro
var nota = 10.33;
console.log(Math.round(nota)); //10

//Math.sin() = Retorna o seno do número
console.log(Math.sin(90 * Math.PI / 180)); //1 

//Math.cos() = Retorna o seno do número
console.log(Math.cos(0 * Math.PI / 180)); //1 

//Math.sqrt() = Raiz quadrada do número
console.log(Math.sqrt(64)); //8 