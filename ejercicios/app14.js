// ejercicio 14

let frase = prompt('ingrese una frase:');
let ncaracter = frase.length;
let caracter;
let i;

for(i = 0; i < ncaracter; i++){
    caracter = frase.charAt(i);

    if(i == ncaracter- 1){
        document.write(caracter);
    }
    else{
        document.write(caracter + '-');
    }
}
