'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}





/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

const showAlert = () => {
  let message = alert("Pergunta é o CARALHO. Eu sou casada PORRA!").
  alert(message);
}

const termsAlert = () => {
  let message = alert("O termo é você me amar pra sempre e casar comigo, te amo minha princesa, nós juntos para todo o sempre.").
  alert(message);
}

const policyAlert = () => {
  let message = alert("A política de privicidade é nós dois pelados e o resto você ja sabe minha gatinha").
  alert(message);
}