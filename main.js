var Cronometro = document.getElementById("time");
var Puntos = document.getElementById("puntos");
var Rango = document.getElementById("rango");
var Final = document.getElementById("final");
var audio = null;
var audio2 = null;
var number = 30;
var puntos = 0;

var jugando = false;
var una = true;
//Movimiento del Pato hecho por Jhonny Castillo
function MoverPato(){
    //juagando activa el cronometro
    jugando = true;
    //estas variable guardan un numero entero aleatorio
    //no fueron declarados las variables randnum , randNum2
    randNum  = Math.round(Math.random()*200); 
    randNum2 = Math.round(Math.random()*600);
    // se  creado variables que no se an estan utilizando 
    //documen modifica los elementos html de archivo index
    document.getElementById("patorobot").style.marginTop = randNum + "px";
    document.getElementById("patorobot").style.marginLeft = randNum2 + "px";

}
//Audio de explosion por Jhonny Castillo
function enemigo() {
    //fileUrl guarda la el sonido de la exploción
    var fileUrl = "Sounds/impacto.wav";
    //aca se esta creando el objeto audio que va  a guardar el audio
    // de la varible url hereda todos lo metodos del objeto audio
    var audio = new Audio(fileUrl);
    //este metodo play() reproduce el audio
    audio.play();
    puntos += 100;
}
//Funcion de Restar tiempo por Juan Villegas
function RestarCronometro(){
    if(jugando && number > 0){
        Cronometro.innerHTML = "<p>"+ number+"s</p>";
        number--;
    }
    //si el tiempo llega a 0
    else if(number == 0){
        //se activa la función que manda el mensaje de mi puntuación
        if(una){MostrarDatos();una = false;}
    }
}
//Funcion Mostrar Datos Finales por Juan Villegas
function MostrarDatos(){
    Final.innerHTML = "<a href = '#centrado'><button id ='botonFinal'></button></a>";
    Cronometro.innerHTML = "<p>0s</p>";
    Puntos.innerHTML = "<p>==== PUNTOS : "+ puntos+" ====</p>";
    if(puntos >= 1000)Rango.innerHTML = "<p>==== RANGO : CAPITAN ====</p>";
    else if(puntos >= 500)Rango.innerHTML = "<p>==== RANGO : OFICIAL ====</p>";
    else if(puntos >= 100)Rango.innerHTML = "<p>==== RANGO : CADETE ====</p>";
    MusicaVictoria();
    pauseInicio();
}
//supongo que setInterval llama a la funcionn cada segundo
setInterval(RestarCronometro , 1000);

//Musica de fondo por Jhonny Castillo
function MusicaInicio() {
    var fileUrl = "Sounds/fondomusicalproyecto.wav";
    audio = new Audio(fileUrl);
    audio.loop = true;
    audio.volume = 0.5;
    audio.play()
}
function pauseInicio(){
    audio.pause();
}
function MusicaVictoria(){
    var fileUrl = "Sounds/win.mp3";
    audio2 = new Audio(fileUrl);
    audio2.volume = 0.5;
    audio2.play();
}
//Eventos por Jhonny Castillo
document.getElementById('musica').addEventListener("click",MusicaInicio);
document.getElementById('patorobot').addEventListener("click",function(){setTimeout(MoverPato, 0);});
document.getElementById('patorobot').addEventListener("click",function(){setTimeout(enemigo, 250);});

//Sonido de pistola por Juan Villegas y Jhonny Castillo
function MouseSound() {
    var fileUrl = "Sounds/sonidopistola.wav";
    var audio = new Audio(fileUrl);
    audio.play();
}
window.addEventListener('click', MouseSound , false);

//Movimiento del Arma por Juan Villegas
var miArma = document.getElementById("arma-box");
function mousemove(event){
    miArma.style.position = 'fixed';
    miArma.style.left = (event.clientX / 15) + "%";
}
//Animacion de Disparo por Juan Villegas
function Shoot(){
    miArma.style.animationName = "armAnim"
    miArma.style.animationPlayState = "running";
    setTimeout(function(){miArma.style.animationPlayState = "paused";
    miArma.style.animationName = "none"} , 430);
}
//Eventos por Juan Villegas
window.addEventListener('mousemove', mousemove);
window.addEventListener('click',Shoot)
