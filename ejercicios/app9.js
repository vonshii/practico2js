// ejercicio 9


let i;
let limite = 500;
let rep = 0;

for (i = 1; i <= limite; i++) {
    document.write(i);


    if (i % 4 == 0) {
        document.write(' (Multiplo de 4)');
    }


    if (i % 9 == 0) {
        document.write(' (Multiplo de 9)');
    }
    document.write('<br>')

    if (i % 5 == 0) {
        document.write('<hr>');
    }
}