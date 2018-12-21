var lienzo = document.getElementById("dibujito").getContext("2d");
var min= 1, max= 299;
dibujarLinea(lienzo, "black", min, min, min, max);
dibujarLinea(lienzo, "black", max, min, max, max);
dibujarLinea(lienzo, "black", min, max, max, max);

for (var i = 0; i <= 30; i++) {
	dibujarLinea(lienzo, "blue", min, 10*i, 10*(i+1), max);
	dibujarLinea(lienzo, "blue", max, 10*i, 10*(30-i), max);
}

function dibujarLinea(lienzo, color, xinicial, yinicial, xfinal, yfinal){
	lienzo.beginPath();// indica que inicia un dibujo
	lienzo.strokeStyle = color;// se indica el color que se va a setear cuando se aplique .stroke() al trazo que se va a realizar
	lienzo.moveTo(xinicial, yinicial);// indica donde inicia el puntero(mouse)
	lienzo.lineTo(xfinal, yfinal);// indica que traza una línea desde donde está el puntero hasta el punto que se le está pasando como parametro
	lienzo.stroke();// le setea un estilo al trazao que se acaba de realizar !!!!!!!!CORROBORAR ESTO!!!!!!!!!!!!!!!
	lienzo.closePath();// indica que finaliza un dibujo
}