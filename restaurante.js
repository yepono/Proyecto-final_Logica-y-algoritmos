const platillos = [
    { id: 1, nombre: "Tacos al pastor", precio: 50, cantidad: 0, categoria: "Comida"},
    { id: 2, nombre: "Enchiladas verdes", precio: 60, cantidad: 100, categoria: "Comida"},
    { id: 3, nombre: "Flan de la abuela", precio: 80, cantidad: 50, categoria: "Postres"},
    { id: 4, nombre: "Cafe de olla", precio: 40, cantidad: 340, categoria: "Bebidas"},
    { id: 5, nombre: "", precio: 40, cantidad: 340, categoria: "Bebidas"},
]

console.log("BIenvenido a nuestro restaurante =====");



// 1. Mostrar el mnu con platillos disponibles
const menuDisponible = platillos.map((platillo) => {
    return platillo.cantidad > 0;
});

console.log("\nAqui esta nuestro menu");

// Muestra solo los nombres de los platillos disponibles
const nombresDisponibles = menuDisponible.map((platilos) => {
    return '${platillos.nombre} - $${platillos.precio}';
});
console.log(nombresDisponibles);

// Buscar un platillo por su nombre (platillos especifico)
function buscarPlatillo(nombre) {
    return platillos.find((platillos) => {
        return platillo.nombre.toLowerCase() === nombre.toLowerCase();
    });
}

const platilloBuscado = "Chile morron";
const resultadoBusqueda = buscarPlatillo(platilloBuscado);

console.log(`\n Buscando el platillo: ${platilloBuscado}`);
console.log(resultadoBusqueda ? `Platillo encontrado: ${resultadoBusqueda.nombre} - $${resultadoBusqueda.precio}` : "Platillo no encontrado");

// Calcular valorTotalInventario
function calcularValorInventario(menu) {
    return menu.reduce((total, platillo) => {
        return total + (platillo.precio * platillo.cantidad);

    }, 0);
}

const valorTotalInventario = calcularValorInventario(platillos);
console.log(`\n Valor total del inventario: $${valorTotalInventario}`);

// Revisar platillos agotados
const platillosAgotados = platillos.some((platillo) => {
    return platillo.cantidad === 0;
})
console.log(`\n Hay platillos agotados?`);
console.log(platillosAgotados ? "Si, hay platillos agotados": "No, todos los platillos estan disponibles.");

// Ordenar productos por precio
let platillosOrdenados = [...menuDisponible].sort((a,b) => a.precio - b.precio);
console.log("\n Platillos ordenados por precio (de menor a mayor):");
platillosOrdenados = platillosOrdenados.map((platillo) => {
    return `${platillo.nombre} - $${platillo.precio}`;
});
console.log(platillosdOrdenados);

// Filtrar platillos por categoria
function filtrarPorCategoria(categoria) {
    return platillos.filter((platillo) => {
        return platillo.categoria.toLowerCase() === categoria.toLowerCase();
    });
}

const categoriaBuscada = "Bebidas";
console.log(`\n Platillos en la categoria ${categoriaBuscada}`);
const platillosCategoria = filtrarPorCategoria(categoriaBuscada);
console.log(platillosCategoria);

