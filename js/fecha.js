document.addEventListener("DOMContentLoaded", function() {
    mostrarFecha();
  });
  
  function mostrarFecha() {
    // Obtener la fecha actual
    const fechaActual = new Date();
  
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1;
    const año = fechaActual.getFullYear();
  
    const fechaFormateada = `${dia}/${mes}/${año}`;
  
    const fechaElemento = document.getElementById("fecha");
    fechaElemento.textContent = `Fecha: ${fechaFormateada}`;
  }