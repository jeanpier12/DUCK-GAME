var segundos =30;
var caja=document.getElementById("caja");

//declarando e inicializando la función
function actualizarTiempo(){

caja.innerHTML= "<p>"+segundos+"</p>";
if(segundos == 0){

    alert("se termino el tiempo");
}else{

    segundos--;
    setTimeout("actualizarTiempo()",1000);
}

}

actualizarTiempo();

// funcion del otro archivo js
function RestarCronometro(){
    
    Cronometro.innerHTML = "<p>"+ number+"s</p>";
     alert(jugando);
    //si jugando y nuemro es mayor a cero se activa la siguiente sentencia 
    if( number == 0){
           //se activa la función que manda el mensaje de mi puntuación
           if(una){MostrarDatos();una = false;}
        }
  
    else if(jugando ==true ) {
     
       
        number--;
        setTimeout("RestarCronometro()", 1000);
       
    }

    
}