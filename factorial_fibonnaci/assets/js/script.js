var resultadoFactorial = 0;
var resultadoFibonacci = 0;

document.getElementById("boton-factorial").addEventListener("click", mostrarFactorial);
function mostrarFactorial() {
    resultadoFactorial = calcularFactorial();
    document.getElementById("resultado-factorial").innerHTML = resultadoFactorial;
}

document.getElementById("boton-fibonacci").addEventListener("click", mostrarFibonacci);
function mostrarFibonacci() {
    var datoFibonacci = document.getElementById("numero-fibonacci").value;
    resultadoFibonacci = calcularFibonacci(datoFibonacci);
    document.getElementById("resultado-fibonacci").innerHTML = resultadoFibonacci;
}

function calcularFactorial() {
    var datoFactorial = document.getElementById("numero-factorial").value;
    var total = 1;
    for (i = 1; i <= datoFactorial; i++) {
        total = total * i;
    }
    return total;
}

function calcularFibonacci(numero) {
    var numeros = [0, 1];
    for (var i = 2; i < numero; i++) {
        numeros[i] = numeros[i - 2] + numeros[i - 1];
    }
    return numeros;
}

