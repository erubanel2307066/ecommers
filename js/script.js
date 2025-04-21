/ Datos de productos (podrían venir de una API en un futuro)
const productos = [
    { id: 1, nombre: "iphone 16", precio: 20000.00, imagen: "images/prod1.jpg" },
    { id: 2, nombre: "Tablet Reamid", precio: 3500.00, imagen: "images/prod2.jpg" },
    { id: 3, nombre: "Producto 3", precio: 50.00, imagen: "images/prod3.jpg" },
    { id: 4, nombre: "Producto 4", precio: 15.00, imagen: "images/prod4.png" },
    { id: 5, nombre: "Producto 5", precio: 45.00, imagen: "images/prod5.png" },
    { id: 6, nombre: "Producto 6", precio: 25.00, imagen: "images/prod6.jpg" },
    { id: 7, nombre: "Producto 7", precio: 30.00, imagen: "images/prod7.jpg" },
    { id: 8, nombre: "Producto 8", precio: 40.00, imagen: "images/prod8.jpg" },
    { id: 9, nombre: "Producto 9", precio: 60.00, imagen: "images/prod9.jpg" }
];

let carrito = [];

// Mostrar productos en la tienda
const productList = document.getElementById("product-list");

productos.forEach(producto => {
    let div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>Precio: $${producto.precio.toFixed(2)}</p>
        <button onclick="agregarAlCarrito(${producto.id})">Añadir al carrito</button>
    `;
    productList.appendChild(div);
});

// Guardar carrito en localStorage
function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Agregar producto al carrito
function agregarAlCarrito(id) {
    let producto = productos.find(p => p.id === id);
    carrito.push(producto);
    actualizarCarrito();
    guardarCarrito(); // Guardar el carrito actualizado
}

// Actualizar vista del carrito
function actualizarCarrito() {
    let cartItems = document.getElementById("cart-items");
    let cartTotal = document.getElementById("cart-total");
    let cartCount = document.getElementById("cart-count");

    cartItems.innerHTML = "";
    let total = 0;

    carrito.forEach((producto, index) => {
        let li = document.createElement("li");
        li.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
        cartItems.appendChild(li);
        total += producto.precio;
    });

    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = carrito.length;
}

// Vaciar carrito
document.getElementById("clear-cart").addEventListener("click", () => {
    carrito = [];
    actualizarCarrito();
});
