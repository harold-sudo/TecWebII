const pista = document.querySelector('.track')
const puntos = Array.from(document.querySelectorAll('.dot'))
let telefonos = []

let indice = 1
let enTransicion = false

function obtenerEspacio() {
  const cs = getComputedStyle(pista || document.documentElement)
  const espacio = cs.getPropertyValue('gap') || cs.getPropertyValue('column-gap')
  if (espacio) return parseFloat(espacio) || 0
  if (telefonos[0]) {
    const pcs = getComputedStyle(telefonos[0])
    return parseFloat(pcs.marginRight) || 0
  }
  return 0
}

function actualizarCarrusel() {
  if (!pista || telefonos.length === 0) return
  const espacio = obtenerEspacio()
  const contenedor = pista.parentElement
  const anchoContenedor = contenedor ? contenedor.getBoundingClientRect().width : window.innerWidth
  const visibles = 3
  const anchoSlide = Math.max(80, (anchoContenedor - espacio * (visibles - 1)) / visibles)
  telefonos.forEach(p => p.style.width = `${anchoSlide}px`)
  const centro = Math.floor(visibles / 2)
  const desplazamiento = -((indice - centro) * (anchoSlide + espacio))
  pista.style.transition = enTransicion ? 'transform 0.4s ease' : 'none'
  pista.style.transform = `translateX(${desplazamiento}px)`
  telefonos.forEach(p => p.classList.remove('active', 'visible'))
  puntos.forEach(p => p.classList.remove('active'))
  const central = telefonos[indice]
  if (central) central.classList.add('active')
  ;[indice - 1, indice, indice + 1].forEach(i => { if (telefonos[i]) telefonos[i].classList.add('visible') })
  const indiceReal = Math.min(Math.max(indice - 1, 0), puntos.length - 1)
  if (puntos[indiceReal]) puntos[indiceReal].classList.add('active')
}

puntos.forEach((punto, i) => {
  punto.addEventListener('click', () => {
    indice = i + 1
    enTransicion = true
    actualizarCarrusel()
  })
})

const btnPrev = document.querySelector('.carousel__control--prev')
const btnNext = document.querySelector('.carousel__control--next')

function siguiente() {
  if (enTransicion) return
  enTransicion = true
  indice += 1
  actualizarCarrusel()
}

function anterior() {
  if (enTransicion) return
  enTransicion = true
  indice -= 1
  actualizarCarrusel()
}

if (btnNext) btnNext.addEventListener('click', siguiente)
if (btnPrev) btnPrev.addEventListener('click', anterior)

window.addEventListener('resize', () => {
  clearTimeout(window.__carouselResizeTimeout)
  window.__carouselResizeTimeout = setTimeout(actualizarCarrusel, 80)
})

document.addEventListener('DOMContentLoaded', () => {
  if (!pista) return
  const originales = Array.from(pista.querySelectorAll('.phone'))
  if (originales.length === 0) return
  const clonPrimero = originales[0].cloneNode(true)
  const clonUltimo = originales[originales.length - 1].cloneNode(true)
  pista.appendChild(clonPrimero)
  pista.insertBefore(clonUltimo, pista.firstChild)
  telefonos = Array.from(pista.querySelectorAll('.phone'))
  indice = 1
  pista.addEventListener('transitionend', () => {
    enTransicion = false
    if (indice === telefonos.length - 1) {
      indice = 1
      enTransicion = false
      actualizarCarrusel()
    }
    if (indice === 0) {
      indice = telefonos.length - 2
      enTransicion = false
      actualizarCarrusel()
    }
  })
  const activo = telefonos.findIndex(p => p.classList.contains('active'))
  if (activo >= 0) indice = activo
  actualizarCarrusel()
})