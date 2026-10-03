/* Menu de navegação responsivo — comportamento acessível e sem dependências. */
(function () {
  "use strict";

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("menu-principal");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // Fecha o menu ao pressionar Escape ou ao clicar fora dele.
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });

    document.addEventListener("click", function (event) {
      if (
        nav.classList.contains("is-open") &&
        !nav.contains(event.target) &&
        !toggle.contains(event.target)
      ) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    // Evita estado inconsistente ao voltar de um breakpoint no desktop.
    var media = window.matchMedia("(min-width: 981px)");
    var onChange = function (event) {
      if (event.matches) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    };
    if (media.addEventListener) media.addEventListener("change", onChange);
    else if (media.addListener) media.addListener(onChange);
  }

  // Ano corrente no rodapé.
  var year = document.querySelectorAll("[data-current-year]");
  for (var i = 0; i < year.length; i++) {
    year[i].textContent = new Date().getFullYear();
  }
})();
