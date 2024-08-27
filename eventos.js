document.addEventListener("DOMContentLoaded", function() {
    
    let boton = document.getElementById("botonSaludar");

    function saludar() {
    alert("Hola!");
    }

    boton.addEventListener("click", saludar); 
})

document.addEventListener("DOMContentLoaded", function() {

let soyEldiv = document.getElementById("elDiv");

function saludaEldiv() {
    alert("Hola! Soy el div");
}

soyEldiv.addEventListener("click", saludaEldiv);
}) 
