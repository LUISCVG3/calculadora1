
function sumar(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    resultado = Number(num1) + Number(num2);
    return resultado;
}

function restar(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    resultado = Number(num1) - Number(num2);
    return resultado;
}

function multiplicacion(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    resultado = Number(num1) * Number(num2);
    return resultado;
}

function division(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    resultado = Number(num1) / Number(num2);
    return resultado;
}

function potencia(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    resultado = Math.pow(num1,num2);
    return resultado;
}

function raiz(){
    let num1 = document.getElementById("num1").value;
    resultado = Math.sqrt(num1);
    return resultado;
}

function absolute(){
    let num1 = document.getElementById("num1").value;
    resultado = Math.abs(num1);
    return resultado;
}

function random(resultado){
    let minimo = Number(document.getElementById("num1").value);
    let maximo = Number(document.getElementById("num2").value);
    maximo = maximo + 1;
    resultado = Math.round(Math.random()*(maximo-minimo)+minimo);
    return resultado;
}

function round() {
    const resultado = Number(document.getElementById("solucion").value);
    mostrarResultados(Math.round(resultado));
}

function floor() {
    const resultado = Number(document.getElementById("solucion").value);
    mostrarResultados(Math.floor(resultado));
}

function ceil() {
    const resultado = Number(document.getElementById("solucion").value);
    mostrarResultados(Math.ceil(resultado));
}

function mostrarResultados(resultado){
    document.getElementById("solucion").value = resultado;
}

function borrar(){
    location.reload();
}

