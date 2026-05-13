let boton = document.getElementById("boton");

boton.addEventListener("click", calcularNotas);

function calcularNotas() {

    let nombre = document.getElementById("nombre").value;
    let Notauno = parseFloat(document.getElementById("Notauno").value);
    let Notados = parseFloat(document.getElementById("Notados").value);
    let Notatres = parseFloat(document.getElementById("Notatres").value);

    if (
        Notauno < 0 || Notauno > 5 || isNaN(Notauno) ||
        Notados < 0 || Notados > 5 || isNaN(Notados) ||
        Notatres < 0 || Notatres > 5 || isNaN(Notatres)
    ) {
        document.getElementById("resultado").innerHTML =
            "Las notas deben estar entre 0 y 5";
    }
    else {

        let promedio = (Notauno + Notados + Notatres) / 3;

        let estado;

        if (promedio >= 3.0) {
            estado = "Aprobado";
        } else {
            estado = "Reprobado";
        }

        document.getElementById("resultado").innerHTML =
            "Nombre: " + nombre + "<br>" +
            "Nota 1: " + Notauno + "<br>" +
            "Nota 2: " + Notados + "<br>" +
            "Nota 3: " + Notatres + "<br>" +
            "Promedio: " + promedio.toFixed(2) + "<br>" +
            "Estado: " + estado;
    }
}