var boton = document.getElementById("boton");
var imagen = document.getElementById("imagen");
var grande = false;

// si alguien clica el botón
boton.addEventListener("click", function () {
  grande = !grande;

  if (grande) {
    imagen.style.width = "600px";
  } else {
    imagen.style.width = "400px";
  }
});
