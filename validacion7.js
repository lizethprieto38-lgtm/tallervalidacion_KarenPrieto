let boton = document.getElementById("boton");

boton.addEventListener("click", calcularProductos);

function calcularProductos() {

    let producto = document.getElementById("producto").value;
    let precio = parseFloat(document.getElementById("precio").value);
    let cantidad = parseInt(document.getElementById("cantidad").value);

    if (cantidad <= 0) {
        console.log("La cantidad debe ser positiva");
    }
    else if (precio <= 0 || isNaN(precio)) {
        console.log("Ingrese un precio válido");
    }
    else {

        let subtotal = precio * cantidad;
        let iva = subtotal * 0.19;
        let total = subtotal + iva;

        document.getElementById("resultado").innerHTML =
            "Producto: " + producto + "<br>" +
            "Subtotal: " + subtotal + "<br>" +
            "IVA: " + iva + "<br>" +
            "Total: " + total;
    }
}