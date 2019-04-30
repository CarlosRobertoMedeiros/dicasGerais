/*   
  Um objeto é uma coleção dinâmica de chaves e valores, que podem ser de qualquer tipo,
e um protótipo que pode ser um objeto ou null. 

objetos herdam de outros objetos

Todo objeto em js tem um protótipo

*/


// A propriedade __proto__ é uma referência para o protótipo do objeto.
//Exemplo:
var homem = {
	sexo:"masculino"
};

var joao = {
	nome:"João",
	idade:20,
	__proto__:homem
};

var pedro = {
	nome:"Pedro",
	idade:18,
	__proto__:homem
};

console.log(joao);
console.log(joao.sexo);
console.log(pedro);
console.log(pedro.sexo);

//Para acessar a propriedade eu tenho que usar console.log(joao.sexo)
//Essa tecnologia não é corretamente adotada em todos os navegadores
//vamos dar preferência para Object.getPrototypeOf e Object.setPrototypeOf para interagir
//com o protótipo do objeto
//Exemplo:
var homem = {
	sexo:"masculino"
};

var joao = {
	nome:"João",
	idade:20
};

Object.setPrototypeOf(joao,homem);
console.log(joao);
console.log(joao.sexo);

//Também é possível utilizar Object.create para determinar o protótipo do objeto
var homem = {
	sexo:"masculino"
};

var pedro = Object.create(homem);
	pedro.nome="Pedro";
	pedro.idade=18;

console.log(pedro);
console.log(pedro.sexo);


//Conceitos Legais para utilizar o João
// Shadowing "fazer Sombra"
//Ao usar Shadowing eu verifico se o objeto joão tem a propriedade sexo,
//Caso não tenha eu vou ao protótipo "homem", caso não tenha eu vou ao protótipo
//prototype, caso não tenha retorna null pelo prototype que passa undefined.
var homem = {
	sexo:"masculino"
};

var joao = {
	nome:"João",
	idade:20
};

Object.setPrototypeOf(joao,homem);

console.log(joao);
console.log(joao.sexo);

//Retorna as propriedades do objeto
console.log(Object.keys(joao));//[ 'nome', 'idade' ]

//Imprime as propriedades de joão
//O sexo mostra os do protótipo também
//o Método hasOwnProperty mostra apenas as propriedades específicas de joao
for(var property in joao){
	if (!joao.hasOwnProperty(property)) continue;
	console.log(property);
}





