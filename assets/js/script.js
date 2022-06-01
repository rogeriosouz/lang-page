let sessaoAparecer = document.querySelector('.sessao-but-hamb')
function butaoHamburque(p) {
  if (sessaoAparecer.classList.value == 'sessao-but-hamb nao-aparece') {
    sessaoAparecer.classList.remove('nao-aparece')
    sessaoAparecer.classList.add('aparecer')
  } else {
    sessaoAparecer.classList.remove('aparecer')
    sessaoAparecer.classList.add('nao-aparece')
  }
}

const navBut = document.querySelector('.links-but-hamb')
navBut.addEventListener('click', (e) => {
  sessaoAparecer.classList.remove('aparecer')
  sessaoAparecer.classList.add('nao-aparece')
})