// ejercicio 15 

let frase = prompt('ingrese una frase:');
let ncaracter = frase.length;
frase = frase.toUpperCase();

let caracter;

let contador = 0;

let i;

for(i = 0; i<ncaracter; i++){
    caracter = frase.charAt(i);
    if(caracter == 'A' || caracter == 'E' || caracter == 'I' || caracter == 'O' || caracter == 'U'){
        contador++;
    }
}

document.write('Numero de vocales: ' + contador + '.');
