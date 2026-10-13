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
  let x = window.innerWidth / 2
  let y = window.innerHeight / 2

  // Mede a origem depois da troca: no celular o header muda de altura entre
  // os modos e empurra a foto, então a posição de antes do clique fica errada
  const transition = document.startViewTransition(async () => {
    await flip()
    const rect = target?.isConnected ? target.getBoundingClientRect() : null
    if (rect) {
      x = rect.left + rect.width / 2
      y = rect.top + rect.height / 2
    }
  })

  transition.ready.then(() => {
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    )
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
}
