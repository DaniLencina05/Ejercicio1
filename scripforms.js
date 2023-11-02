function cambiarEstado(){
    const select = document.getElementById('estado');
    const estadoActual = document.getElementById('estadoActual');
    const opcionSeleccionada = select.value;

    estadoActual.textContent = opcionSeleccionada;
}
    
