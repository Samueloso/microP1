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
