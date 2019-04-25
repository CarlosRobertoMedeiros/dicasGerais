/*
	Funções Básicas para Tipos Boolean API
		- toString()
		- valueOf()
*/

var isento = true;
var estudante = false;

//toString() = Retorna a String convertida a partir de um boolean
console.log(isento.toString()); //true

//valueOf() =  Retorna o tipo primitivo
console.log(estudante.valueOf()); //false

 
/*Decorar que esses 6 valores sempre são avaliados como falso estando em uma posição boolean
Quaisquer outros valores são verdadeiros	
!!0         //false Negação da Negação de 0
!!NaN       //false Negação da Negação de NaN
!!""        //false Negação da Negação de String Vazia
!!false     //false Negação da Negação de false
!!null      //false Negação da Negação de null
!!undefined //false Negação da Negação de undefined */


/*-------------------------------------------------------------*/
if(!!0){

}else{
	console.log("Negação da Negação de Zero");
} 
/*-------------------------------------------------------------*/
if(!!NaN){

}else{
	console.log("Negação da Negação de Not a Number");
} 
/*-------------------------------------------------------------*/
var nome=""
if(!!nome){

}else{
	console.log("Negação da Negação de uma String Vazia");
} 
/*-------------------------------------------------------------*/
var existe=false
if(!!existe){

}else{
	console.log("Negação da Negação de false");
} 
/*-------------------------------------------------------------*/
var nullvalue=null
if(!!nullvalue){

}else{
	console.log("Negação da Negação de valor null");
} 
/*-------------------------------------------------------------*/
var undefinedvalue=undefined
if(!!undefinedvalue){

}else{
	console.log("Negação da Negação de valor undefined");
} 

