// ejercicio 8

let n1 = prompt('ingrese un numero de repeticiones: ');

if (Number(n1) == n1) {
    if (n1 > 0 && n1 <= 50) {
        let rep, i;
        for (i = 0; i <= n1; i++) {
            for (rep = 1; rep <= i; rep++) {
                document.write(rep);
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