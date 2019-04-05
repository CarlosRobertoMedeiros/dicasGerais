//Exemplos Iniciais 

 //typeof(x) = Função que retorna o tipo do dado


//Numbers Functions API
var nota = 5.56789;
//toExponential = Converte o número em uma notação exponencial
console.log(nota.toExponential(3));//5.56789e+0(0) //5.6e+0(1) //5.57e+0(2) //5.568e+0(3)

//Converte um número em uma String mantendo o (x) decimais 
console.log(nota.toFixed(2)); //5.6(1) //5.57(2)

//Formata o número em um tamanho específico
console.log(nota.toPrecision(2)); //6(1) //5.6(2)

//Retorna o valor primitivo do número
console.log(nota.valueOf());

//Converte o número para string
console.log(nota.toString());

//Math Functions API
var nota = 10.588;

//Nao vi modificação
console.log(Math.abs(nota));

//Retorna o valor Inteiro antes do .
console.log(Math.floor(nota));

//Gera um número randômico
console.log(Math.random());


//String Functions 
var nome = "Carlos Roberto";
console.log(nome.split(" ")); //[ 'Carlos', 'Roberto' ]


//Criando um vetor(array)
var nome = [];









