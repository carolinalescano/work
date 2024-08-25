// Acá toda la lógica para el index
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