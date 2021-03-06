/*
	Funções Básicas para Tipos RegExp API
		- exec() - Executa a RegExp, retornando os detalhes
		- test() - Testa a RegExp, retornando true ou false
*/

//Criação de Variáveis Usando Expressão Regular
//São as duas formar abaixo
var regExp = /abc/;
var regExp = new RegExp("abc");

//Exemplo Passo 1
//Reconhecer esse número de telefone como válido 9999-9999
//Foi feito o valor exato 
var regExp = /9999-9999/;
var telefone = "9999-9999";
console.log(regExp.exec(telefone)); //[ '9999-9999', index: 0, input: '9999-9999', groups: undefined ]

var regExp = /9999-9999/;
var telefone = "9999-9999";
console.log(regExp.test(telefone)); //true


//Exemplo Passo 2
//Reconhecer esse número de telefone com código de área como válido (61) 9999-9999
// () {} [] são caracteres especiais em regex
//Temos que escapar esses caracteres para que eles se tornem literais
//Para escapar caracteres usa-se a \ antes de caracteres especiais para que eles se tornem 
//literais dentro da minha Expressão Regular.
var regExp = /\(61\) 9999-9999/;
var telefone = "(61) 9999-9999";
console.log(regExp.test(telefone)); //true tomar cuidado para utilizar o escapar corretamente

//Exemplo Passo 3
//Reconhecer o Telefone unicamente sem mais nada no texto
//a Expressão regular diz encontrei esse padrão na string
//independente do que venha antes ou depois
//  ^ - Inicia com um determinado Caractere
// $ - Finaliza com um determinado Caractere
var regExp = /^\(61\) 9999-9999$/;
var telefone = "(61) 9999-9999";
console.log(regExp.test(telefone));

//Exemplo Passo 4
//Aceitar qualquer tipo de Telefone
//Por meio de grupos de Caracteres
// [abc] - Aceita qualquer caractere dentro do grupo, nesse caso a,b e c
// [^abc] - Não aceita qualquer caracter dentro do grupo, nesse caso a, b ou c
//        - ^ em caso de grupo é negação
// [0-9] - Aceita qualquer caractere entre 0 e 9 //Range
//[^0-9] - Não aceita qualquer caractere entre 0 e 9
var regExp = /^\([0-9][0-9]\) [0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/; //muito verboso
var telefone = "(61) 9999-9999";
console.log(regExp.test(telefone)); //true


//Exemplo Passo 5
//Quantificadores - Parte 1
// Os quantificadores podem ser aplicados a caracteres, grupos, conjuntos ou metacaracteres.

// {n}   - Quantifica um número específico
// {n,}  - Quantifica um número mínimo
// {n,m} - Quantifica um número mínimo e um número máximo
var regExp = /^\([0-9]{2}}\) [0-9]{4}-[0-9]{4}$/; //muito verboso
var telefone = "(61) 9999-9999";
console.log(regExp.test(telefone)); //true

//Exemplo Passo 6
//Necessário Aceitar Números com 8 e 9 Digitos
var regExp = /^\([0-9]{2}}\) [0-9]{4,5}-[0-9]{4}$/; //muito verboso
var telefone1 = "(61) 9999-9999";
console.log(regExp.test(telefone)); //true
var telefone2 = "(61) 99999-9999";
console.log(regExp.test(telefone)); //true

//Exemplo Passo 7
//E Se o hifen for opcional?
//Quantificadores Parte 2
// ? - Zero ou 1
// * - Zero ou mais
// - Um ou mais
var regExp = /^\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}$/; //muito verboso
var telefone = "(61) 9999-9999";
console.log(regExp.test(telefone)); //true
var telefone2 = "(61) 999999999";
console.log(regExp.test(telefone2)); //true

//Exemplo 8 
//E se o telefone estiver em uma estrutura de Tabela, Como reconhecer cada linha?
//Utilizando quantificadores
var regExp = /^\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}$/; //muito verboso
var telefone = "<table>\
					<tr>\
						<td>(80) 99978899</td>\
						<td>(90) 9997-8899</td>\
						<td>(70) 98767-9999</td>\
					</tr>\
				</table>";

console.log(regExp.test(telefone));
//Reconhecer dentro da Table os conjuntos de telefones

//Utilizei os quantificadores ( )+1 para repertir pelo menos uma vez
var regExp = /<table><tr>(<td>\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}<\/td>)+<\/tr><\/table>/; //muito verboso
var telefone = "<table><tr><td>(80) 99978899</td><td>(90) 9997-8899</td><td>(70) 98767-9999</td></tr></table>";
console.log(regExp.test(telefone));//true

//Exemplo 9
//MetaCaracteres Básicos
//	. -  Representa qualquer caractere
//	\w - Representa o conjunto [a-zA-Z0-9_]
//	\W - Representa o conjunto [^a-zA-Z0-9_] //Negação de 
//	\d - Representa o conjunto [0-9]
//	\D - Representa o conjunto [^0-9]
//	\s - Representa um espaço em branco
//	\S - Representa um não espaço em branco
//	\n - Representa uma quebra de linha
//	\t - Representa um tab
var regExp = /<table><tr>(<td>\(\d{2}\)\s\d{4,5}-?\d{4}<\/td>)+<\/tr><\/table>/; //muito verboso
var telefone = "<table><tr><td>(80) 99978899</td><td>(90) 9997-8899</td><td>(70) 98767-9999</td></tr></table>";
console.log(regExp.test(telefone));//true

//String API
//	match   - Executa uma busca na String e retorna um array contendo os dados encontrados, ou null.
//	split   - Divide ou fatia a String com base em uma outra String fixa ou expressão regular
//	replace - Substitui partes da String com base em uma outra String fixa ou expressão regular 

//Exemplo 10
//Extrair o telefone dentro das linhas
var regExp = /\(\d{2}\)\s\d{4,5}-?\d{4}/; //muito verboso
var telefone = "<table><tr><td>(80) 99978899</td><td>(90) 9997-8899</td><td>(70) 98767-9999</td></tr></table>";
console.log(telefone.match(regExp));//true

//Exemplo 11
// Modificadores
	// i - Case-insensitive matching
	// g - Global matching
	// m - Multiline mathing 
var regExp = /\(\d{2}\)\s\d{4,5}-?\d{4}/g; //esse g indica o Global Mathing
//se for usar o objeto criando regExp ele é o segundo parâmetro do array
var telefone = "<table><tr><td>(80) 99978899</td><td>(90) 9997-8899</td><td>(70) 98767-9999</td></tr></table>";
console.log(telefone.match(regExp));

//Exemplo 12
//Substituir todos os telefone da tabela
var regExp = /\(\d{2}\)\s\d{4,5}-?\d{4}/g; //esse g indica o Global Mathing
//se for usar o objeto criando regExp ele é o segundo parâmetro do array
var telefone = "<table><tr><td>(80) 99978899</td><td>(90) 9997-8899</td><td>(70) 98767-9999</td></tr></table>";
console.log(telefone.replace(regExp, "telefone"));

//Link Interessante sobre Expressões Regulares
//Mozilla Developer Network
	//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
	
























