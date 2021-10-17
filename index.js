const color_fondo = document.getElementById("color_fondo");
const numero = document.getElementById("numero");
let cantidad = 0;
let tiempo = setInterval(() => {
  cantidad += 1;
  color_fondo.style.height = `${cantidad}`;
  numero.textContent = cantidad;

  if (cantidad === 5) {
    clearInterval(tiempo);
  }
}, 80);

const color_fondoa = document.getElementById("color_fondo1");
const numeroa = document.getElementById("numero1");
let cantidada = 0;
let tiempo1 = setInterval(() => {
  cantidada += 1;
  color_fondo1.style.height = `${cantidada}`;
  numeroa.textContent = cantidada;

  if (cantidada === 100) {
    clearInterval(tiempo1);
  }
}, 80);
