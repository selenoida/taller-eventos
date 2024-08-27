document.addEventListener("DOMContentLoaded", function() {
    
    let boton = document.getElementById("botonSaludar");
    let soyEldiv = document.getElementById("elDiv");


    function saludar(event) {
        alert("Hola!");
        event.stopPropagation();
    }

    function saludaEldiv() {
        alert("Hola! Soy el div");
    }

    boton.addEventListener("click", saludar); 
    soyEldiv.addEventListener("click", saludaEldiv);
}) 
