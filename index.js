/*Ejercicio 1
Escribir un programa que pregunte al usuario su edad y muestre por pantalla si es mayor de edad o no.*/
console.log("Ejercicio 1");

 let edad = prompt("Cual es tu edad");
 console.log(edad);
 if (edad>= 18){
    console.log("Eres mayor de edad")
 }else{
    console.log("eres menor de edad");
 }
console.log("Ejercicio 2")
 
 
/*Ejercicio 2
Escribir un programa que almacene la cadena de caracteres contraseña en una variable, pregunte al usuario por la contraseña e imprima por pantalla si la contraseña introducida por el usuario coincide con la guardada en la variable.

 */
const contra= "aba22";

const c= prompt("Ingrese su contraseña");
if (contra == c){
    console.log("Contraseña correcta")
}else {
    console.log("Contraseña incorrecta !!")
}

console.log("Ejercicio 3");
/*
Ejercicio 3
Escribir un programa que pida al usuario dos números y muestre por pantalla su división. Si el divisor es cero el programa debe mostrar un error.
*/
const n1= parseFloat(prompt("Ingrese el primer numero"));
const n2= parseFloat(prompt("Ingrese el segundo numero"));
console.log(n1);
console.log(n2);
let division= (n1/n2);
 if(n1 == 0 || n2 == 0){
    console.log("ERROR!!")
 }else{
    console.log("su division es "+division);
 }

 console.log("Ejercicio 4");
 /*

Ejercicio 4
Escribir un programa que pida al usuario un número entero y muestre por pantalla si es par o impar.

 */

let np = parseInt(prompt("Ingrese un numero" ));
console.log(np);
 if(np % 2 == 0 ){
    console.log("El "+np+ " es par ");
 }else{
    console.log("El "+np+" es impar")
 }
 console.log("Ejercicio 5");
 /*
Ejercicio 5
Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos ingresos iguales o superiores a 10000 pesos mensuales. Escribir un programa que pregunte al usuario su edad y sus ingresos mensuales y muestre por pantalla si el usuario tiene que tributar o no.

 */
let edad2 = parseInt(prompt("Cual es tu edad?"));
console.log(edad2);
let ingreso = prompt("Cuanto son sus ingresos mensuales?") ;
console.log(ingreso);

if(edad2 > 16 && ingreso>=10000){
   console.log("Usted tiene que tributar");
}else{
   console.log("No tiene que tributar");
}

console.log("Ejercicio 6");
/*
Ejercicio 7
Los tramos impositivos para la declaración de la renta en un determinado país son los siguientes:


renta
tipo impositivo
Menos de 10000$	
5%
Entre 10000$ y 20000$	
15%
Entre 20000$ y 35000$	
20%
Entre 35000$ y 60000$	
30%
Más de 60000$
45%







Escribir un programa que pregunte al usuario su renta anual y muestre por pantalla el tipo impositivo que le corresponde.


*/

let renta =parseInt(prompt("Cual es su renta anual?"));
console.log(renta);
if(renta<10000){
   console.log("Su tipo impositivo es del 5%");
}else if(renta >10000 && renta <20000){
   console.log("Su tipo impositivo es del 15%");
}else if(renta >20000 && renta <35000){
   console.log("Su tipo impositivo es del 20%");
}else if(renta >35000 && renta <60000){
   console.log("Su tipo impositivo es del 30%");
}else {
     console.log("Su tipo impositivo es del 45%");
}

console.log("Ejercicio 8");


/*Ejercicio 8
En una determinada empresa, sus empleados son evaluados al final de cada año. Los puntos que pueden obtener en la evaluación comienzan en 0.0 y pueden ir aumentando, traduciéndose en mejores beneficios. Los puntos que pueden conseguir los empleados pueden ser 0.0, 0.4, 0.6 o más, pero no valores intermedios entre las cifras mencionadas. A continuación se muestra una tabla con los niveles correspondientes a cada puntuación. La cantidad de dinero conseguida en cada nivel es de 2.400$ multiplicada por la puntuación del nivel.

Nivel	Puntuación
Inaceptable	0.0
Aceptable	0.4
Meritorio	0.6 o más
Escribir un programa que lea la puntuación del usuario e indique su nivel de rendimiento, así como la cantidad de dinero que recibirá el usuario.
*/
let premio= parseInt(2400);
let puntuacion=parseFloat(prompt("Ingrese su puntuacion"));
console.log(puntuacion);
if(puntuacion == 0.0){
   console.log("Inaceptable ")
   console.log("Su premio es de "+puntuacion*premio);
}else if (puntuacion == 0.4){
   console.log("Aceptable ")
   console.log("Su premio es de "+puntuacion*premio);
}else if (puntuacion >= 0.6){
   console.log("Meritorio ")
   console.log("Su premio es de "+ puntuacion*premio);
} else{
   console.log(puntuacion+ " ERROR!!!!")
}

console.log("Ejercicio 9");
/*
Ejercicio 9
Escribir un programa para una empresa que tiene salas de juegos para todas las edades y quiere calcular de forma automática el precio que debe cobrar a sus clientes por entrar. El programa debe preguntar al usuario la edad del cliente y mostrar el precio de la entrada. Si el cliente es menor de 4 años puede entrar gratis, si tiene entre 4 y 18 años debe pagar 5$ y si es mayor de 18 años, 10$.

*/
console.log("Hola bienvenidos a king game ")
console.log("PRECIOS");
console.log("menores de 4 años gratis");
console.log("entre 4 y 18 años abonan 5$");
console.log("Mayores de 18 años abonan 10$");
let cliente= parseInt(prompt("Ingrese su edad para entrar"));

console.log(cliente);
if(cliente < 4){
   console.log("Ingrese gratis");
}else if( cliente >= 4 && cliente <18){
   console.log("Abone 5$ para entrar");
}else if(cliente > 18){
   console.log("Abone 10$ para entrar");
} else{
   console(cliente + "EDAD ERROR!!")
}