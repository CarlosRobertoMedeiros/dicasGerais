//Criando objetos diretamente
var joao = {
	nome:"João",
	idade:20,
	sexo:"masculino"
};

var pedro = {
	nome:"Pedro",
	idade:18,
	sexo:"masculino"
};
console.log(joao);
console.log(pedro);

//Criando objetos com uma função Fábrica
var criarHomem = function(nome,idade){
	return {
		nome:nome,
		idade:idade,
		sexo:"masculino"
	};
};

var joao = criarHomem('João','20');
var pedro = criarHomem('Pedro','18');
console.log(joao);
console.log(pedro);

//O operador new cria um novo ojeto por meio de 
//uma função construtora
var Homem = function(nome,idade){
	this.nome = nome;
	this.idade = idade;
	this.sexo = "masculino";
};

//Ao chamar o new a funções construtora deve iniciar a sua escrita com letra maiuscula
//Essa convenção para iniciar a função construtora lembra a criação do new
var joao = new Homem("João",20);
var pedro = {}

Homem.call(pedro,'Pedro','18');

console.log(joao);
console.log(pedro);

//Toda função em javascript tem uma função prototype para trabalhar com heranção

//Como trabalhar com herança por meio de funções construtoras
var Homem = function(nome,idade){
	this.nome = nome;
	this.idade = idade;
};

Homem.prototype.sexo = "masculino";

var joao = new Homem("João",20);
console.log(joao);
console.log(joao.sexo);

//O conceito de Prototype é diferente da propriedade prototype
var pedro = {};
pedro.__proto__ = Homem.prototype; //Assim realiza-se o vinculo utilizando esse conceito
Homem.apply(pedro,['Pedro',18]);
console.log(pedro);
console.log(pedro.sexo);

//em Js quando faz um new todos os objetos são criados através de funções construtoras
//e para manipular todos os objetos de uma vez é śo simular assim
Homem.prototype.sexo = "Feminino";
console.log(joao.sexo);
console.log(pedro.sexo);

//Como seria uma função new

var _new = function(f){
	var obj = {};
	obj.__proto__= f.prototype;
	f.apply(obj,Array.prototype.slice.call(arguments,1));
	return obj;
};

var pedro = _new(Homem,"Pedro",18);
console.log(pedro);














