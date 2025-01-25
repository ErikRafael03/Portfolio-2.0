// inicio MENU MOBILE
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('nav-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})
overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})
// fim MENU MOBILE

// BOTÃO CONTATO
function scrollToSection(event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    
    const section = document.querySelector("#section-contato"); // Seleciona a seção desejada
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" }); // Rola suavemente até a seção
    }
  }
// BOTÃO CONTATO

// VOLTAR AO INICIO
const backToTop = document.getElementById("voltarInicio");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) { // Ajuste o valor conforme necessário
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});

backToTop.addEventListener("click", (event) => {
  event.preventDefault(); // Previne comportamento padrão do link
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
// VOLTAR AO INICIO

// INICIO ANIMAÇÃO SCROLL
const elements = document.querySelectorAll('.hidden')

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
        // else{
        //     entry.target.classList.remove('show')
        // }
    })
})

elements.forEach((element) => myObserver.observe(element))


// efeito scroll inserido com sucesso apenas na section 2. Rever o tempo de animação!!!!

// FIM ANIMAÇÃO SCROLL

function mostrartxt1() {
    var txt = document.getElementById('txt1')
    var txtF = document.getElementById('txtfixo')
    txt.style.display = 'none'
    txtF.style.display = 'block'
}
function tirartxt1() {
    var txt = document.getElementById('txt1')
    var txtF = document.getElementById('txtfixo')
    txt.style.display = 'block'
    txtF.style.display = 'none'
}
function mostrartxt2() {
    var txt = document.getElementById('txt2')
    var txtF = document.getElementById('txtfixo')
    txt.style.display = 'none'
    txtF.style.display = 'block'
}
function tirartxt2() {
    var txt = document.getElementById('txt2')
    var txtF = document.getElementById('txtfixo')
    txt.style.display = 'block'
    txtF.style.display = 'none'
}
function mostrartxt3() {
    var txt = document.getElementById('txt3')
    var txtF = document.getElementById('txtfixo')
    txt.style.display = 'none'
    txtF.style.display = 'block'
}
function tirartxt3() {
    var txt = document.getElementById('txt3')
    var txtF = document.getElementById('txtfixo')
    txt.style.display = 'block'
    txtF.style.display = 'none'
}
function mostrartxt4() {
    var txt = document.getElementById('txt4')
    var txtF = document.getElementById('txtfixo')
    txt.style.display = 'none'
    txtF.style.display = 'block'
}
function tirartxt4() {
    var txt = document.getElementById('txt4')
    var txtF = document.getElementById('txtfixo')
    txt.style.display = 'block'
    txtF.style.display = 'none'
}
function mostrartxt5() {
    var txt = document.getElementById('txt5')
    var txtF = document.getElementById('txtfixo')
    txt.style.display = 'none'
    txtF.style.display = 'block'
}
function tirartxt5() {
    var txt = document.getElementById('txt5')
    var txtF = document.getElementById('txtfixo')
    txt.style.display = 'block'
    txtF.style.display = 'none'
}
function mostrartxt6() {
    var txt = document.getElementById('txt6')
    var txtF = document.getElementById('txtfixo')
    txt.style.display = 'none'
    txtF.style.display = 'block'
}
function tirartxt6() {
    var txt = document.getElementById('txt6')
    var txtF = document.getElementById('txtfixo')
    txt.style.display = 'block'
    txtF.style.display = 'none'
}
function mostrartxt7() {
    var txt = document.getElementById('txt7')
    var txtF = document.getElementById('txtfixo')
    txt.style.display = 'none'
    txtF.style.display = 'block'
}
function tirartxt7() {
    var txt = document.getElementById('txt7')
    var txtF = document.getElementById('txtfixo')
    txt.style.display = 'block'
    txtF.style.display = 'none'
}
function mostrartxt8() {
    var txt = document.getElementById('txt8')
    var txtF = document.getElementById('txtfixo')
    txt.style.display = 'none'
    txtF.style.display = 'block'
}
function tirartxt8() {
    var txt = document.getElementById('txt8')
    var txtF = document.getElementById('txtfixo')
    txt.style.display = 'block'
    txtF.style.display = 'none'
}