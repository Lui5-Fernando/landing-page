function scrollToSection(sectionId, event) {
  event.preventDefault();
  var section;
  if (sectionId === "conheca-mais-section") {
    section = document.querySelector("#conheca-mais-section");
  } else if (sectionId === "sobre-section") {
    section = document.querySelector("#sobre-section");
  } else if (sectionId === "beneficios-section") {
    section = document.querySelector("#beneficios-section");
  } else if (sectionId === "como-funciona-section") {
    section = document.querySelector("#como-funciona-section");
  }

  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

const observadorAnimDescer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.add("anim-descer-show");
  });
});

const itensAnimacaoDescer = document.querySelectorAll(".anim-descer-hidden");
itensAnimacaoDescer.forEach((element) => observadorAnimDescer.observe(element));

const observadorAnimSubir = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.add("anim-subir-show");
  });
});
const itensAnimacaoSubir = document.querySelectorAll(".anim-subir-hidden");
itensAnimacaoSubir.forEach((element) => observadorAnimSubir.observe(element));

const observadorAnimAumentar = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("anim-aumentar-show");
    }
  });
});

const itensAnimacao = document.querySelectorAll(".anim-aumentar-hidden");
itensAnimacao.forEach((element) => observadorAnimAumentar.observe(element));
