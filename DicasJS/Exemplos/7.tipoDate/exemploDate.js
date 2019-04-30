//As datas usam como referência a Era Unix que teve inicio em 1 de janeiro de 1970 a 
// partir do UTC - tempo universal coordenado.
//O Z indica Zulu Time de acordo com o iso 8601
//Como criar datas
var hoje = new Date();
console.log(hoje); //2019-04-30T14:58:56.588Z

console.log(hoje.getTime()); //Temnpo em Milisegundo até hoje a partir de 1/01/1970

var natal = new Date(14194656000000);
console.log(natal); //2419-10-24T00:00:00.000Z

//Criação de Data passando como parâmetro uma String
console.log(Date.parse("2014/12/25"));
console.log(new Date(1419472800000));
console.log(new Date().toString()); //RFC 2822

console.log(new Date("2014-12-25T10:30:00-02:00"));

//Criando uma data, Passando como parâmtro a própria data
//Mês -1,Array vai de 0 a 11
var natal = new Date(2014,11,25,10,30,0);

//Date API
//	- getDate         - Retorna o dia
//	- getDay          - Retorna o dia da semana
//	- getFullYear     - Retorna o ano
//	- getHours        - Retorna as horas
//	- getMilliseconds - Retorna os milisegundos
//	- getMinutes      - Retorna os minutos
//	- getMonth        - Retorna o Mês
//	- getSeconds      - Retorna os segundos
//	- getTime         - Retorna o tempo em milisegundos
//	- toString        - Retorna a Data em String

console.log(natal.getYear()); //114 -- ano 99 ano dois mil 100 dois mil e um 101
console.log(natal.getFullYear()); //2014
console.log(natal.getMonth()); //11 --O array vai de 0 a 11
console.log(natal.getDay());//4 --Dia da semana: Quinta-Feira Domingo é 0
console.log(natal.getDate());//25

//Referência de Estudo
	//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date





