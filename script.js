function convertirTemperatura() {
  const input = document.getElementById('celsius').value;
  const resultados = document.getElementById('resultados');
  resultados.innerHTML = ''; // Limpiar resultados previos

  const celsius = parseFloat(input);

  if (isNaN(celsius)) {
    resultados.innerHTML = '<span style="color:red;">Por favor, ingrese un número válido.</span>';
    console.error('Error: Valor no numérico ingresado.');
    return;
  }

  const fahrenheit = celsius * 9 / 5 + 32;
  const kelvin = celsius + 273.15;

  resultados.innerHTML = `
    <p>${celsius} °C = ${fahrenheit.toFixed(2)} °F</p>
    <p>${celsius} °C = ${kelvin.toFixed(2)} K</p>
  `;

  console.log(`${celsius} °C = ${fahrenheit.toFixed(2)} °F`);
  console.log(`${celsius} °C = ${kelvin.toFixed(2)} K`);
}


