function gerarListener(){
	var obj={};
	var count=0;
	var listeners=[];

	obj.executar = function(){
		count++;
		for(var i=0;i<listeners.length;i++){
			listeners[i]({contador: count});
		}
	}

	obj.addListener = function(listener){
		listeners.push(listener);
	}

	return obj;
}


var list1 = gerarListener();
list1.addListener(function(evento){ console.log("1: "+evento.contador) });
//Cada chamada de executar() será um acréscimo
list1.executar(); //Imprime 1
list1.executar(); //Imprime 2
list1.executar(); //Imprime 3

// É criado um novo Listener, ou seja, é criado um novo "cont" com valor 0
var list2 = gerarListener();
list2.addListener(function(evento){ console.log("2: "+evento.contador) });
list2.executar(); //Imprime 1

var list3 = gerarListener();
list3.addListener(function(evento){ console.log("3: "+evento.contador) });
list3.executar(); //Imprime 1




