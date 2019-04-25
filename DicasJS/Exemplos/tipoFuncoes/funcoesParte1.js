//funções declarativas
//function declaration
function soma(a,b){
	return a+b;
};

console.log(soma)//[Function: soma] Verifica o tipo da variável 
console.log(soma(2,2)) //4  - Executa a função 

//função de expressão
//function expression
var soma = function(a,b){
	return a+b;
};

console.log(soma(2,3));

//A diferença entre a função de declaração e a de expressão
//é o hoisting
//Funciona em funções de declaração
//chamei o console.log antes da função subtrair
console.log(subtrair(10,5));

function subtrair(a,b){
	return a-b;
};

//Não Funciona em funções de espressão
//chamei o console.log antes da função subtrair
/*console.log(subtracao(10,5));

var subtracao = function (a,b){
	return a-b;
};*/
/*
A function declaration é carregada antes da interpretação
por isso ela funciona corretamente chamando o método antes da função,
enquanto a function expression é carregada no momento da interpretação do código, 
aguardando a passagem linha a linha
*/

/*
Tipos de invocação de função 
   - Diretamente do Escopo Global, 
   		- Exemplo de Passagem de função por parâmetro {Lambda}
   		- Retornando uma função de dentro de outra função
   - Por meio de objetos, 
   - Por meio das funções  Call e Apply 
   - Por meio do Operador new
*/
/* Diretamente do Escopo Global */
var soma = function(a,b){
	return a+b;	
}
soma(2,2); //4
/* fim de Diretamente do Escopo Global */

/*Exemplo de Passagem de função por parâmetro {Lambda}*/
var produto = {nome:"sapato",preco:150};
var formulaImpostoA = function(preco){return preco*0.1;};
var formulaImpostoB = function(preco){return preco*0.2;};

var calcularPreco = function(produto,formulaImposto){
	return produto.preco + formulaImposto(produto.preco);
}

console.log(calcularPreco(produto,formulaImpostoA)); //165
console.log(calcularPreco(produto,formulaImpostoB)); //180
/*Fim do Exemplo de Passagem de função por parâmetro {Lambda}*/

/*Retornando uma função de dentro de outra função*/
var helloWorld = function(){
	return function(){
		return "HelloWorld !";
	};
};

console.log(helloWorld); //[Function: helloWorld]
console.log(helloWorld()); //[Function]
console.log(helloWorld()());//HelloWorld !
/*fim do Retornando uma função de dentro de outra função*/

/* Invocando uma função por meio de um objeto */
var pessoa = {
	nome:"João",
	idade:20,
	getIdade:function(){
		return this.idade;
	}
};
console.log(pessoa.getIdade());


var getIdade = function(){
	return this.idade;
};

var pessoa = {
	nome:"João",
	idade:20,
	getIdade :getIdade
};

console.log(getIdade()); //undefined
console.log(pessoa.getIdade()); //20

// O this depende do contexto a ser usado , 
// no primeiro exemplo deu undefined por que nesse escopo não tem idade
// ao utilizar referenciando o objeto da certo, pois tem idade no seu contexto.

/* fim da Invocando uma função por meio de um objeto */

/* Invocando uma função utilizando os métodos call e apply */
//continuar a partir dos 20 minutos do video 7







