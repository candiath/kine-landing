// https://wa.me/?text=urlencodedtext

const btn = document.querySelector("#submitBtn");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  const mensaje = document.querySelector("#mensaje");

  // Validar que el mensaje no esté vacío
  if (!mensaje.value.trim()) {
    alert("Por favor, escriba un mensaje antes de enviar.");
    return;
  }

  const url = `https://wa.me/3754437216?text=${encodeURIComponent(
    mensaje.value
  )}`;
  window.open(url, "_blank");
});
