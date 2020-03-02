var on = true;
var resultado = document.getElementById("resultado");
var pantalla = document.getElementById("pantalla");

document.getElementById("clear").addEventListener("click", clear);
function clear() {
    resultado.innerHTML = "0"
}

document.getElementById("on-button").addEventListener("click", onButton);
function onButton() {
    on = true;
    resultado.style.color = "rgb(0, 0, 0, 1)";4
    pantalla.style.backgroundColor = "rgb(33, 105, 35)";
}

document.getElementById("off").addEventListener("click", offButton);
function offButton() {
    on = false;
    resultado.style.color = "rgb(0, 0, 0, 0)";
    pantalla.style.backgroundColor = "rgb(99, 110, 100)";
}