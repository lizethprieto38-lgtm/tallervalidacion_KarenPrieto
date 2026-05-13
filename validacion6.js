let boton = document.getElementById("boton");

boton.addEventListener("click", validarContraseña);

function validarContraseña() {

    let nueva = document.getElementById("nuevacontra").value;
    let confirmar = document.getElementById("confirmarcontra").value;

    if (nueva.length < 8) {

        document.getElementById("resultado").innerHTML =
            "La contraseña debe tener mínimo 8 caracteres";

    }
    else if (nueva !== confirmar) {

        document.getElementById("resultado").innerHTML =
            "Las contraseñas no coinciden";

    }
    else {

        document.getElementById("resultado").innerHTML =
            "Contraseña cambiada correctamente";

    }
}