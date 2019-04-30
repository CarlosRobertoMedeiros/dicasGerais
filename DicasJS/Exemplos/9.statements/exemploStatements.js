//For if wlse continue while switch break throw try e catch

var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";


//Testando o For
var toHackerCase = function(text){
	var hackerTextArray = [];
	for(var i=0;i<text.length;i++){
		if (text.charAt(i)==="o"){
			hackerTextArray.push(0);
		}else if (text.charAt(i)==="l"){
			hackerTextArray.push(1);
		}else if (text.charAt(i)==="e"){
			hackerTextArray.push(3);
		}else if (text.charAt(i)==="a"){
			hackerTextArray.push(4);			
		}else if (text.charAt(i)==="s"){
			hackerTextArray.push(5);						
		}else if (text.charAt(i)==="t"){
			hackerTextArray.push(7);						
		}else{
			hackerTextArray.push(text.charAt(i));
		}
	}
	return hackerTextArray.join(",");
};
console.log(toHackerCase(text));

//Para evitar o else podemos usar o continue
//Testando o For
var toHackerCase = function(text){
	var hackerTextArray = [];
	for(var i=0;i<text.length;i++){
		if (text.charAt(i)==="o"){
			hackerTextArray.push(0);
			continue;
		}
		if (text.charAt(i)==="l"){
			hackerTextArray.push(1);
			continue;
		}
		if (text.charAt(i)==="e"){
			hackerTextArray.push(3);
			continue;
		}
		if (text.charAt(i)==="a"){
			hackerTextArray.push(4);			
			continue;
		}
		if (text.charAt(i)==="s"){
			hackerTextArray.push(5);						
			continue;
		}
		if (text.charAt(i)==="t"){
			hackerTextArray.push(7);						
			continue;
		}
			hackerTextArray.push(text.charAt(i));
		
	}
	return hackerTextArray.join(",");
};
console.log(toHackerCase(text));

//Para evitar o else podemos usar o continue
//Testando o Switch
var toHackerCase = function(text){
	var hackerTextArray = [];
	for(var i=0;i<text.length;i++){
		switch(text.charAt(i)){
			case "o":
				hackerTextArray.push(0);
				break;
			case "l":
				hackerTextArray.push(1);
				break;				
			case "e":
				hackerTextArray.push(3);
				break;				
			case "a":
				hackerTextArray.push(4);			
				break;				
			case "s":
				hackerTextArray.push(5);			
				break;				
			case "t":
				hackerTextArray.push(7);			
				break;				
			default:
				hackerTextArray.push(text.charAt(i));
		}
	}
	return hackerTextArray.join(",");
};
console.log(toHackerCase(text));

//Exemplo com while
var toHackerCase = function(text){
	var hackerTextArray = [];
	var i =0;
	while(i<text.length){
		switch(text.charAt(i)){
			case "o":
				hackerTextArray.push(0);
				break;
			case "l":
				hackerTextArray.push(1);
				break;				
			case "e":
				hackerTextArray.push(3);
				break;				
			case "a":
				hackerTextArray.push(4);			
				break;				
			case "s":
				hackerTextArray.push(5);			
				break;				
			case "t":
				hackerTextArray.push(7);			
				break;				
			default:
				hackerTextArray.push(text.charAt(i));
		}
		i++;
	}
	return hackerTextArray.join(",");
};
console.log(toHackerCase(text));

//Estrutura de Tratamento de Erros em Javascript
//Exemplo com while
var HackerTextError = function (message){
	this.message = message;
	this.name = "HackerTextError";
}

var toHackerCase = function(text){
	//O if quer dizer (toBoolean !text)
	// 0 nan "" false null e undefined
	if (!text) throw new HackerTextError("Texto Inválido. !");
	var hackerTextArray = [];
	var i =0;
	while(i<text.length){
		switch(text.charAt(i)){
			case "o":
				hackerTextArray.push(0);
				break;
			case "l":
				hackerTextArray.push(1);
				break;				
			case "e":
				hackerTextArray.push(3);
				break;				
			case "a":
				hackerTextArray.push(4);			
				break;				
			case "s":
				hackerTextArray.push(5);			
				break;				
			case "t":
				hackerTextArray.push(7);			
				break;				
			default:
				hackerTextArray.push(text.charAt(i));
		}
		i++;
	}
	return hackerTextArray.join(",");
};
try{
	console.log(toHackerCase());
}catch(e){
	console.log("Erro :"+e.message+" "+e.name);
};
console.log(toHackerCase(text));





