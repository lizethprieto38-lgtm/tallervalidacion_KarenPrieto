let boton = document.getElementById("boton");

boton.addEventListener("click", calcularIMC);

function calcularIMC() {

    let nombre = document.getElementById("nombre").value;
    let edad = parseInt(document.getElementById("edad").value);
    let peso = parseFloat(document.getElementById("peso").value);
    let estatura = parseFloat(document.getElementById("estatura").value);

    let imc = peso / (estatura * estatura);

    let clasificacion;

    if (imc < 18.5) {
        clasificacion = "Bajo peso";
    } else if (imc < 25) {
        clasificacion = "Normal";
    } else {
        clasificacion = "Sobrepeso";
    }

    document.getElementById("resultado").innerHTML =
        "Paciente: " + nombre + "<br>" +
        "Edad: " + edad + "<br>" +
        "IMC: " + imc.toFixed(2) + "<br>" +
        "Clasificación: " + clasificacion;
}