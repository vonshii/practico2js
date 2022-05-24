// ejercicio 7

let n1 = prompt('ingrese un numero de repeticiones: ');

if (Number(n1) == n1) {
    if (n1 > 0 && n1 <= 50) {
        let rep, i;
        for (i = n1; i > 0; i--) {
            for (rep = i; rep > 0; rep--) {
                document.write(i);
            }
            document.write('<br>');
        }
    } else {
        alert('El numero ingresado no es valido');
    }
}
else{
    alert('No has introducido un numero')
}