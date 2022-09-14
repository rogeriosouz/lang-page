const sessaoAparecer = document.querySelector('.sessao-menu-hamburgue')

const form = document.querySelector('#formulario');

form.addEventListener('submit', (e) => {
  e.preventDefault();
})


function butaoHamburque(p) {
  if (sessaoAparecer.classList.value == 'sessao-menu-hamburgue nao-aparece') {
    sessaoAparecer.classList.remove('nao-aparece')
    sessaoAparecer.classList.add('aparecer')
  } else {
    sessaoAparecer.classList.remove('aparecer')
    sessaoAparecer.classList.add('nao-aparece')
  }
}

const navBut = document.querySelector('.navegacao-menu-hamburgue')
navBut.addEventListener('click', (e) => {
  sessaoAparecer.classList.remove('aparecer')
  sessaoAparecer.classList.add('nao-aparece')
})