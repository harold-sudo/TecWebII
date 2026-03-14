const titulo = document.getElementById('titulo');
const boton = document.getElementById('boton');
const inputNombre = document.getElementById('nombre');
const mensajeParrafo = document.getElementById('mensaje');
const contenedor = document.getElementById('contenedor-mensaje');

boton.addEventListener('click', () => {
    const nombreIngresado = inputNombre.value;

    if (nombreIngresado.trim() !== "") {
        mensajeParrafo.textContent = `¡Hola, ${nombreIngresado}! Qué gusto verte por aquí.`;

        titulo.textContent = "Perfil Actualizado";

        contenedor.style.backgroundColor = "#e7f3ff";
        contenedor.style.borderColor = "#007bff";
        
    } else {
        alert("Por favor, ingresa un nombre.");
    }
});