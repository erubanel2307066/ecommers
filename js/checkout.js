// Cargar carrito desde localStorage
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Elementos del DOM
const checkoutItems = document.getElementById("checkout-items");
const checkoutTotal = document.getElementById("checkout-total");

// Mostrar productos en la página de checkout
function mostrarCheckout() {
    checkoutItems.innerHTML = ""; // Limpiar lista
    let total = 0;

    carrito.forEach(producto => {
        let li = document.createElement("li");
        li.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
        checkoutItems.appendChild(li);
        total += producto.precio;
    });

    checkoutTotal.textContent = total.toFixed(2);
}

// Confirmar compra
document.getElementById("confirm-purchase").addEventListener("click", () => {
    if (carrito.length === 0) {
        alert("El carrito está vacío. Agrega productos antes de confirmar la compra.");
        return;
    }

    alert("¡Gracias por tu compra! Tu pedido ha sido confirmado.");
    localStorage.removeItem("carrito"); // Vaciar carrito
    window.location.href = "index.html"; // Redirigir al inicio
});

// Llamar a la función para mostrar los productos
mostrarCheckout();
