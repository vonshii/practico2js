// ejerccio 2

var nota = parseInt(prompt('ingrese su nota: '));

if(nota <= 2){
alert('Muy deficiente');
}else if(nota <= 4)
{
    alert('insuficiente');
}else if(nota <= 6)
{
    alert('suficiente');
}else if(nota <= 7)
{
    alert('bien');
}else if(nota <= 9)
{
    alert('notable');
}else if(nota <= 10)
{
    alert('sobresaliente');
}else{
    alert('introduce un numero valido');
}