// Acá toda la lógica para el index
<<<<<<< HEAD
let descripcion = document.getElementById("productoTextoNr1");
let productos = [{nombre:"remera",precio:2400},{nombre:"Camisa",precio:300}]
descripcion.innerText = `${productos[0].nombre} Precio: ${productos[0].precio}`
=======
const productos = [
    { nombre: "Remera de hombre", precio: 3200},
    { nombre: "Vestido de Gala", precio: 5000},
    { nombre: "Vestido de Verano", precio: 4200},
    { nombre: "Jean", precio: 6800},
    { nombre: "Sudadera", precio: 1600},
    { nombre: "Traje", precio: 12000},
    { nombre: "Sueter", precio: 3600},
    { nombre: "Poncho", precio: 4000},
    { nombre: "Abrigo", precio: 7200},    
]

let productonr1 = document.getElementById("texto-producto1");

let idDeProductos = [];
for (let i = 1; i <= 9; i++) {
    idDeProductos.push("texto-producto" + i)
};


productonr1.textContent = `${productos[0].nombre} Precio:${productos[0].precio}`;
function rellenarDescripcion() {
    idDeProductos.forEach((id, index) => {
        let producto = productos[index]; 
        let elemento = document.getElementById(id);
        if (producto && elemento) { 
            elemento.textContent = `${producto.nombre} Precio: ${producto.precio}`;
        }
    });
};

rellenarDescripcion();

//Funcion para obtner el precio sub total de cada producto en base a las cantidades y el precio ya estipulado
let idCant = [];
for (let i = 1; i <= 9; i++) {
    idCant.push("cant" + i)
};

function capturar() {
    let precioSubTotal = [];
    let cantidades = [];
    for (let i = 1; i <= 9; i++){
        let currentValue = "cant" + i; 
        //si el valor del Id esta relleno, entonces se lo guardara en el arreglo ya multiplicado por su precio.
        if (document.getElementById(currentValue).value) {
            precioSubTotal.push(document.getElementById(currentValue).value * productos[(i - 1)].precio);
            cantidades.push(document.getElementById(currentValue).value)
        }
    }
    alert(precioSubTotal);
    alert(cantidades)


}
>>>>>>> 0bacaa24c7870ca0c6d2dc68b40fa042c45b6012
