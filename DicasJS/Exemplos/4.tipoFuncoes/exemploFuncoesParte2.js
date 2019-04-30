//Encapsulando o código por meio de objetos

//Usando objetos
var counter = {
	value:0,
	add:function(){
		return ++this.value;
	}

};

console.log(counter.add());
console.log(counter.add());
console.log(counter.add());

var itens = {
	value:[],
	add:function (item){
		this.value.push(item);
		return this.value;
	}
};

console.log(itens.add('A'));
console.log(itens.add('B'));
console.log(itens.add('C'));

//Continuar com 5 minutos

//Usando Funções
//Usando uma "Factory Function"
//Sendo que o add é publico 
// e o value undefined, pois não está
//disponível a visualização
var createCounter = function (){
	var value=0;
	return {
			add :function(){
				return ++value;
			}
	};
};

var counter = createCounter();
console.log(counter.add());

//Usando "Constructor Function"
var Counter = function (){
	var value = 0;
	this.add = function (){
		return ++value;
	};
};

var counter = new Counter();
console.log(counter.value); //undefined
console.log(counter.add()); //1
console.log(counter.add()); //2
console.log(counter.add()); //3

//IIFE = Função Imediatamente Invocada
//Assim não vai precisar instanciar
//Evolução da Factory Function "Module Pattern"
var counter = (function(){
	var value = 0 ;
	return {
		add:function(){
			return ++value;
		},
		reset:function(){
			value =0;
		}
	};
}
)();
console.log(counter.value); //undefined
console.log(counter.add()); //1
console.log(counter.add()); //2
console.log(counter.add()); //3


//Evolução da "Module Pattern" para "Revealing Moduling Pattern"
// O _ é para "atributos privados"
var counter = (function(){
	var _value =0;
	var _add=function(){
		return ++_value;
	};
	var _reset = function(){
		_value =0;
	};
	return {
		//Métodos revelados
		add :_add,
		reset:_reset
	};
})();

console.log(); //undefined
console.log(counter.add()); //1
console.log(counter.add()); //2
counter.reset(); //
console.log(counter.add()); //1

// Livro AddyOsmani
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/index.html










