//VINCULAR MI MENÚ
var circle = document.getElementById ('circle');
var azul = document.getElementById ('azul');

//FUNCIÓN
function activar () {
    azul.classList.add ("activaazul");
}
//SUCESO
circle.addEventListener ('click', activar);