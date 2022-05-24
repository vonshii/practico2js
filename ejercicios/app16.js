// ejercicio 16

let frase = prompt('ingresa una frase');
function invertir(cad) {
    if (cad === "")
      return "";
    else
      return invertir(cad.substr(1)) + cad.charAt(0);
  }
 document.write(invertir(frase));