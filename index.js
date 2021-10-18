<<<<<<< HEAD
var imagenes = [
    "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg",
    "https://quenoticias.com/wp-content/uploads/2021/08/O43TC2B4K5A6VFHYNMB7F4KU74.jpg",
    "https://d7lju56vlbdri.cloudfront.net/var/ezwebin_site/storage/images/_aliases/img_1col/opinion/islas-galapagos-ver-la-evolucion-tal-y-como-lo-hizo-darwin/2577287-2-esl-MX/Islas-Galapagos-ver-la-evolucion-tal-y-como-lo-hizo-Darwin.jpg",
  ],
  cont = 0;

function carrousel(contenedor) {
  contenedor.addEventListener("click", (e) => {
    let atras = contenedor.querySelector(".atras"),
      adelante = contenedor.querySelector(".adelante"),
      img = contenedor.querySelector("img"),
      tgt = e.target;

    if (tgt == atras) {
      if (cont > 0) {
        img.src = imagenes[cont - 1];
        cont--;
      } else {
        img.src = imagenes[imagenes.length - 1];
        cont = imagenes.length - 1;
      }
    } else if (tgt == adelante) {
      if (cont < imagenes.length - 1) {
        img.src = imagenes[cont + 1];
        cont++;
      } else {
        img.src = imagenes[0];
        cont = 0;
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  let contenedor = document.querySelector(".contenedor");
  carrousel(contenedor);
});
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
=======
const boton_enviar = document.getElementById("boton_send");
const form = document.getElementById("form_id");
let name_form = document.getElementById("name");
let last_form = document.getElementById("last_name");

let email_form = document.getElementById("e-mail");

boton_enviar.addEventListener("click", (event) => {
  if (name_form.value === "") {
    form.innerHTML += `<div><p>Envio fallo, asegurate de completar todos los datos del formulario</p></div>`;
  } else if (last_form.value === "") {
    form.innerHTML += `<div><p>Envio fallo, asegurate de completar todos los datos del formulario</p></div>`;
  } else if (email_form.value === "") {
    form.innerHTML += `<div><p>Envio fallo, asegurate de completar todos los datos del formulario</p></div>`;
  } else {
    form.innerHTML += `<p>Envio completado con exito</p>`;
  }
});
>>>>>>> contactme
