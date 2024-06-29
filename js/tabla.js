// matriz de datos
const data = [
  {
    ZipCodeStart: 1000,
    ZipCodeEnd: 1987,
    WeightStart: 100,
    WeightEnd: 2000,
    AbsoluteMoneyCost: 1814,
  },
  {
    ZipCodeStart: 1000,
    ZipCodeEnd: 1987,
    WeightStart: 2001,
    WeightEnd: 5000,
    AbsoluteMoneyCost: 1926,
  },
  {
    ZipCodeStart: 1000,
    ZipCodeEnd: 1987,
    WeightStart: 5001,
    WeightEnd: 10000,
    AbsoluteMoneyCost: 2153,
  },
  {
    ZipCodeStart: 1000,
    ZipCodeEnd: 1987,
    WeightStart: 10001,
    WeightEnd: 15000,
    AbsoluteMoneyCost: 2830,
  },
  {
    ZipCodeStart: 1000,
    ZipCodeEnd: 1987,
    WeightStart: 15001,
    WeightEnd: 20000,
    AbsoluteMoneyCost: 3382,
  },
  {
    ZipCodeStart: 1000,
    ZipCodeEnd: 1987,
    WeightStart: 20001,
    WeightEnd: 35000,
    AbsoluteMoneyCost: 4699,
  },
  {
    ZipCodeStart: 1000,
    ZipCodeEnd: 1987,
    WeightStart: 35001,
    WeightEnd: 50000,
    AbsoluteMoneyCost: 5822,
  },
  {
    ZipCodeStart: 1000,
    ZipCodeEnd: 1987,
    WeightStart: 50001,
    WeightEnd: 60000,
    AbsoluteMoneyCost: 6986,
  },
  {
    ZipCodeStart: 1988,
    ZipCodeEnd: 7104,
    WeightStart: 100,
    WeightEnd: 2000,
    AbsoluteMoneyCost: 2427,
  },
  {
    ZipCodeStart: 1988,
    ZipCodeEnd: 7104,
    WeightStart: 2001,
    WeightEnd: 5000,
    AbsoluteMoneyCost: 2760,
  },
  {
    ZipCodeStart: 1988,
    ZipCodeEnd: 7104,
    WeightStart: 5001,
    WeightEnd: 10000,
    AbsoluteMoneyCost: 3750,
  },
  {
    ZipCodeStart: 1988,
    ZipCodeEnd: 7104,
    WeightStart: 10001,
    WeightEnd: 15000,
    AbsoluteMoneyCost: 4070,
  },
  {
    ZipCodeStart: 1988,
    ZipCodeEnd: 7104,
    WeightStart: 15001,
    WeightEnd: 20000,
    AbsoluteMoneyCost: 5036,
  },
  {
    ZipCodeStart: 1988,
    ZipCodeEnd: 7104,
    WeightStart: 20001,
    WeightEnd: 35000,
    AbsoluteMoneyCost: 7593,
  },
  {
    ZipCodeStart: 1988,
    ZipCodeEnd: 7104,
    WeightStart: 35001,
    WeightEnd: 50000,
    AbsoluteMoneyCost: 9956,
  },
  {
    ZipCodeStart: 1988,
    ZipCodeEnd: 7104,
    WeightStart: 50001,
    WeightEnd: 60000,
    AbsoluteMoneyCost: 11947,
  },
  {
    ZipCodeStart: 7105,
    ZipCodeEnd: 8225,
    WeightStart: 100,
    WeightEnd: 2000,
    AbsoluteMoneyCost: 3452,
  },
  {
    ZipCodeStart: 7105,
    ZipCodeEnd: 8225,
    WeightStart: 2001,
    WeightEnd: 5000,
    AbsoluteMoneyCost: 4235,
  },
  {
    ZipCodeStart: 7105,
    ZipCodeEnd: 8225,
    WeightStart: 5001,
    WeightEnd: 10000,
    AbsoluteMoneyCost: 4981,
  },
  {
    ZipCodeStart: 7105,
    ZipCodeEnd: 8225,
    WeightStart: 10001,
    WeightEnd: 15000,
    AbsoluteMoneyCost: 6083,
  },
  {
    ZipCodeStart: 7105,
    ZipCodeEnd: 8225,
    WeightStart: 15001,
    WeightEnd: 20000,
    AbsoluteMoneyCost: 7719,
  },
  {
    ZipCodeStart: 7105,
    ZipCodeEnd: 8225,
    WeightStart: 20001,
    WeightEnd: 35000,
    AbsoluteMoneyCost: 1289,
  },
  {
    ZipCodeStart: 7105,
    ZipCodeEnd: 8225,
    WeightStart: 35001,
    WeightEnd: 50000,
    AbsoluteMoneyCost: 16664,
  },
  {
    ZipCodeStart: 7105,
    ZipCodeEnd: 8225,
    WeightStart: 50001,
    WeightEnd: 60000,
    AbsoluteMoneyCost: 19997,
  },
];

// Función para buscar el valor
function buscarValor() {
  const codigoPostal = parseInt(
    document.getElementById("CodigoPostal").value,
    10
  );
  const peso = parseInt(document.getElementById("Peso").value, 10);
  const resultado = data.find((item) => {
    return (
      item.ZipCodeStart <= codigoPostal &&
      item.ZipCodeEnd >= codigoPostal &&
      item.WeightStart <= peso &&
      item.WeightEnd >= peso
    );
  });

  // Muestra el resultado
  if (resultado) {
    const precioCalculadoElement = document.getElementById("precio-calculado");
    precioCalculadoElement.textContent = resultado.AbsoluteMoneyCost;
  } else {
    console.log("No se encontró un resultado.");
  }
}

document.getElementById("CodigoPostal").addEventListener("input", buscarValor);
document.getElementById("Peso").addEventListener("input", buscarValor);
