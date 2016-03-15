function Animal() {
	this.barulho = '';
}
Animal.prototype = {
	fazerBarulho: function() {
		return this.barulho;
	}
};

function Cachorro() {
	this.barulho = 'Au';
}
Cachorro.prototype = new Animal();

function Gato() {
	this.barulho = 'Miau';
}
Gato.prototype = new Animal();
///////////////////////////////////////////////





function Manada() {
	this.animais = [];
	this.divisor = '';
}
Manada.prototype = {
	adicionar: function(animal) {
		this.animais.push(animal);
	},

	barulhos: function() {
		var resultado = '';
		for (var i = 0; i < animais.length; i++) {
			resultado = resultado + animais[i].barulho+this.divisor + ' ';
		};
		return resultado;
	}
};

function ManadaVirgula() {
	Manada.call(this);
	this.divisor = ',';
}
ManadaVirgula.prototype = new Manada();

function ManadaSustenido() {
	Manada.call(this);
	this.divisor = '#';
}
ManadaSustenido.prototype = new Manada();





var manadaVirgula = new ManadaVirgula();
var manadaSustenidaDupla = new ManadaSustenido();
var animais = [new Cachorro(), new Gato()];

animais.forEach(function (animal) {
  manadaVirgula.adicionar(animal);
  manadaSustenidaDupla.adicionar(animal);
});

// Print Esperado: Au, Miau
console.log(manadaVirgula.barulhos());

// Print Esperado: Au# Au# Miau# Miau
console.log(manadaSustenidaDupla.barulhos());