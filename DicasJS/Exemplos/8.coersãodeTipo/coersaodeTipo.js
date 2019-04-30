//Operadores Lógicos
// OU(||) e E(&&)

//Além de ser curto-circuito, o retorno é um dos seus operandos
//   - 0 || 2 é 2
//   - 1 || 2 é 1

//1 && 2 é 2
//0 && 2 é 0

if(10){
	console.log("Ok");
}

//   Quando avaliados em situações boleanas, os tipos assumem valores truthy ou falsy 
// por meio da operação abstrata ToBoolean.

/*
!!  0       é false
!!  NaN     é false
!!  ""      é false
!!  false   é false
!!  null    é false
!!undefined é false
Todos os outros são truthy por padrão, incluindo objetos {} e arrays vazios[]. */

console.log(!!10); //true
console.log(!!0); //false
console.log(!!'10'); //true
console.log(!!''); //false
console.log(!!{}); //true
console.log(!![]); //true

//Especificação ECMAScript seção 9.2
  //http://www.ecma-international.org/ecma-262/5.1/#sec-9.2

//Como fazer para inicializar a variável max opção 1 (Evita o NaN)
var generateSerial = function(max){
	if (!max){// Teste para toBoolean
		max = 1000;
	}

	return Math.floor(Math.random()* max);
};

console.log(generateSerial(1000)); //741
console.log(generateSerial(100)); //11
console.log(generateSerial(10)); //9
console.log(generateSerial()); //NaN

//Como fazer para inicializar a variável max opção 2 (Evita o NaN)
var generateSerial = function(max){
	max = max || 1000; //Teste para toBoolean Melhor abordagem
	return Math.floor(Math.random()* max);
};

console.log(generateSerial(1000)); //741
console.log(generateSerial(100)); //11
console.log(generateSerial(10)); //9
console.log(generateSerial()); //NaN

//Tem muita diferença entre os operadores | e & e os || e &&?
// E e Ou com 1 só é uma operação bitwise(bit a bit)
//Ex.:
console.log(1 | 2); //3  0001 = 1  0010 = 2 0011 = 3 Explicação 1 ou 0 é 1(Porta Lógica Binária)
console.log(1 & 2); //0  0001 = 1  0010 = 2 0000 = 0 Explicação 1 E 0 é 0

//A linguagem possui outros operadores especiais

//typeof - Retorna o tipo do operando
console.log(typeof 10); //number
console.log(typeof "Carlos Roberto"); //string
console.log(typeof true); //boolean
console.log(typeof undefined); //undefined
console.log(typeof null); //object
console.log(typeof {}); //object
console.log(typeof /abc/); //object
console.log(typeof []); //object
console.log(typeof new Date); //object

//number,string,boolean,undefined e function são tipos o resto é tudo object

//Por convenção o Pessoa com P maíusculo é para usar o operador new
var Pessoa = function(nome,idade){
	this.nome = nome;
	this.idade = idade;
};

//Função Construtora
var pedro = new Pessoa("Pedro",20);
console.log(pedro);

//instanceof 
	// Verifica se o objeto possui a função construtora em sua cadeia de protótipos
	console.log(pedro instanceof Pessoa); //true
	console.log(pedro instanceof Date); //false

//In
   //Verifica se a propriedade faz parte do objeto
   console.log("nome" in pedro); //true
   console.log("peso" in pedro); //false

//delete
	//Apaga a propriedade de um determinado objeto
	delete pedro.nome;
	console.log("nome" in pedro); //false

//Operadores de incremento e decremento
//Imprime e depois incrementa
var x = 0;
console.log(x++);//0
console.log(x);//1

//incrementa e Imprime
var x = 0;
console.log(++x);//1
console.log(x);//1


//Imprime e depois decrementa
var x = 0;
console.log(x--);//0
console.log(x);//-1

//decrementa e Imprime
var x = 0;
console.log(--x);//-1
console.log(x);//-1

//operador ternário
var idade = 22;
(idade>=18)?"Maior Idade" :"Menor Idade";

























