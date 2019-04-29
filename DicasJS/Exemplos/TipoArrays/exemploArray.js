/*
	Funções Básicas para Tipos Array API
		- concat()         - Junta 2 arrays, retornando a cópia dos dois
		- every()          - Retorna true se todos os elementos atenderem a função
		- filter()         - Filtra o array com base em uma função do filtro 
		- forEach()        - Percorre o array, invocando uma função para cada elemento
		- indexOf()        - Retorna o índice do primeiro elemento encontrado
		- join()           - Cria uma string customizada com todos os elementos do array
		- lastIndexOf()    - Retorna o índice do ultimo elemento encontrado
		- map()            - Transforma os elementos de um array
		- pop()            - Remove o ultimo elemento do array, retornando-o
		- push()           - Adiciona um elemento no array, retorna o length
		- reduce()         - Acumula os elementos de um array
		- reverse()        - Inverte a ordem dos elementos de um array
		- shift()          - Remove o primeiro elemento do array, retornando-o
		- some()           - Retorna true se um dos elementos atender a função 
		- slice()          - Seleciona uma parte do array, retornando-a
		- sort()           - Ordena os elementos de um array com base em uma função
		- splice()         - Adiciona ou remove elementos de uma opsição específica
		- toString()       - Converte o array em uma String 
		- unshift()        - Adiciona elemento no início do array
		- valueOf()        - Retorna o próprio array
*/

//Opções para a criação de arrays
var carros = [];
carros[0] = "Ka";
carros[1] = "Corsa";
carros[3] = "Palio";
console.log(carros);

var carros = ["Ka","Corsa","Palio"];
console.log(carros);

var carros = new Array("Ka","Corsa","Palio");
console.log(carros);
//Fim das opções para criação de arrays

var carros = ["Ka","Corsa","Palio"];

console.log(carros.valueOf()); //Retorna o array //[ 'Ka', 'Corsa', 'Palio' ]
console.log(carros.toString()); // Retorna o array como string //Ka,Corsa,Palio
console.log(carros.length); //Qtde de elementos no array //3 é uma propriedade não função


//Inserção do array
//Final do array
carros.push("Gol"); //Insere elemento no final do array
console.log(carros); //[ 'Ka', 'Corsa', 'Palio', 'Gol' ]

//Remove o último elemento do array
//Final do array
carros.pop();
console.log(carros);//[ 'Ka', 'Corsa', 'Palio' ]

//Inserção do array
//Início do array
carros.unshift("Gol");
console.log(carros);//[ 'Gol', 'Ka', 'Corsa', 'Palio' ]

//Remoção do array
//Final do primeiro elemento
carros.shift();
console.log(carros);//[ 'Ka', 'Corsa', 'Palio' ]

//Localiza índice do elemento do array
//Segundo elemento do array começando com 0
console.log(carros.indexOf("Corsa")); //1

//Splice é o canivete suíco

//Remove, troca e adiciona elementos
var pos = carros.indexOf("Corsa");
//Para remover passa-se a posição como 1 parametro e o 2 parametro quantos elementos eu quero remover
carros.splice(pos,1);//[ 'Ka', 'Palio' ] removeu o corsa
console.log(carros);

var carros = ["Ka","Corsa","Palio"];
//Para substituir elemento informa-se o 3 parâmetro com o valor a ser adicionado
carros.splice(pos,1,"Sonic");
console.log(carros);

var carros = ["Ka","Corsa","Palio"];
//Para adicinar, devido ao 0 não remove ninguém
//Adiciona em uma posição específica do array e empurra os próximos elementos
carros.splice(pos,0,"Sonic");//[ 'Ka', 'Sonic', 'Corsa', 'Palio' ]
console.log(carros);

//Splice e push são as mais utilizadas

//forEach Substitui o for clássico
//Ka
//Sonic
//Corsa
//Palio
carros.forEach(function(elemento){
	console.log(elemento);
});

var carros= [];
carros[0]= {marca:"Ford", modelo:"Ka"};
carros[1]= {marca:"Chevrolet", modelo:"Corsa"};
carros[2]= {marca:"Fiat", modelo:"Palio"};

//Filtros
var carrosFord = carros.filter(function (elemento){
	return elemento.marca ==="Ford";//=== comparação de valor e tipo
});
console.log(carrosFord);//[ { marca: 'Ford', modelo: 'Ka' } ]

//Every Testando os elementos do array com every
//Verifica se todos os elementos do array são da marca Ford
var carros= [];
carros[0]= {marca:"Ford", modelo:"Ka"};
carros[1]= {marca:"Chevrolet", modelo:"Corsa"};
carros[2]= {marca:"Fiat", modelo:"Palio"};

isCarrosFord = carros.every(function(elemento){
	return elemento.marca==="Ford";
});
console.log(isCarrosFord);//false


//Some verifica se existe algum elemento no array da marca ford
var carros= [];
carros[0]= {marca:"Ford", modelo:"Ka"};
carros[1]= {marca:"Chevrolet", modelo:"Corsa"};
carros[2]= {marca:"Fiat", modelo:"Palio"};

existeAlgumCarrosFord = carros.some(function(elemento){
	return elemento.marca==="Ford";
});
console.log(existeAlgumCarrosFord);//true

//Map = Serve para mapear elementos, os transformando
//Exemplo eu tenho um array de marca e modelo eu quero derivar um novo array de strings
//que apenas me diga quais são as marcas de carro que eu tenho no array original
var carros = [];
carros[0] = {marca:"Ford", modelo:"Ka"};
carros[1] = {marca:"Chevrolet", modelo:"Corsa"};
carros[2] = {marca:"Fiat", modelo:"Palio"};

var marcas = carros.map(function (elemento){
	return elemento.marca;
});
console.log(marcas);//[ 'Ford', 'Chevrolet', 'Fiat' ]

//Quantidade de Caracteres em cada modelo
var tamanhoCaracteres = carros.map(function (elemento){
	return elemento.modelo.length;
});
console.log(tamanhoCaracteres); //[ 2, 5, 5 ]

//Utilizando o reduce
//O reduce permite um processamento e uma acumulação
//Total de todos os precos do array de carros
// O zero é de começa em quanto
var carros = [];
	carros[0] = {modelo:"Ka", preco:28800};
	carros[1] = {modelo:"Corsa",preco:34750};
	carros[2] = {modelo:"Palio",preco:32000};

var total = carros.reduce(function (anterior,atual){
	return anterior + atual.preco;
},0);
console.log(total);

//Operação concat
var carros = ["Ka","Corsa","Palio"];
var motos = ["Honda","Yamaha"];
var veiculos = carros.concat(motos);
console.log(veiculos);//[ 'Ka', 'Corsa', 'Palio', 'Honda', 'Yamaha' ]

//Operação slice
//Fatiamento de um array
//O valor é indice -1
//slice(posicaoInicial,posicaoFinal -1) ou 
//slice(posicao) Daqui até o final
var carros = [];
carros[0]="Ka";
carros[1]="Corsa";
carros[2]="Palio";
carros[3]="Gol";

console.log(carros.slice(0,2));//[ 'Ka', 'Corsa' ]
console.log(carros.slice(1,3));//[ 'Corsa', 'Palio' ]
console.log(carros.slice(2));//Posição em diante[ 'Palio', 'Gol' ]

//Operação Reverse
//Inverte a ordem dos itens do array
//Ela altera o array original
console.log(carros);//[ 'Ka', 'Corsa', 'Palio', 'Gol' ]
carros.reverse();
console.log(carros);//[ 'Gol', 'Palio', 'Corsa', 'Ka' ]
carros.reverse();


//Sort
//Ordem por ordem alfabética
console.log(carros.sort());//[ 'Corsa', 'Gol', 'Ka', 'Palio' ]

//Ordena os elementos do array por preço
var carros = [];
carros[0] = {modelo:"Ka",preco:28800};
carros[1] = {modelo:"Corsa",preco:34750};
carros[2] = {modelo:"Palio",preco:32000};

console.log(carros);
console.log("Usando Sort Ordem Ascendente de Valor");

var carrosOrdenadosPorPreco = carros.sort(function(a,b){
	return a.preco -b.preco;
});
console.log(carrosOrdenadosPorPreco); //[ "Ka" , "Palio" , "Corsa" ]

console.log("Usando Sort Ordem Descendente de Valor");
var carrosOrdenadosPorPrecoDescendente = carros.sort(function(a,b){
	return b.preco - a.preco;
});

console.log(carrosOrdenadosPorPrecoDescendente);//[ "Corsa" , "Palio" , "Ka" ]

//Operação de Join
var carros = [];
carros[0] = "Ka";
carros[1] = "Corsa";
carros[2] = "Palio";
carros[3] = "Gol";

console.log(carros);
var carrosJoin = carros.join(";");
console.log(carrosJoin);//Ka;Corsa;Palio;Gol

//"Multiplicação" de String com array
//Insere nas 10 posições o texto Javascript é Legal
console.log(new Array(10).join(" Javascript é Legal "));
























































