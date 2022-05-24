// ejercicio 4

let numero = 0;

do {
    let n = prompt('ingrese un nro');
    if(Number(n) == n){
        n = Number(n);
        numero = numero + n
    }else{
        if(n !=Number){
            alert('No es un numero')
        }

    }
} while (confirm('ingrese otro numero'))
document.write('el resultado es: ' , numero)