$(document).ready(function (){
    // funcion para mostrar texto
    function mostrarTexto(){
       //alert("funcion mostrar texto ok");
        $("#text").fadeIn();  
    }
    function ocultarTexto(){
       // alert("ocultar texto ok"); 
        $("#text").fadeOut(); 
    }
    function cambiarColor(){
        //alert("cambiar color ok"); 
        const randomColor= '#' + Math.floor(Math.random()*16777215).toString(16); 
        $("#text").css("color",randomColor)
    }

    //asignar las funciones a los eventos  de los botones 
    $("#show-text").click(mostrarTexto);
    $("#hide-text").click(ocultarTexto);    
    $("#change-text").click(cambiarColor);
});