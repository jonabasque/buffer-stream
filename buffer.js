"use strict";

var buf = new Buffer(100); //Buffer de 100 bytes
var buf2 = new Buffer(26); //Buffer de 26 bytes
var str = "\u00bd + \u00bc = \u00be"; //cadena en código ASCII

/*El primer paramentro del metodo write es el string que es el obligatorio, 
el segundo la longitud del mismo, en el tercero es la posicion en la que comienza, 
y el 4º el tipo de encoding.*/ 
buf.write("abcd", 0, 4, "ascii"); 

// aquí nos mostrará los datos binarios console.log(buf.toString(“ascii”)); //Aquí en código ASCII, podemos decirle que lo pase a UTF8 o al que sea.
//console.log(buf); //nos mostrará el valor del buffer datos binarios
console.log(buf.toString("utf8")); //nos lo pasan a string en el formato que le digamos

//Me devuelve la cantidad de Bytes del buffer en utf8.
console.log( str + ":" + 
	     str.length + "caracteres, " + 
	     Buffer.byteLength(str, "utf8") + 
	     " bytes" 
	   );

for (var i = 0; i < 26; i++){ 
//26 son los bytes que tiene nuestro buffer. 

	//97 en ASCII es la 'a' 
	buf2[i] = i + 97; 
}
console.log(buf2.toString("ascii"));
