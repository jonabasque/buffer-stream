"use strict";

//Recogemos la entrada y salida de la consola.
var stdin = process.stdin;
var stdout = process.stdout;
//Definimos una persona.
var person = {
		name: null,
		age: 0
	}
function saveAge(age){
	person.age = age;
	if(person.age >= 18){
		stdout.write(person.name + "es mayor de edad, tiene "+person.age+" años");
	}else {
		stdout.write(person.name + "tiene"+person.age+" por lo que es menor de edad, no puede continuar");
	}

	//cerramos este flujo de streams
	process.exit();
}

function saveName(name){
	person.name = name;

	//vuelvo a hacer una pregunta
	var question = "Hola "+person.name+" Cuantos años tienes?";
	quiz(question, saveAge);
}

function quiz(question, callback){
	//iniciamos un stream de lectura
	stdin.resume();
	//escribe el parametro que le pasamos y ':'
	stdout.write(question+":");

	//cuando ocurre el evento "data" en stdin definimos una funcion callback que recibe (eso se define en la funcion .once() ) la respuesta osea la data. 
	//que a su vez se los pasa al callback como parámetro convertido en string
	stdin.once("data", function(res){
		//la respuesta se la pasamos a nuestra funcion callback para que se haga lo que se quiera con ella, ahora nosotros estamos definiendo como va a funcionar nuestro callback.
		callback(res.toString().trim());
	});
}

stdin.setEncoding("utf8");
//aqui por lo tanto saveName recibe la data que le hemos pasado anteriormente, y hace con ella lo que se le ponga a esa funcion.
quiz("Como te llamas?", saveName);
