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
