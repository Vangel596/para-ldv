document.querySelectorAll(".tarjeta").forEach((boton) => {
  const carta = document.getElementById(boton.getAttribute("aria-controls"));
  const flecha = boton.querySelector(".flecha");

  boton.addEventListener("click", () => {
    const estaAbierta = boton.getAttribute("aria-expanded") === "true";

    boton.setAttribute("aria-expanded", String(!estaAbierta));
    carta.classList.toggle("oculta", estaAbierta);
    flecha.textContent = estaAbierta ? "＋" : "−";
  });
});
