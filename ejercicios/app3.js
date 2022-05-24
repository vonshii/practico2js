// ejercicio 3


let texto = ""

do{
    let text = prompt('introduce un texto');
    if(texto == ""){
        texto = texto + text;
    }
    else
    {
        texto = texto + '-' + text;
    }
}while(confirm('Ingresar mas texto'));
document.write(texto);
