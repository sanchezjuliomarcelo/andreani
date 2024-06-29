// tabla para mostrar en html//
document.addEventListener('DOMContentLoaded', function () {
    const tablaValores = [
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
  ]

  // contenedor de la tabla
  const tablaContainer = document.getElementById('tabla-container');

  // Crea la tabla
  const tabla = document.createElement('table');
  tabla.className = 'table'; 

  // encabezado
  const encabezado = document.createElement('thead');
  const encabezadoFila = document.createElement('tr');
  Object.keys(tablaValores[0]).forEach((clave) => {
      const th = document.createElement('th');
      th.textContent = clave;
      encabezadoFila.appendChild(th);
  });
  encabezado.appendChild(encabezadoFila);
  tabla.appendChild(encabezado);

  // cuerpo 
  const cuerpoTabla = document.createElement('tbody');
  tablaValores.forEach((fila) => {
      const tr = document.createElement('tr');
      Object.values(fila).forEach((valor) => {
          const td = document.createElement('td');
          td.textContent = valor;
          tr.appendChild(td);
      });
      cuerpoTabla.appendChild(tr);
  });
  tabla.appendChild(cuerpoTabla);

  // Agrega la tabla 
  tablaContainer.appendChild(tabla);

})
