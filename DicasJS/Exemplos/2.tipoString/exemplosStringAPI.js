/*
	Funções Básicas para Tipos String API
		- charAt()
		- charCodeAt()
		- concat()
		- indexOf()
		- lastIndexOf()
		- length()
		- match() = retorna um array informando o indice do primeiro caractere, o input e o group
		- repace() = substitui o valor que encontrar pelo proximo digitado
		- search() = retorna a posição do caractere
		- substring() = retorna uma string dentro da outra
		- toLowerCase() = retorna o texto em minusculo
		- toUpperCase() = retorna o texto em maiusculo
		- trim() = Limpa espaços antes e depois da palavra digitada
		- valueOf() Retorna o valor primitivo da função
		- split() --Canivete suiço, apaga o caractere que existir
*/

//charAt() =  retorna o caracter de um índice específico
var nome = "AgileCode";
console.log(nome.charAt(2)); //"i"

//charCodeAt() = retorna o unicode do caractere  de um índice específico
console.log(nome.charCodeAt(0)); //"65"

//concat() = concatena o valor da variável nome com o concat
console.log(nome.concat(" !!")); //"AgileCode !!"

//indexOf() = retorna o índice de acordo com a letra informada
console.log(nome.indexOf('e')); //4

//lastIndexOf() = retorna o índice de acordo com a letra informada de trás para frente
console.log(nome.lastIndexOf('e')); //8

//length() = retorna o tamanho da string 
console.log(nome.length); //9

//match() = retorna um array informando o indice do primeiro caractere, o input e o group
console.log(nome.match("Code")); // Retorna um Array [ 'Code', index: 5, input: 'AgileCode', groups: undefined ] 

//replace() = substitui o valor que encontrar pelo proximo digitado
console.log(nome.replace('Code','!')); //"Agile!"

//search() = retorna a posição do caractere
console.log(nome.search("e")); //4  Retorna a posição do caractere

//substring() = retorna uma string dentro da outra
console.log(nome.substring(5,9)); //Code //Posição Inicial, Posição FInal -1

//toLowerCase() = retorna o texto em minusculo
console.log(nome.toLowerCase());//agilecode

//toUpperCase() = retorna o texto em maiusculo
console.log(nome.toUpperCase());//AGILECODE

//trim() = Limpa espaços antes e depois da palavra digitada
console.log(nome.trim());//AgileCode

//valueOf() Retorna o valor primitivo da função
console.log(nome.valueOf()); // AgileCode //Retorna o valor primitivo da função

//split() --Canivete suiço, apaga o caractere que existir
//          retorna um vetor  substituindo os valores 
//          Canivete suiço específico para String
// Ou seja, para o split eu sempre jogo uma String em um array
console.log(nome.split('e')); //['Agil','Cod',''];

//Outro exemplo de split
var nomes = "Pedro;Ana;Maria;Carolina";
console.log(nomes.split(";")) // ['Pedro','Ana','Maria','Carolina'] //Monta como um array
		


