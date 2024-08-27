// Acá toda la lógica para el index
let descripcion = document.getElementById("productoTextoNr1");
let productos = [{nombre:"remera",precio:2400},{nombre:"Camisa",precio:300}]
descripcion.innerText = `${productos[0].nombre} Precio: ${productos[0].precio}`