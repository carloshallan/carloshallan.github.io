import { nextTick, ref, watch } from 'vue'

// Easter egg: clicar na foto do topo troca o site para o lado escritor
// (C.H. Blacksmith), com as cores preto e vermelho do chblacksmith.com.br
export const writerMode = ref(false)

if (typeof document !== 'undefined') {
  watch(writerMode, active => {
    document.documentElement.classList.toggle('writer', active)
  })
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// O novo tema surge num círculo que cresce a partir do ponto clicado. Sem
// suporte à View Transitions API (ou com movimento reduzido), troca direto.
export function toggleWriterMode(event?: MouseEvent) {
  const flip = () => {
    writerMode.value = !writerMode.value
    return nextTick()
  }

  if (!document.startViewTransition || prefersReducedMotion()) {
    flip()
    return
  }

  const target = event?.currentTarget as HTMLElement | undefined

  // A foto ganha um nome de transição para o navegador posicioná-la dentro da
  // própria animação. No celular, a camada da animação inclui a área da barra
  // de endereço e não bate com as coordenadas da página, então a origem do
  // círculo é lida da posição da foto nessa camada
  if (target) target.style.viewTransitionName = PHOTO_TRANSITION

  const transition = document.startViewTransition(flip)

  transition.ready.then(() => {
    const { x, y, width, height } = transitionOrigin(target)
    const radius = Math.hypot(Math.max(x, width - x), Math.max(y, height - y))
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${radius}px at ${x}px ${y}px)`
        ]
      },
      {
        duration: 900,
        easing: 'cubic-bezier(0.7, 0, 0.3, 1)',
        pseudoElement: '::view-transition-new(root)'
      }
    )
  })

  transition.finished.finally(() => {
    if (target) target.style.viewTransitionName = ''
  })
}

const PHOTO_TRANSITION = 'profile-switch'

// Volta ao topo e, ao chegar, clica na foto como o visitante faria, para a
// troca de tema sair do mesmo ponto
export function switchFromTop() {
  const flip = () =>
    document.querySelector<HTMLElement>('.profileSwitch')?.click()

  window.scrollTo({
    top: 0,
    behavior: prefersReducedMotion() ? 'auto' : 'smooth'
  })

  const start = performance.now()
  const waitForTop = () => {
    if (window.scrollY <= 0 || performance.now() - start > 2500) flip()
    else requestAnimationFrame(waitForTop)
  }
  requestAnimationFrame(waitForTop)
}

// Centro da foto e tamanho da camada da animação, nas coordenadas dela
function transitionOrigin(target?: HTMLElement) {
  const html = document.documentElement
  const layer = getComputedStyle(html, '::view-transition')
  const width = parseFloat(layer.width) || window.innerWidth
  const height = parseFloat(layer.height) || window.innerHeight

  const group = getComputedStyle(
    html,
    `::view-transition-group(${PHOTO_TRANSITION})`
  )
  const offset = group.transform.match(/matrix\(([^)]+)\)/)
  const groupWidth = parseFloat(group.width)
  const groupHeight = parseFloat(group.height)
  if (offset && groupWidth && groupHeight) {
    const values = offset[1].split(',').map(Number)
    return {
      x: values[4] + groupWidth / 2,
      y: values[5] + groupHeight / 2,
      width,
      height
    }
  }

  // Sem a foto na transição, usa a posição dela na página
  const rect = target?.isConnected ? target.getBoundingClientRect() : null
  return {
    x: rect ? rect.left + rect.width / 2 : width / 2,
    y: rect ? rect.top + rect.height / 2 : height / 2,
    width,
    height
  }
}
