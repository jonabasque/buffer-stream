"use strict";

var fs = require("fs"); 
//Creo un stream de solo lectura
var readStream = fs.createReadStream("./statics/nombres.txt"); 
//Creo un stream de solo escritura
var writeStream = fs.createWriteStream("./statics/nombres_copia.txt");

//Con .pipe() me hace que lo que me lee Node sea escribible. 
readStream.pipe(process.stdout); 
//No podriamos anidarlos por que la invocacion de pipe no nos devuelve el propio objeto con lo que no tendriamos disponible el metodo pipe()  

//process.stdout me da un stream scribible, y es lo que me permite cambiarlo y me da la apertura para pasarlo de leible a escribible. y prodess.stdin me haría lo contrario, y ...
readStream.pipe(writeStream); //Le paso el chorro de informacion de escritura.

//UN STREAM TIENE VARIOS EVENTOS DEFINIDOS, PODEMOS DEFINIRLE MAS COMO YA SABEMOS.
//Cuando recibimos un chunk imprimimos el número de caracteres que tiene. 
readStream.on("data", function(chunk){ 
	console.log("He leido:", chunk.length, "caracteres"); 
});

//Cuando se termina el Stream avisamos de ello 
readStream.on("end", function(){ 
	console.log("Se terminó el stream"); 
});



