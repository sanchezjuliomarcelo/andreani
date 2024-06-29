document.addEventListener("DOMContentLoaded", function () {
  // Campo "Contrato"
  const contratoSelect = document.getElementById("contrato");
  const contratoValores = {
    "Contrato-1": 400029479,
    "Contrato-2": 400029481,
    "Contrato-3": 400029487,
    "Contrato-4": 351003468,
    "Contrato-5": 400029483,
  };

  // Escucha cambios en el campo "Contrato"
  contratoSelect.addEventListener("change", function () {
    const contratoSeleccionado = contratoSelect.value;
    const valorContrato = contratoValores[contratoSeleccionado];
    console.log(`Valor del contrato: ${valorContrato}`);
    // Almacena en localStorage
    localStorage.setItem("contratoSeleccionado", contratoSeleccionado);
  });

  // Elementos destinatario
  const codigoPostalInput = document.getElementById("CodigoPostal");
  const calleInput = document.getElementById("Calle");
  const numeroInput = document.getElementById("Numero");
  const localidadInput = document.getElementById("Localidad");
  const provinciaInput = document.getElementById("Provincia");
  const paisInput = document.getElementById("Pais");

  // Variables destinatario
  let codigoPostal;
  let calle;
  let numero;
  let localidad;
  let pais;

  // Escucha cambios en el campo del formulario
  codigoPostalInput.addEventListener("input", function () {
    codigoPostal = codigoPostalInput.value;
    console.log(`Código Postal: ${codigoPostal}`);
    // Almacena en sessionStorage
    sessionStorage.setItem("codigoPostal", codigoPostal);
  });

  calleInput.addEventListener("input", function () {
    calle = calleInput.value;
    console.log(`Calle: ${calle}`);
    // Almacena en sessionStorage
    sessionStorage.setItem("calle", calle);
  });

  numeroInput.addEventListener("input", function () {
    numero = numeroInput.value;
    console.log(`Número: ${numero}`);
    // Almacena en sessionStorage
    sessionStorage.setItem("numero", numero);
  });

  localidadInput.addEventListener("input", function () {
    localidad = localidadInput.value;
    console.log(`Localidad: ${localidad}`);
    // Almacena en sessionStorage
    sessionStorage.setItem("localidad", localidad);
  });

  provinciaInput.addEventListener("input", function () {
    provincia = provinciaInput.value;
    console.log(`Provincia: ${provincia}`);
    // Almacena en sessionStorage
    sessionStorage.setItem("provincia", provincia);
  });

  paisInput.addEventListener("input", function () {
    pais = paisInput.value;
    console.log(`País: ${pais}`);
    // Almacena en sessionStorage
    sessionStorage.setItem("pais", pais);
  });

  // Calculadora de volumen
  const largoInput = document.getElementById("Largo");
  const anchoInput = document.getElementById("Ancho");
  const altoInput = document.getElementById("Alto");
  const volumenCalculado = document.getElementById("volumen-calculado");

  [largoInput, anchoInput, altoInput].forEach((input) => {
    input.addEventListener("input", calcularVolumen);
  });

  function calcularVolumen() {
    const [largo, ancho, alto] = [largoInput, anchoInput, altoInput].map(
      (input) => parseFloat(input.value) || 0
    );

    const volumen = (largo * ancho * alto * 3.5) / 10000;
    volumenCalculado.textContent = volumen.toFixed(2);
    console.log("Volumen calculado: " + volumen.toFixed(2));
    // Almacena en localStorage
    localStorage.setItem("volumenCalculado", volumen.toFixed(2));
    return volumen;
  }

  // Relación de peso y volumen
  const pesoInput = document.getElementById("Peso");

  pesoInput.addEventListener("input", function () {
    Peso = parseFloat(pesoInput.value) || 0;
    console.log(`Peso (kg): ${Peso}`);
    // Almacena en localStorage
    localStorage.setItem("pesoInput", Peso);
    compararPesoYVolumen();
  });

  function compararPesoYVolumen() {
    const peso = Peso;
    const volumen = calcularVolumen();

    if (isNaN(peso) || isNaN(volumen)) {
      return;
    }

    if (peso > volumen) {
      console.log("El peso es mayor que el volumen.");
    } else if (volumen > peso) {
      console.log("El volumen calculado es mayor que el peso.");
    } else {
      console.log("El peso y el volumen son iguales.");
    }
  }

  // Validación en el botón de enviar
  const enviarButton = document.querySelector("button[type='submit']");

  enviarButton.addEventListener("click", function (event) {
    event.preventDefault();

    // Obtener valores del formulario
    const contrato = contratoSelect.value;
    const codigoPostal = codigoPostalInput.value;
    const calle = calleInput.value;
    const numero = numeroInput.value;
    const localidad = localidadInput.value;
    const provincia = provinciaInput.value;
    const pais = paisInput.value;
    const peso = parseFloat(pesoInput.value) || 0;
    const largo = parseFloat(largoInput.value) || 0;
    const ancho = parseFloat(anchoInput.value) || 0;
    const alto = parseFloat(altoInput.value) || 0;

    // Validar campos
    if (
      contrato === "Seleccionar" ||
      isNaN(peso) ||
      isNaN(largo) ||
      isNaN(ancho) ||
      isNaN(alto) ||
      calle === "" ||
      numero === "" ||
      isNaN(codigoPostal)
    ) {
      mostrarMensaje(
        "Por favor, complete todos los campos antes de enviar",
        "orange"
      );
    } else {
      mostrarMensaje("Formulario enviado con éxito", "green");

      // Crear objeto
      const infoEnvio = {
        contrato,
        codigoPostal,
        calle,
        numero,
        localidad,
        provincia,
        pais,
        peso,
        largo,
        ancho,
        alto,
        volumen: calcularVolumen(),
        costoFlete: calcularCostoFlete(),
      };

      // Convierte a JSON
      const infoEnvioJSON = JSON.stringify(infoEnvio, null, 2);

      // Crear y descarga el JSON
      descargarArchivo(infoEnvioJSON, "info_envio.json");
    }
  });

// pop-up con SweetAlert
function mostrarMensaje(mensaje, color) {
  Swal.fire({
    text: mensaje,
    icon: color === "green" ? "success" : "warning", 
    timer: 2000,
    timerProgressBar: true,
    position: 'center', 
    toast: true,
    showConfirmButton: false, 
    customClass: {
      container: 'swal2-center-container'
    }
  });
}

  // Función para calcular el costo de flete
  function calcularCostoFlete() {
    return 0;
  }

  // Función para descargar el archivo JSON
  function descargarArchivo(contenido, nombreArchivo) {
    const blob = new Blob([contenido], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = nombreArchivo;

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
});

